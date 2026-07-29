import { defaultStackNavigationOptions } from "@/app/navigations/DefaultStackNavigationOptions";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryStackRouteParams from "./CategoryListStack.type";
import CategoryScreen from "../screens/CategoryListScreen";

export default function CategoryListStack(){
    const Stack = createNativeStackNavigator<CategoryStackRouteParams>();
    
    return (
        <Stack.Navigator initialRouteName="CategoryList" screenOptions={defaultStackNavigationOptions}>
            <Stack.Screen name="CategoryList" component={CategoryScreen}></Stack.Screen>
        </Stack.Navigator>
    );
}