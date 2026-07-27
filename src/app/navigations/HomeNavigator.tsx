import HomeStack from "@/features/home/navigations/HomeStack";
import {  BottomTabBarProps, BottomTabNavigationEventMap, BottomTabNavigationOptions, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Pressable, Text, View, ViewStyle,StyleSheet, GestureResponderEvent } from "react-native";
import { CreateListingStack, ListingStack } from "@/features/listing";
import { ChatStack } from "@/features/chats";
import { ProfileStack } from "@/features/profile";
import theme from "@/shread/theme";
import { Entypo, FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import AntDesign from '@expo/vector-icons/AntDesign';
import { NavigationHelpers, ParamListBase, Route } from "@react-navigation/native";
import { useCallback } from "react";
import GLobalTabBar from "./components/GlobalTabBar/GlobalTabBar";
import HomeNavigationConfig from "./configs/HomeNavigation.config";
import { NavigationConfig } from "./Navigation.types.ts";


export default function HomeNavigator() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator initialRouteName="HomeStack"
                tabBar={(props:BottomTabBarProps)=>{
                    return <GLobalTabBar key="menu" {...props}></GLobalTabBar>
                }}
                screenOptions={{
                headerShown: false,
            }}>

            {HomeNavigationConfig.map((item:NavigationConfig)=>{
                return <Tab.Screen name={item.route}  options={{title:item.title}} component={item.component} ></Tab.Screen>
            })}
        </Tab.Navigator>
    )
}

