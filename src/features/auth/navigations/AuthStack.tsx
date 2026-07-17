import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackParamList } from "./AuthStack.types";
import { LoginScreen,RegisterScreen } from "..";

export default function AuthStack() {

    const Stack = createNativeStackNavigator<AuthStackParamList>();
    return (
        <Stack.Navigator initialRouteName="Login" >

            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} options={{ title: "Kayıt Ol",}} />
            
        </Stack.Navigator>
    );
}