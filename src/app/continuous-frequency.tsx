import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '@/features/shared/components/Header';
import { ContinuousFrequencySection } from '@/features/continuousFrequency/components/continuous-frequency-section';

export default function ContinuousFrequency() {
    return (
        <SafeAreaView className="flex-1 bg-background">
            <Header type="secondary" />
            <ContinuousFrequencySection />
        </SafeAreaView>
    );
}