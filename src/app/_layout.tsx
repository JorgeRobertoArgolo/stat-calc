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
                <Stack.Screen name='home' />
                <Stack.Screen name='continuous-frequency' />
                <Stack.Screen name='simple-frequency' />
            </Stack>
        </QueryClientProvider>
    );
}
