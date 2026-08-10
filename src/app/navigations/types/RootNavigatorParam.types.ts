import CategoryStackRouteParams from "@/features/categories/navigations/CategoryListStackParam.type";
import { NavigatorScreenParams } from "@react-navigation/native";
import AppNavigatorParam from "./AppNavigatorParam.types";
import { AuthStackParamList } from "@/features/auth/navigations/AuthStack.types";

type RootNavigatorParam = {
    AppNavigator:NavigatorScreenParams<AppNavigatorParam>;
    CategoryNavigator:NavigatorScreenParams<CategoryStackRouteParams>;
    WelcomeNavigator:NavigatorScreenParams<AuthStackParamList>;
};

export default RootNavigatorParam;