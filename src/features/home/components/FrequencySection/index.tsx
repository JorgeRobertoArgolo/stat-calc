import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { colors } from '@/styles/colors';
import { Card } from '../Card';
import { router } from 'expo-router';


export const FrequencySection = () => {
    return (
         <ScrollView 
            contentContainerStyle={{ paddingBottom: 40 }}
            showsVerticalScrollIndicator={false}
            className="px-6"
        >
            {/* Título da Seção */}
            <View className="items-center my-8">
                <Text className="text-foreground text-3xl font-bold tracking-tight text-center">
                    Tabelas de Frequência
                </Text>
                <Text className="text-muted-foreground text-base mt-2 text-center">
                    Selecione o tipo de tabela que deseja gerar
                </Text>
            </View>

            <Card 
                iconName='format-list-bulleted'
                title='Frequência Simples'
                subtitle='Para dados discretos'
                content='Ideal para dados que podem ser listados individualmente. 
                    Calcula FA, FR, FAc e FRc para cada valor único.'
                onPress={() => router.push('/simple-frequency')}
            />

            <Card 
                iconName='layers'
                title='Frequência Contínua'
                subtitle='Para dados em classes'
                content='Utiliza a Regra de Sturges para agrupar dados em intervalos de classe. 
                    Ideal para grandes conjuntos de dados.'
                onPress={() => router.push('/continuous-frequency')}
            />

            <View className="bg-card/40 border border-border rounded-[24px] p-6">
                <View className="flex-row items-center mb-4">
                    <MaterialIcons name="info-outline" color={colors['muted-foreground']} size={20} className="mr-2" />
                    <Text className="text-foreground font-bold text-lg ml-2">Colunas Calculadas</Text>
                </View>
                
                <View className="flex-row flex-wrap">
                    <View className="w-1/2 mb-4">
                        <Text className="text-primary font-bold">FA <Text className="text-muted-foreground font-normal">- Absoluta</Text></Text>
                    </View>
                    <View className="w-1/2 mb-4">
                        <Text className="text-primary font-bold">FR <Text className="text-muted-foreground font-normal">- Relativa %</Text></Text>
                    </View>
                    <View className="w-1/2">
                        <Text className="text-primary font-bold">FAc <Text className="text-muted-foreground font-normal">- Abs. Acum.</Text></Text>
                    </View>
                    <View className="w-1/2">
                        <Text className="text-primary font-bold">FRc <Text className="text-muted-foreground font-normal">- Rel. Acum. %</Text></Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}