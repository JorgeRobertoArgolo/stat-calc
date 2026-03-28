import { Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '@/styles/colors';

export const Header = () => {
    return (
        <View className="px-6 py-4 border-b border-border/10 bg-card"> 
            <View className="flex-row items-center">
                <View 
                    style={{ backgroundColor: colors.primary }}
                    className="p-2 rounded-2xl items-center justify-center shadow-lg shadow-blue-500/50"
                >
                    <MaterialIcons name="bar-chart" size={28} color={colors.white} />
                </View>

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