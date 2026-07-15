import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import WelcomeSCreen from "../screens/WelcomeScreen";
import { AuthStackParamList } from "./AuthStack.types";
import RegisterScreen from "../screens/RegisterScreen";
import { defaultStackNavigationOptions } from "@/app/navigations/DefaultStackNavigationOptions";

export default function AuthStack() {

    const Stack = createNativeStackNavigator<AuthStackParamList>();
    return (
        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Group screenOptions={defaultStackNavigationOptions} screenLayout={}>
                <Stack.Screen name="Login" component={LoginScreen} />
                
                <Stack.Screen name="Welcome" component={WelcomeSCreen} />
            </Stack.Group>
            
            <Stack.Screen name="Register" component={RegisterScreen} 
                options={{
                    presentation: "modal",
                    animation: "slide_from_bottom",
                }} />
        </Stack.Navigator>
    );
}