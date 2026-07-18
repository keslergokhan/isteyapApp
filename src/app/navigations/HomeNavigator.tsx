import HomeStack from "@/features/home/navigations/HomeStack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { defaultStackNavigationOptions } from "./DefaultStackNavigationOptions";

export default function HomeNavigator() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={defaultStackNavigationOptions}>
            <Stack.Screen name="HomeStack" component={HomeStack}></Stack.Screen>
        </Stack.Navigator>
    )
}