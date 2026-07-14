import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import WelcomeSCreen from "../screens/WelcomeScreen";
import { AuthStackParamList } from "./AuthStack.types";
import RegisterScreen from "../screens/RegisterScreen";

export default function AuthStack() {

    const Stack = createNativeStackNavigator<AuthStackParamList>();
    return (
        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Welcome" component={WelcomeSCreen} />
        </Stack.Navigator>
    );
}