import HomeStack from "@/features/home/navigations/HomeStack";
import { BottomTabBarButtonProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeStack from "@/features/welcome/navigations/WelcomeStack";
import { Text, View } from "react-native";
import { CreateListingStack, ListingStack } from "@/features/listing";
import { ChatStack } from "@/features/chats";
import { ProfileStack } from "@/features/profile";

export default function HomeNavigator() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator initialRouteName="HomeStack" screenOptions={{
            headerShown: false,
            tabBarStyle:{
                backgroundColor:"red",
                borderRadius:100,
                height:50,
                bottom:40,
                width:"95%",
                display:"flex",
                margin:"auto",
            },
        }}>

            <Tab.Screen name="ListingStack" component={ListingStack} options={{tabBarButton:(props)=>{
                return <MyButton {...props}>İlanlar</MyButton>
            }}}></Tab.Screen>

            <Tab.Screen name="ChatStack" component={ChatStack} options={{tabBarButton:(props)=>{
                return <MyButton {...props}>Sohbet</MyButton>
            }}}></Tab.Screen>

            <Tab.Screen name="HomeStack" component={HomeStack} options={{tabBarButton:(props)=>{
                return <MyButton {...props}>Ana Sayfa</MyButton>
            }}}></Tab.Screen>

            <Tab.Screen name="CreateListingStack" component={CreateListingStack} options={{tabBarButton:(props)=>{
                return <MyButton {...props}>İlan Ver</MyButton>
            }}}></Tab.Screen>

            <Tab.Screen name="ProfileStack" component={ProfileStack} options={{tabBarButton:(props)=>{
                return <MyButton {...props}>Hesabım</MyButton>
            }}}></Tab.Screen>

        </Tab.Navigator>
    )
}

interface MyButtonProps extends BottomTabBarButtonProps{
    children: React.ReactNode;
}

function MyButton(props: BottomTabBarButtonProps){
    return (
        <View>
            <Text>{props.children}</Text>
        </View>
    )
}