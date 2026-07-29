import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { defaultStackNavigationOptions } from "./DefaultStackNavigationOptions";
import { CategoryListStack } from "@/features/categories";

export default function CategoryNavigator(){

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName="CategoryStack" screenOptions={defaultStackNavigationOptions}>
            <Stack.Screen name="CategoryStack" component={CategoryListStack}></Stack.Screen>
        </Stack.Navigator>
    );
}