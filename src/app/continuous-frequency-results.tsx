import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Header } from '@/features/shared/components/Header';
import { ContinuousFrequencyResultSection } from '@/features/continuousFrequency/components/continuous-frequency-result-section';

export default function ContinuousFrequencyResults() {
    const { rawData } = useLocalSearchParams<{ rawData: string }>();

    return (
        <SafeAreaView className="flex-1 bg-background">
            <Header type="secondary" />
            <ContinuousFrequencyResultSection rawData={rawData} />
        </SafeAreaView>
    );
}
