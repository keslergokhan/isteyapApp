import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppNavigator from "./AppNavigator";
import { CategoryListStack } from "@/features/categories";
import RootNavigatorParam from "./types/RootNavigatorParam.types";

const Stack = createNativeStackNavigator<RootNavigatorParam>();

export default function RootNavigator() {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName="AppNavigator" screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen name="AppNavigator" component={AppNavigator}></Stack.Screen>
                <Stack.Screen name="CategoryNavigator" component={CategoryListStack}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}