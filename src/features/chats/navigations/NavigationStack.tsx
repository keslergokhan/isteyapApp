import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatListScreen from "../screens/ChatListScreen";
import { defaultStackNavigationOptions } from "@/app/navigations/DefaultStackNavigationOptions";
import { DefaultLayout } from "@/shread/layouts";

export default function ChatStack() {

    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName="ChatListScreen" screenOptions={defaultStackNavigationOptions} screenLayout={({children})=>{
            return (
            <DefaultLayout>
                {children}
            </DefaultLayout>)
        }}>
            <Stack.Screen name="ChatListScreen" component={ChatListScreen} />
       </Stack.Navigator>
    );
}