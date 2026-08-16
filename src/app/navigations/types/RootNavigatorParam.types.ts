import CategoryStackRouteParams from "@/features/categories/navigations/CategoryListStackParam.type";
import { NavigatorScreenParams } from "@react-navigation/native";
import AppNavigatorParam from "./AppNavigatorParam.types";
import { WelcomeStackParamList } from "@/features/welcome";

type RootNavigatorParam = {
    AppNavigator:NavigatorScreenParams<AppNavigatorParam>;
    CategoryNavigator:NavigatorScreenParams<CategoryStackRouteParams>;
    WelcomeNavigator:NavigatorScreenParams<WelcomeStackParamList>;
};

export default RootNavigatorParam;