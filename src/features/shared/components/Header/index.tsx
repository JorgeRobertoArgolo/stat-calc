import { Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '@/styles/colors';
import { router } from 'expo-router';

type HeaderType = 'primary' | 'secondary'

interface Prop {
    type?: HeaderType;
}

export const Header = ({
    type = 'primary'   
}: Prop) => {

    const isPrimary = type === 'primary';

    return (
        <View className="px-6 py-4 border-b border-border/10 bg-card"> 
            <View className="flex-row items-center">
                {isPrimary && (
                    <View 
                        style={{ backgroundColor: colors.primary }}
                        className="p-2 rounded-2xl items-center justify-center shadow-lg shadow-blue-500/50"
                    >
                        <MaterialIcons name="bar-chart" size={28} color={colors.white} />
                    </View>
                )}

                {
                    !isPrimary && (
                        <TouchableOpacity 
                            onPress={() => router.back()}
                            className="p-2 items-center justify-center"
                            activeOpacity={0.9}
                        >
                            <MaterialIcons name="arrow-back" size={26} color={colors.white} />
                        </TouchableOpacity>
                    )
                }

                <View className="ml-4">
                    <Text className="text-foreground text-2xl font-bold tracking-tight">
                        StatCalc
                    </Text>
                    <Text className="text-muted-foreground text-xs font-medium uppercase tracking-widest">
                        Estatística Descritiva
                    </Text>
                </View>
            </View>
        </View>
    );
}