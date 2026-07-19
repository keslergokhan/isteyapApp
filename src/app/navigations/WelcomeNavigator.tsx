import { AuthStack } from "@/features/auth";
import HomeStack from "@/features/home/navigations/HomeStack";
import WelcomeStack from "@/features/welcome/navigations/WelcomeStack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { defaultStackNavigationOptions } from "./DefaultStackNavigationOptions";

export default function WelcomeNavigator() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName="WelcomeStack" screenOptions={defaultStackNavigationOptions}>
            <Stack.Screen name="AuthStack" component={AuthStack}></Stack.Screen>
        </Stack.Navigator>
    );
}