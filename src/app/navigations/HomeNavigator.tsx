import HomeStack from "@/features/home/navigations/HomeStack";
import { BottomTabBarButtonProps, BottomTabBarProps, BottomTabNavigationOptions, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Pressable, Text, View, ViewStyle,StyleSheet } from "react-native";
import { CreateListingStack, ListingStack } from "@/features/listing";
import { ChatStack } from "@/features/chats";
import { ProfileStack } from "@/features/profile";
import theme from "@/shread/theme";
import { Entypo, FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function HomeNavigator() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator initialRouteName="HomeStack"
            tabBar={(props:BottomTabBarProps)=>{
                return <MyTabButtons {...props}></MyTabButtons>
            }}
            screenOptions={{
            headerShown: false,
        }}>

            <Tab.Screen name="ListingStack" options={{title:"İlanlar",tabBarIcon:()=><AntDesign name="product" size={24} color="white" />}} component={ListingStack}></Tab.Screen>

            <Tab.Screen name="ChatStack"  options={{title:"Sohbet",tabBarIcon:()=><Entypo name="chat" size={24} color="white" />}} component={ChatStack} ></Tab.Screen>

            <Tab.Screen name="HomeStack"  options={{title:"İlan",tabBarIcon:()=><FontAwesome name="home" size={24} color="white" />}} component={HomeStack} ></Tab.Screen>

            <Tab.Screen name="CreateListingStack"  options={{title:"İlanlar",tabBarIcon:()=><FontAwesome6 name="thermometer-empty" size={24} color="black" />}} component={CreateListingStack} ></Tab.Screen>

            <Tab.Screen name="ProfileStack"  options={{title:"Profil",tabBarIcon:()=><FontAwesome name="user" size={24} color="white" />}} component={ProfileStack} ></Tab.Screen>

        </Tab.Navigator>
    )
}

interface MyButtonProps extends BottomTabNavigationOptions {
}

function MyButton(props: MyButtonProps){

    const buttonBaseContainer : ViewStyle = {
    }

    const buttonStyles = StyleSheet.create({
        content:{
            borderRadius: 100,
            display:"flex",
            flex:1,
            paddingTop:5,
            justifyContent:"center",
            backgroundColor:theme.color.primary,
            alignItems:"center"
        },
        text:{
            color: theme.color.white,
            textAlign:"center",
            fontSize:10
        }
    });
    

    return (
        <Pressable style={({pressed})=>[buttonStyles.content]}>
            {props.tabBarIcon && props.tabBarIcon({color:"",focused:true,size:10})}
            <Text style={buttonStyles.text}>{props.title}</Text>
        </Pressable>
    )
}

interface MyTabButtons extends BottomTabBarProps{

}

function MyTabButtons(props:MyTabButtons){
    const styles = StyleSheet.create({
        content:{
            backgroundColor:theme.color.primaryLight,
            borderRadius:100,
            bottom:40,
            width:"95%",
            margin:"auto",
            flexDirection:"row",
            justifyContent: "space-evenly",
            alignItems: "center",
            paddingTop:10,
            paddingBottom:10,
            paddingRight:10,
            paddingLeft:10,
            gap:5
        }
    })
    return (
        <View style={styles.content}>
            {
                props.state.routes.map((x)=>{
                    return <MyButton { ...props.descriptors[x.key].options }></MyButton>
                })
            }
        </View>
    );
}