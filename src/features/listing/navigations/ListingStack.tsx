import { defaultStackNavigationOptions } from "@/app/navigations/DefaultStackNavigationOptions";
import { DefaultLayout } from "@/shread/layouts";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListingScreen from "../screens/ListingScreen";

export default function ListingStack() {

    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Listing" screenOptions={defaultStackNavigationOptions} screenLayout={({children})=>{
            return (
            <DefaultLayout>
                {children}
            </DefaultLayout>)
        }}>
            <Stack.Screen name="Listing" component={ListingScreen}></Stack.Screen>
        </Stack.Navigator>
    );
}