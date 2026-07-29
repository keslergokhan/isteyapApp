import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackParamList } from "./AuthStack.types";
import { LoginScreen,RegisterScreen } from "..";
import { defaultStackNavigationOptions } from "@/app/navigations/configs/DefaultStackNavigationOptions";

export default function AuthStack() {

    const Stack = createNativeStackNavigator<AuthStackParamList>();
    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={defaultStackNavigationOptions}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} options={{ title: "Kayıt Ol",}} />
        </Stack.Navigator>
    );
}