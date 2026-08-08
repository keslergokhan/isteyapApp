import { CategoryList } from "@/features/categories";
import { ListingList } from "@/features/listing";
import { View,Text } from "react-native";

export default function HomeScreen() {
    return (
        <View>
            <CategoryList></CategoryList>
            <ListingList></ListingList>
        </View>
    );
}