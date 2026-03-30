import { View, Text } from 'react-native';

interface Props {
    k: number;
    at: number;
    h: number;
    n: number;
    min: number;
}

export const SturgesCalculationCard = ({ k, at, h, n, min }: Props) => {
    const Item = ({ label, value, formula }: { label: string; value: string | number; formula: string }) => (
        <View className="bg-secondary/20 border border-border/40 rounded-2xl p-4 w-[31%]">
            <Text className="text-muted-foreground text-[10px] font-bold uppercase mb-1">{label}</Text>
            <Text className="text-primary text-lg font-bold">{value}</Text>
            <Text className="text-muted-foreground text-[9px] mt-1 italic">{formula}</Text>
        </View>
    );

    return (
        <View className="bg-card border border-border rounded-[32px] p-6 mb-6">
            <Text className="text-foreground font-bold text-lg mb-4">Cálculos da Regra de Sturges</Text>
            <View className="flex-row justify-between">
                <Item label="Classes (k)" value={k} formula={`1 + 3.322 * log(${n})`} />
                <Item label="Amplitude (AT)" value={at.toFixed(2)} formula={`${(at + min).toFixed(1)} - ${min.toFixed(1)}`} />
                <Item label="Intervalo (h)" value={h.toFixed(2)} formula="AT / k" />
            </View>
        </View>
    );
};