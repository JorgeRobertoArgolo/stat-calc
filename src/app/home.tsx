import { Text, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home () {
    return (
        <SafeAreaView className='justify-center items-center flex-1'>
            <Text>Tela de home</Text>

            <TouchableOpacity onPress={() => router.push('/simple-frequency')}>
                <Text>Frequência Simples</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/continuous-frequency')}>
                <Text>Frequência Contínua</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}