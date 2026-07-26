import { CategoryList } from "@/features/categories";
import { View,Text } from "react-native";

export default function HomeScreen() {
    return (
        <View>
            <CategoryList></CategoryList>
            <Text>Anasayfa</Text>
        </View>
    );
}