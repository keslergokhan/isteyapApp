import { ListingList } from "@/features/listing";
import { AppHead } from "@/shread/components";
import { View,} from "react-native";

export default function HomeScreen() {
    return (
        <View>
            <AppHead></AppHead>
            <ListingList></ListingList>
        </View>
    );
}