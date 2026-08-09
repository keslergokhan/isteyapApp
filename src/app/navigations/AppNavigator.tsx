import {  BottomTabBarProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import GLobalTabBar from "./components/GlobalTabBar/GlobalTabBar";
import HomeNavigationConfig from "./configs/AppNavigation.config";
import { NavigationConfig } from "./types/Navigation.types";
import { AppLayout } from "@/shread/layouts";

const Tab = createBottomTabNavigator();
export default function AppNavigator() {
    
    return (
        <Tab.Navigator initialRouteName="HomeStack"
                tabBar={(props:BottomTabBarProps)=>{
                    return <GLobalTabBar key="menu" {...props}></GLobalTabBar>
                }}
                screenOptions={{
                    headerShown: false,
                }}
                
                screenLayout={(props:{children:React.ReactNode})=>{
                    return (<AppLayout>
                        {props.children}
                    </AppLayout>)
                }}
            >

            {HomeNavigationConfig.map((item:NavigationConfig)=>{
                return <Tab.Screen name={item.route}  options={{title:item.title}} component={item.component} ></Tab.Screen>
            })}
        </Tab.Navigator>
    )
}

