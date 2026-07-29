import CategoryStackRouteParams from "@/features/categories/navigations/CategoryListStackParam.type";
import { NavigatorScreenParams } from "@react-navigation/native";
import AppNavigatorParam from "./AppNavigatorParam.types";

type RootNavigatorParam = {
    AppNavigator:NavigatorScreenParams<AppNavigatorParam>;
    CategoryNavigator:NavigatorScreenParams<CategoryStackRouteParams>;
};

export default RootNavigatorParam;