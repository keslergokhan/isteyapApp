import { defaultStackNavigationOptions } from "@/app/navigations/DefaultStackNavigationOptions";
import { DefaultLayout } from "@/shread/layouts";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../screens/ProfileScreen";

export default function ProfileStack() {

    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Profile" screenOptions={defaultStackNavigationOptions} screenLayout={({children})=>{
            return (
            <DefaultLayout>
                {children}
            </DefaultLayout>)
        }}>
            <Stack.Screen name="Profile" component={ProfileScreen}></Stack.Screen>
        </Stack.Navigator>
    );
}