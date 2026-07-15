import { NavigationContainer, useNavigation } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function MainNavigator() {

    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <AuthNavigator></AuthNavigator>
        </NavigationContainer>
    );
}