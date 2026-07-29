import CategoryStackRouteParams from "@/features/categories/navigations/CategoryListStackParam.type";
import { NavigatorScreenParams } from "@react-navigation/native";

type RootNavigatorParam = {
    AppNavigator:undefined;
    CategoryNavigator:NavigatorScreenParams<CategoryStackRouteParams>;
};

export default RootNavigatorParam;