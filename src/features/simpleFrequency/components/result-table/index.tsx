import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '@/styles/colors';
import { SimpleFrequencyRow } from '@/features/simpleFrequency/services/simpleFrequencyService';

interface ResultsTableProps {
    results: SimpleFrequencyRow[];
    totalN: number;
}

export const ResultsTable = ({ results, totalN }: ResultsTableProps) => (
    <View className="bg-card border border-border rounded-[32px] p-6 mb-10">
        <View className="flex-row items-center mb-6">
            <MaterialIcons name="swap-vert" size={20} color={colors.primary} />
            <Text className="text-foreground font-bold text-lg ml-2">Distribuição de Frequências</Text>
        </View>

        <View className="flex-row border-b border-border pb-3 mb-3">
            <Text className="flex-1 text-foreground font-bold text-xs">Valor</Text>
            <Text className="flex-1 text-center text-foreground font-bold text-xs">FA</Text>
            <Text className="flex-1 text-center text-primary font-bold text-xs">FR (%)</Text>
            <Text className="flex-1 text-center text-foreground font-bold text-xs">FAc</Text>
            <Text className="flex-1 text-right text-primary font-bold text-xs">FRc (%)</Text>
        </View>

        {results.map((row, index) => (
            <View key={index} className="flex-row py-4 border-b border-border/30">
                <Text className="flex-1 text-foreground font-medium">{row.xi}</Text>
                <Text className="flex-1 text-center text-foreground">{row.fa}</Text>
                <Text className="flex-1 text-center text-primary font-bold">{row.fr.toFixed(2)}</Text>
                <Text className="flex-1 text-center text-foreground">{row.fac}</Text>
                <Text className="flex-1 text-right text-primary font-bold">{row.frc.toFixed(2)}</Text>
            </View>
        ))}

        <View className="flex-row pt-4">
            <Text className="flex-1 text-foreground font-bold text-lg">Total</Text>
            <Text className="flex-1 text-center text-foreground font-bold text-lg">{totalN}</Text>
            <Text className="flex-1 text-center text-primary font-bold text-lg">100.00</Text>
            <Text className="flex-x text-center text-muted-foreground">-</Text>
            <Text className="flex-x text-right text-muted-foreground">-</Text>
        </View>
    </View>
);