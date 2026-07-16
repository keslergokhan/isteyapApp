import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import WelcomeSCreen from "../screens/WelcomeScreen";
import { AuthStackParamList } from "./AuthStack.types";
import RegisterScreen from "../screens/RegisterScreen";
import { defaultStackNavigationOptions } from "@/app/navigations/DefaultStackNavigationOptions";
import { MainLayout } from "@/shread/layouts";

export default function AuthStack() {

    const Stack = createNativeStackNavigator<AuthStackParamList>();
    return (
        <Stack.Navigator initialRouteName="Welcome" >

            <Stack.Group screenOptions={defaultStackNavigationOptions} 
                screenLayout={({children})=>{
                    return (<MainLayout>
                        {children}
                    </MainLayout>)
                }}>
                <Stack.Screen name="Login" component={LoginScreen} />
                
            </Stack.Group>
            
            <Stack.Screen name="Welcome" component={WelcomeSCreen} />
            <Stack.Screen name="Register" component={RegisterScreen} 
                options={{
                    title: "Kayıt Ol",
                }} />
        </Stack.Navigator>
    );
}