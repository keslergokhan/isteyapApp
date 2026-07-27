import { defaultStackNavigationOptions } from "@/app/navigations/DefaultStackNavigationOptions";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryStackRouteParams from "./CategoryListStack.type";

export default function CategoryStack(){
    const Stack = createNativeStackNavigator<CategoryStackRouteParams>();
    
    return (
        <Stack.Navigator initialRouteName="CategoryList" screenOptions={defaultStackNavigationOptions}>
            <Stack.Screen name="CategoryList" component={CategoryStack}></Stack.Screen>
        </Stack.Navigator>
    );
}