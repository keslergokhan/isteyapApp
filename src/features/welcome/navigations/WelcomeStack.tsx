import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import { AuthStack } from "@/features/auth";
import { defaultStackNavigationOptions } from "@/app/navigations/configs/DefaultStackNavigationOptions";
import { WelcomeStackParamList } from "./WelcomeStack.type";

export default function WelcomeStack() {
    const Stack = createNativeStackNavigator<WelcomeStackParamList>();
    
    return (
        <Stack.Navigator initialRouteName="Welcome" screenOptions={defaultStackNavigationOptions}>
            <Stack.Screen name="AuthStack" component={AuthStack} />
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
        </Stack.Navigator>
    )
}

