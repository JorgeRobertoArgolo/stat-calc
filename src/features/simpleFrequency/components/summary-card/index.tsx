import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '@/styles/colors';

interface SummaryCardProps {
    label: string;
    value: string | number;
    icon: keyof typeof MaterialIcons.glyphMap;
}

export const SummaryCard = ({ label, value, icon }: SummaryCardProps) => (
    <View className="bg-secondary/30 border border-border/50 rounded-2xl p-4 w-[48%] mb-4">
        <View className="flex-row items-center mb-1">
            <MaterialIcons name={icon} size={16} color={colors.primary} />
            <Text className="text-muted-foreground text-[10px] uppercase font-bold ml-2">{label}</Text>
        </View>
        <Text className="text-foreground text-xl font-bold">{value}</Text>
    </View>
);