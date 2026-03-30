import { SafeAreaView } from 'react-native-safe-area-context';
import SimpleFrequencyResultsSection from '@/features/simpleFrequency/components/simple-frequency-result-section';
import { Header } from '@/features/shared/components/Header';


export default function SimpleFrequencyResults() {

    return (
        <SafeAreaView className="flex-1 bg-background">
            <Header type="secondary" />
            <SimpleFrequencyResultsSection />
        </SafeAreaView>
    );
}