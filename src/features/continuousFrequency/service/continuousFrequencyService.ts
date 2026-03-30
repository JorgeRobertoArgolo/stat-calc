/**
 * Interface que define a estrutura de cada linha da tabela de frequência contínua.
 */
export interface ContinuousFrequencyRow {
    label: string; // Representação visual do intervalo (ex: "10.0 ⊢ 15.0")
    xi: number;    // Ponto médio da classe: (Limite Inferior + Limite Superior) / 2
    fa: number;    // Frequência Absoluta: quantidade de elementos dentro daquela classe
    fr: number;    // Frequência Relativa: percentual da classe em relação ao total (%)
    fac: number;   // Frequência Absoluta Acumulada
    frc: number;   // Frequência Relativa Acumulada (%)
}

/**
 * Interface para os detalhes técnicos dos cálculos baseados na Regra de Sturges.
 */
export interface SturgesDetails {
    k: number;      // Número de classes (linhas da tabela)
    at: number;     // Amplitude Total: Diferença entre o maior e o menor valor do conjunto
    h: number;      // Amplitude da Classe (intervalo): AT / k
    totalN: number; // Tamanho total da amostra
    min: number;    // Valor mínimo do conjunto
    max: number;    // Valor máximo do conjunto
}

export const calculateContinuousFrequency = (input: string) => {
    /** * Sanitização dos dados: Remove espaços, quebras de linha e trata vírgulas como pontos.
     * Filtra apenas entradas numéricas válidas.
     */
    const rawValues = input
        .split(/[,\s\n]+/)
        .map(val => val.trim().replace(',', '.'))
        .filter(val => val !== "" && !isNaN(Number(val)))
        .map(Number)
        .sort((a, b) => a - b); // Criação do ROL (dados ordenados)

    /** Retorno padrão caso o input esteja vazio para evitar erros de cálculo */
    if (rawValues.length === 0) return { rows: [], info: null };

    /** Definição das variáveis base do conjunto de dados */
    const n = rawValues.length;
    const min = rawValues[0];
    const max = rawValues[n - 1];
    const at = max - min;

    /** * Aplicação da Regra de Sturges para definir o número ideal de classes (k).
     * Fórmula: k = 1 + 3.322 * log10(n) 
     */
    const k = Math.round(1 + 3.322 * Math.log10(n));

    /** Cálculo da Amplitude de Classe (h): determina o 'tamanho' de cada intervalo */
    const h = Number((at / k).toFixed(2));

    const rows: ContinuousFrequencyRow[] = [];
    let currentLimit = min; // Variável de controle para iterar sobre os limites das classes
    let accFA = 0; // Acumulador para Frequência Absoluta
    let accFR = 0; // Acumulador para Frequência Relativa

    /** Loop principal para construção das classes e cálculos de frequência */
    for (let i = 0; i < k; i++) {
        const lower = currentLimit;
        const upper = Number((currentLimit + h).toFixed(2));
        
        /** Cálculo do ponto médio da classe (xi) */
        const xi = Number(((lower + upper) / 2).toFixed(2));
        
        /** * Contagem de elementos (FA): 
         * Segue o padrão ⊢ (Fechado à esquerda, aberto à direita).
         * Regra de exceção: A última classe deve incluir o valor máximo (fechada em ambos os lados).
         */
        const fa = rawValues.filter(v => {
            if (i === k - 1) return v >= lower && v <= max;
            return v >= lower && v < upper;
        }).length;

        /** Cálculos de proporção e acumuladores */
        const fr = (fa / n) * 100;
        accFA += fa;
        accFR += fr;

        /** Montagem do objeto da linha com formatação visual */
        rows.push({
            label: `${lower.toFixed(1)} ⊢ ${upper.toFixed(1)}`,
            xi,
            fa,
            fr: Number(fr.toFixed(2)),
            fac: accFA,
            frc: Number(accFR.toFixed(2))
        });

        /** Define o início da próxima classe como o fim da atual */
        currentLimit = upper;
    }

    /** Consolidação dos dados técnicos para exibição no resumo/dashboard */
    const info: SturgesDetails = { k, at, h, totalN: n, min, max };
    
    return { rows, info };
};