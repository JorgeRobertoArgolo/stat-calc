import { useState } from 'react';
import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    ScrollView 
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

import { colors } from '@/styles/colors';

export const ContinuousFrequencySection = () => {

    const [data, setData] = useState('');
    
    // Dados de exemplo para o botão
    const handleLoadExample = () => {
        const example = "23, 45, 67, 34, 56, 78, 89, 12, 34, 56, 78, 90, 23, 45, 67, 89, 12, 34, 56, 78, 90, 23, 45, 67, 34, 56, 78, 89, 12, 34";
        setData(example);
    };

    // Verifica se o botão de gerar deve estar habilitado
    const isReady = data.trim().length > 0;

    const handleGenerateTable = () => {
        if (isReady) {
            router.push({
                pathname: '/continuous-frequency-results',
                params: { rawData: data } 
            });
        }
    };

    return (
        <ScrollView className="px-6" showsVerticalScrollIndicator={false}>

            <View className="items-center my-8">
                <Text className="text-foreground text-3xl font-bold text-center">
                    Frequência Contínua
                </Text>
                <Text className="text-muted-foreground text-base mt-2 text-center px-4">
                    Insira os dados para gerar a tabela de frequência
                </Text>
            </View>

            <View className="bg-card border border-border rounded-[32px] p-6 mb-8">
                <View className="flex-row items-center mb-4">
                    <MaterialIcons name="description" color={colors.primary} size={24} />
                    <Text className="text-foreground text-xl font-bold ml-2">
                        Entrada de Dados
                    </Text>
                </View>

                <Text className="text-muted-foreground text-sm mb-6">
                    Cole os números separados por vírgula, espaço ou quebra de linha
                </Text>

                <View className={`bg-secondary/50 border ${data ? 'border-primary' : 'border-border'} rounded-2xl p-4 min-h-[160px]`}>
                    <TextInput
                        multiline
                        placeholder="Ex: 1, 2, 3, 4, 5 ou 1 2 3 4 5"
                        placeholderTextColor={colors['muted-foreground']}
                        className="text-foreground text-md"
                        textAlignVertical="top"
                        value={data}
                        onChangeText={setData}
                    />
                </View>

                {/* Botões de Ação do Card */}
                <View className="flex-row justify-between mt-6">
                    
                    {/* Botão Desabilitado */}
                    <TouchableOpacity 
                        disabled
                        className="flex-row items-center justify-center border border-border/50 rounded-xl px-4 py-3 w-[48%] opacity-40"
                    >
                        <MaterialIcons name="file-upload" color={colors.white} size={20} />
                        <Text className="text-white font-bold ml-2 text-xs">Carregar Arquivo</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={handleLoadExample}
                        activeOpacity={0.7}
                        className="flex-row items-center justify-center border border-border rounded-xl px-4 py-3 w-[48%]"
                    >
                        <Text className="text-white font-bold text-xs">Dados de Exemplo</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View className="bg-card border border-border rounded-[32px] p-6 mb-8 items-start">

                <Text className="text-white text-lg font-bold mb-3">
                    Regra de Sturges
                </Text>

                <View className='gap-2'>
                    <Text className='text-muted-foreground text-sm'>
                        k = 1 + 3.322 × log₁₀(n)
                    </Text>
                    <Text className='text-muted-foreground text-sm'>
                        AT = Máximo - Mínimo
                    </Text>
                    <Text className='text-muted-foreground text-sm'>
                        h = AT / k
                    </Text>
                </View>
            </View>

            {/* Botão de gerar Tabela */}
            <TouchableOpacity 
                disabled={!isReady}
                activeOpacity={0.8}
                style={{ 
                    backgroundColor: isReady ? colors.primary : colors.muted,
                    opacity: isReady ? 1 : 0.5 
                }}
                className="rounded-2xl py-5 items-center justify-center shadow-xl mb-10"
                onPress={handleGenerateTable}
            >
                <Text className={`font-bold text-lg ${isReady ? 'text-white' : 'text-muted-foreground'}`}>
                    Gerar Tabela
                </Text>
            </TouchableOpacity>
        </ScrollView>
    );
}