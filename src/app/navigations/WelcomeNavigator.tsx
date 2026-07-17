import { AuthStack } from "@/features/auth";
import HomeStack from "@/features/home/navigations/HomeStack";
import WelcomeStack from "@/features/welcome/navigations/WelcomeStack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function WelcomeNavigator() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName="WelcomeStack">
            <Stack.Screen name="WelcomeStack" component={WelcomeStack} ></Stack.Screen>
            <Stack.Screen name="AuthStack" component={AuthStack}></Stack.Screen>
            <Stack.Screen name="HomeStack" component={HomeStack}></Stack.Screen>
        </Stack.Navigator>
    );
}