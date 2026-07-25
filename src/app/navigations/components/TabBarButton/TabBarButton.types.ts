import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BottomTabNavigationEventMap, BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { NavigationHelpers, ParamListBase, Route } from "@react-navigation/native";

export default interface TabBarButtonProps {
    route:  Route<string>,
    navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
    options: BottomTabNavigationOptions;
    focused: boolean;
    IconName?:keyof typeof MaterialCommunityIcons.glyphMap
}