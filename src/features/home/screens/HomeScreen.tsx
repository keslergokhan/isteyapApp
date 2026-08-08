import { CategoryList } from "@/features/categories";
import { ListingList } from "@/features/listing";
import { View,Text, ScrollView } from "react-native";

export default function HomeScreen() {
    return (
        <View>
            <ListingList></ListingList>
        </View>
    );
}