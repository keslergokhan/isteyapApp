import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import { defaultStackNavigationOptions } from "@/app/navigations/DefaultStackNavigationOptions";
import { LoginScreen } from "@/features/auth";

export default function WelcomeStack() {
    const Stack = createNativeStackNavigator();
    
    return (
        <Stack.Navigator screenOptions={defaultStackNavigationOptions}>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
    )
}

