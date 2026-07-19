import { defaultStackNavigationOptions } from "@/app/navigations/DefaultStackNavigationOptions";
import { DefaultLayout } from "@/shread/layouts";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateListingScreen from "../screens/CreateListingScreen";

export default function CreateListingStack() {

    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName="CreateListing" screenOptions={defaultStackNavigationOptions} screenLayout={({children})=>{
            return (
            <DefaultLayout>
                {children}
            </DefaultLayout>)
        }}>

            <Stack.Screen name="CreateListing" component={CreateListingScreen}></Stack.Screen>
        </Stack.Navigator>
    );
}