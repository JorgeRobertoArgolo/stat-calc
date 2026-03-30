/**
 * Representa a estrutura de uma linha na tabela de frequências.
 */
export interface SimpleFrequencyRow {
    xi: number;    // O dado individual (variável)
    fa: number;    // Frequência Absoluta: contagem simples do valor
    fr: number;    // Frequência Relativa: representação percentual do valor no total
    fac: number;   // Frequência Absoluta Acumulada: soma das FAs até este ponto
    frc: number;   // Frequência Relativa Acumulada: soma das FRs até este ponto (%)
}

/**
 * Estrutura para os dados consolidados do conjunto (o "dashboard" de resumo).
 */
export interface SimpleFrequencySummary {
    totalN: number;    // Tamanho da amostra (total de elementos válidos)
    min: number;       // O menor valor encontrado
    max: number;       // O maior valor encontrado
    amplitude: number; // Diferença entre o maior e o menor valor (AT)
    uniqueCount: number; // Quantidade de categorias/valores distintos
}

export const calculateSimpleFrequency = (input: string): SimpleFrequencyRow[] => {
    /**Irá remover os espaços em branco e as virgulas, para pegar os valores(somente números) */
    const rawValues = input
        .split(/[,\s\n]+/)
        .map(val => val.trim().replace(',', '.'))
        .filter(val => val !== "" && !isNaN(Number(val)))
        .map(Number);

    /**Senão tiver nenhum número, irá retornar um array vazio */
    if (rawValues.length === 0) return [];

    /**Ordena em ordem crescente */
    rawValues.sort((a, b) => a - b);

    /**Pega o total de números */
    const total = rawValues.length;

    /**
     * Array que irá pegar o <valor, quantidade de vezes que ele aparece>
    */
    const counts: Record<number, number> = {};
    
    /**
     * Faz a contagem de quantas vezes cada valor aparece, e armazena no objeto counts
    */
    rawValues.forEach(val => {
        counts[val] = (counts[val] || 0) + 1;
    });

    /** Extrai os valores únicos das chaves do objeto, garante que sejam números e os reordena */
    const uniqueValues = Object.keys(counts).map(Number).sort((a, b) => a - b);

    /** Variáveis auxiliares para realizar o somatório acumulado durante a iteração da tabela */
    let accumulatedFA = 0;
    let accumulatedFR = 0;

    /** Transforma os valores únicos e suas contagens na estrutura final da tabela de frequências */
    return uniqueValues.map(xi => {
        const fa = counts[xi];
        const fr = (fa / total) * 100;

        // Atualiza os acumuladores para as colunas FAc e FRc
        accumulatedFA += fa;
        accumulatedFR += fr;

        return {
            xi,
            fa,
            fr: Number(fr.toFixed(2)),
            fac: accumulatedFA,
            frc: Number(accumulatedFR.toFixed(2))
        };
    });
};

/**
 * Função para calcular o resumo dos dados, como total, mínimo, máximo, amplitude e quantidade de valores únicos
 */
export const getSimpleFrequencySummary = (results: SimpleFrequencyRow[]): SimpleFrequencySummary => {
    
    /** Retorna valores zerados para evitar erros de runtime em arrays vazios */
    if (results.length === 0) {
        return { totalN: 0, min: 0, max: 0, amplitude: 0, uniqueCount: 0 };
    }

    /** Calcula o N total somando as frequências absolutas de todas as linhas */
    const totalN = results.reduce((acc, curr) => acc + curr.fa, 0);

    /** O mínimo e máximo são extraídos das extremidades da lista, já que os dados estão ordenados */
    const min = results[0].xi;
    const max = results[results.length - 1].xi;

    return {
        totalN,
        min,
        max,
        amplitude: max - min,
        uniqueCount: results.length
    };
};