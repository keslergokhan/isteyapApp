import { IconType } from "@/shread/types";
import { BottomTabNavigationEventMap, BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { NavigationHelpers, ParamListBase, Route } from "@react-navigation/native";

export default interface TabBarButtonProps {
    route:  Route<string>,
    navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
    options: BottomTabNavigationOptions;
    focused: boolean;
    IconName?:IconType
}