import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { defaultStackNavigationOptions } from "./DefaultStackNavigationOptions";
import HomeNavigator from "./HomeNavigator";
import CategoryNavigator from "./CategoryNavigator";

export default function MainNavigator(){

    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName="HomeStack" screenOptions={defaultStackNavigationOptions}>
            <HomeNavigator></HomeNavigator>
            <CategoryNavigator></CategoryNavigator>
        </Stack.Navigator>
    );
}