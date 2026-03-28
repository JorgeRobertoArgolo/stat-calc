import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { colors } from '@/styles/colors';

interface Props extends TouchableOpacityProps{
    iconName: keyof typeof MaterialIcons.glyphMap;
    title: string;
    subtitle: string;
    content: string;
}

export const Card = ({
    content,
    iconName,
    title,
    subtitle,
    ...rest
}: Props) => {
    return (
        <TouchableOpacity 
            activeOpacity={0.7}
            className="bg-card border border-border rounded-[28px] p-6 mb-5"
            {...rest}
        >
            <View className="flex-row items-center mb-4">
                <View className="bg-muted p-3 rounded-2xl mr-4">
                    <MaterialIcons name={iconName} color={colors.primary} size={28} />
                </View>
                <View>
                    <Text className="text-foreground text-xl font-bold">{title}</Text>
                    <Text className="text-muted-foreground text-sm font-medium">{subtitle}</Text>
                </View>
            </View>
            
            <Text className="text-muted-foreground leading-6">
                {content}
            </Text>
        </TouchableOpacity>
    );
}