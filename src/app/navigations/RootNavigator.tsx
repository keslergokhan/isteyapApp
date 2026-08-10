import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppNavigator from "./AppNavigator";
import { CategoryListStack } from "@/features/categories";
import RootNavigatorParam from "./types/RootNavigatorParam.types";
import WelcomeStack from "@/features/welcome/navigations/WelcomeStack";

const Stack = createNativeStackNavigator<RootNavigatorParam>();

export default function RootNavigator() {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName="WelcomeNavigator" screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen name="AppNavigator" component={AppNavigator}></Stack.Screen>
                <Stack.Screen name="CategoryNavigator" component={CategoryListStack}></Stack.Screen>
                <Stack.Screen name="WelcomeNavigator" component={WelcomeStack}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}