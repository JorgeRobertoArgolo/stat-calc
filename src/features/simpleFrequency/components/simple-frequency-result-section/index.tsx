import { ScrollView, View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

import { colors } from '@/styles/colors';

import { calculateSimpleFrequency, getSimpleFrequencySummary } from '@/features/simpleFrequency/services/simpleFrequencyService';
import { SummaryCard } from '@/features/simpleFrequency/components/summary-card';
import { ResultsTable } from '@/features/simpleFrequency/components/result-table';

export default function SimpleFrequencyResultsSection() {
    const { rawData } = useLocalSearchParams<{ rawData: string }>();
    
    // Camada de Dados
    const results = calculateSimpleFrequency(rawData || "");
    const summary = getSimpleFrequencySummary(results);

    return ( 
        <ScrollView className="px-6" showsVerticalScrollIndicator={false}>
            <View className="flex-row items-center my-6">
                <View className="bg-primary/20 p-2 rounded-lg mr-3">
                    <MaterialIcons name="trending-up" size={20} color={colors.primary} />
                </View>
                <Text className="text-foreground text-2xl font-bold">Tabela de Frequência Simples</Text>
            </View>

            {/* Seção de Resumo */}
            <View className="bg-card border border-border rounded-[32px] p-6 mb-6">
                <Text className="text-foreground font-bold text-lg mb-4">Resumo dos Dados</Text>
                <View className="flex-row flex-wrap justify-between">
                    <SummaryCard label="Total (n)" value={summary.totalN} icon="tag" />
                    <SummaryCard label="Mínimo" value={summary.min.toFixed(2)} icon="south" />
                    <SummaryCard label="Máximo" value={summary.max.toFixed(2)} icon="north" />
                    <SummaryCard label="Amplitude" value={summary.amplitude.toFixed(2)} icon="straighten" />
                    <SummaryCard label="Valores Únicos" value={summary.uniqueCount} icon="grid-view" />
                </View>
            </View>

            {/* Tabela  */}
            <ResultsTable results={results} totalN={summary.totalN} />
        </ScrollView>
    );
}