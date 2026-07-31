import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatListScreen from "../screens/ChatListScreen";
import { AppLayout } from "@/shread/layouts";
import { defaultStackNavigationOptions } from "@/app/navigations/configs/DefaultStackNavigationOptions";

export default function ChatStack() {

    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName="ChatListScreen" screenOptions={defaultStackNavigationOptions} screenLayout={({children})=>{
            return (
            <AppLayout>
                {children}
            </AppLayout>)
        }}>
            <Stack.Screen name="ChatListScreen" component={ChatListScreen} />
       </Stack.Navigator>
    );
}