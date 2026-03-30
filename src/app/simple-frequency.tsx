import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '@/features/shared/components/Header';
import { SimpleFrequencySection } from '@/features/simpleFrequency/components/simple-frequency-section';

export default function SimpleFrequency() {
    return (
        <SafeAreaView className="flex-1 bg-background">
            <Header type="secondary" />
            <SimpleFrequencySection />
        </SafeAreaView>
    );
}