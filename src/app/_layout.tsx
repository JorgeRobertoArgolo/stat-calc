import { Stack } from 'expo-router';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import '@/styles/global.css';

const queryClient = new QueryClient();

export default function RootLayout () {
    return (
        <QueryClientProvider
            client={queryClient}
        >
            <Stack screenOptions={{
                headerShown: false,
            }}>
                {/** Home */}
                <Stack.Screen name='home' />

                {/** Tabelas de Frequência Simples */}
                <Stack.Screen name='simple-frequency' />
                <Stack.Screen name='simple-frequency-results' />

                {/** Tabelas de Frequência Contínua */}
                <Stack.Screen name='continuous-frequency' />
                <Stack.Screen name='continuous-frequency-results' />

            </Stack>
        </QueryClientProvider>
    );
}
