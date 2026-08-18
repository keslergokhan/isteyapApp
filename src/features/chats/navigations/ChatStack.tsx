import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatListScreen from "../screens/ChatListScreen";
import { DetailLayout } from "@/shread/layouts";
import { defaultStackNavigationOptions } from "@/app/navigations/configs/DefaultStackNavigationOptions";
import ChatDetailScreen from "../screens/ChatDetailScreen";
import { ChatStackParamList } from "./ChatStack.types";

export default function ChatStack() {

    const Stack = createNativeStackNavigator<ChatStackParamList>();
    return (
        <Stack.Navigator initialRouteName="ChatListScreen" screenOptions={defaultStackNavigationOptions} 
        screenLayout={({children})=>{
            return (
            <DetailLayout>
                {children}
            </DetailLayout>)
        }}>
            <Stack.Screen name="ChatListScreen" component={ChatListScreen} />
            <Stack.Screen name="ChatDetailScreen" component={ChatDetailScreen} />
       </Stack.Navigator>
    );
}