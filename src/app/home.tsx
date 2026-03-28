import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '@/features/shared/components/Header';
import { FrequencySection } from '@/features/home/components/FrequencySection';

export default function Home() {
    return (
        <SafeAreaView className="flex-1 bg-background">
            <Header />
            <FrequencySection />
        </SafeAreaView>
    );
}