import { ScrollView, View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { colors } from '@/styles/colors';
import { SummaryCard } from '@/features/simpleFrequency/components/summary-card';
import { SturgesCalculationCard } from '@/features/continuousFrequency/components/sturges-calculation-card';
import { calculateContinuousFrequency } from '@/features/continuousFrequency/service/continuousFrequencyService';
import { ContinuousResultsTable } from '../continuous-results-table';

interface Props {
    rawData: string;
}

export const ContinuousFrequencyResultSection = ({
    rawData
}: Props) => {

    const { rows, info } = calculateContinuousFrequency(rawData || "");

    if (!info) return null;

    return (
        <ScrollView className="px-6" showsVerticalScrollIndicator={false}>
            {/* Título */}
            <View className="flex-row items-center my-6">
                <View className="bg-primary/20 p-2 rounded-lg mr-3">
                    <MaterialIcons name="layers" size={20} color={colors.primary} />
                </View>
                <Text className="text-foreground text-2xl font-bold">Frequência Contínua</Text>
            </View>

            {/* Grid de Resumo Geral */}
            <View className="bg-card border border-border rounded-[32px] p-6 mb-6">
                <Text className="text-foreground font-bold text-lg mb-4">Resumo dos Dados</Text>
                <View className="flex-row flex-wrap justify-between">
                    <SummaryCard label="Total (n)" value={info.totalN} icon="tag" />
                    <SummaryCard label="Mínimo" value={info.min.toFixed(2)} icon="south" />
                    <SummaryCard label="Máximo" value={info.max.toFixed(2)} icon="north" />
                    <SummaryCard label="Amplitude" value={info.at.toFixed(2)} icon="straighten" />
                    <SummaryCard label="Classes (k)" value={info.k} icon="grid-view" />
                    <SummaryCard label="Intervalo (h)" value={info.h} icon="swap-horiz" />
                </View>
            </View>

            {/* Card de Fórmulas Sturges */}
            <SturgesCalculationCard 
                k={info.k} 
                at={info.at} 
                h={info.h} 
                n={info.totalN} 
                min={info.min} 
            />

            {/* Tabela de Resultados com Totalizador */}
            <ContinuousResultsTable rows={rows} totalN={info.totalN} />
        </ScrollView>
    );
}