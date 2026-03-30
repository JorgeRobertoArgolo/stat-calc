import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '@/styles/colors';
import { ContinuousFrequencyRow } from '@/features/continuousFrequency/service/continuousFrequencyService';

interface Props {
    rows: ContinuousFrequencyRow[];
    totalN: number;
}

export const ContinuousResultsTable = ({ rows, totalN }: Props) => (
    <View className="bg-card border border-border rounded-[32px] p-6 mb-10">
        <View className="flex-row items-center mb-6">
            <MaterialIcons name="swap-vert" size={20} color={colors.primary} />
            <Text className="text-foreground font-bold text-lg ml-2">Distribuição por Classes</Text>
        </View>

        {/* Header */}
        <View className="flex-row border-b border-border pb-3 mb-3">
            <Text className="flex-[2.5] text-foreground font-bold text-xs">Classe</Text>
            <Text className="flex-1 text-center text-foreground font-bold text-xs">xi</Text>
            <Text className="flex-1 text-center text-foreground font-bold text-xs">FA</Text>
            <Text className="flex-1 text-center text-primary font-bold text-xs">FR (%)</Text>
            <Text className="flex-1 text-center text-foreground font-bold text-xs">FAc</Text>
            <Text className="flex-1 text-right text-primary font-bold text-xs">FRc (%)</Text>
        </View>

        {/* Rows */}
        {rows.map((row, index) => (
            <View key={index} className="flex-row py-4 border-b border-border/30">
                <Text className="flex-[2.5] text-foreground font-medium text-[11px]">{row.label}</Text>
                <Text className="flex-1 text-center text-muted-foreground text-[11px]">{row.xi.toFixed(1)}</Text>
                <Text className="flex-1 text-center text-foreground text-[11px]">{row.fa}</Text>
                <Text className="flex-1 text-center text-primary font-bold text-[11px]">{row.fr.toFixed(2)}</Text>
                <Text className="flex-1 text-center text-foreground text-[11px]">{row.fac}</Text>
                <Text className="flex-1 text-right text-primary font-bold text-[11px]">{row.frc.toFixed(2)}</Text>
            </View>
        ))}

        {/* Rodapé de Totalização*/}
        <View className="flex-row pt-5">
            <Text className="flex-[3.5] text-foreground font-black text-sm uppercase tracking-tighter">Total</Text>
            <Text className="flex-1 text-center text-foreground font-black text-sm">{totalN}</Text>
            <Text className="flex-1 text-center text-primary font-black text-sm">100.00</Text>
            <Text className="flex-1 text-center text-muted-foreground text-sm"></Text>
            <Text className="flex-1 text-right text-muted-foreground text-sm"></Text>
        </View>

        {/* Legenda */}
        <View className="mt-8 p-4 bg-secondary/20 rounded-xl border border-border/30">
            <Text className="text-muted-foreground text-[10px] italic leading-4">
                <Text className="font-bold text-primary">Legenda:</Text> xi = ponto médio da classe. O símbolo ⊢ indica intervalo fechado à esquerda e aberto à direita.
            </Text>
        </View>
    </View>
);