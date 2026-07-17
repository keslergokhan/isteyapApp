import HomeStack from "@/features/home/navigations/HomeStack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function HomeNavigator() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeStack" component={HomeStack}></Stack.Screen>
        </Stack.Navigator>
    )
}