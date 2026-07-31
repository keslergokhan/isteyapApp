import { AppLayout } from "@/shread/layouts";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateListingScreen from "../screens/CreateListingScreen";
import { defaultStackNavigationOptions } from "@/app/navigations/configs/DefaultStackNavigationOptions";

export default function CreateListingStack() {

    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName="CreateListing" screenOptions={defaultStackNavigationOptions} screenLayout={({children})=>{
            return (
            <AppLayout>
                {children}
            </AppLayout>)
        }}>

            <Stack.Screen name="CreateListing" component={CreateListingScreen}></Stack.Screen>
        </Stack.Navigator>
    );
}