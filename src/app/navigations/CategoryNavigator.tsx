import { CategoryStack } from "@/features/categories";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { defaultStackNavigationOptions } from "./DefaultStackNavigationOptions";

export default function CategoryNavigator(){

    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName="CategoryStack" screenOptions={defaultStackNavigationOptions}>
            <Stack.Screen name="CategoryStack" component={CategoryStack}></Stack.Screen>
        </Stack.Navigator>
    );
}