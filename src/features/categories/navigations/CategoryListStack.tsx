import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryStackRouteParams from "./CategoryListStackParam.type";
import CategoryScreen from "../screens/CategoryListScreen";
import { defaultStackNavigationOptions } from "@/app/navigations/configs/DefaultStackNavigationOptions";

const Stack = createNativeStackNavigator<CategoryStackRouteParams>();

export default function CategoryListStack(){
    return (
        <Stack.Navigator initialRouteName="CategoryList" screenOptions={defaultStackNavigationOptions}>
            <Stack.Screen name="CategoryList" component={CategoryScreen}></Stack.Screen>
        </Stack.Navigator>
    );
}