import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryStackRouteParams from "./CategoryListStackParam.type";
import CategoryScreen from "../screens/CategoryListScreen";
import { defaultStackNavigationOptions } from "@/app/navigations/configs/DefaultStackNavigationOptions";
import { DetailLayout } from "@/shread/layouts";
import React from "react";

const Stack = createNativeStackNavigator<CategoryStackRouteParams>();

export default function CategoryListStack(){
    return (
        <Stack.Navigator initialRouteName="CategoryList" screenOptions={defaultStackNavigationOptions}
            screenLayout={(props:{children:React.ReactNode})=>{
                return (<DetailLayout >
                    {props.children}
                </DetailLayout>)
            }}
            >
            
            <Stack.Screen name="CategoryList" options={{title:"Kategoriler"}} component={CategoryScreen}></Stack.Screen>
        </Stack.Navigator>
    );
}