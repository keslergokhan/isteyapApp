import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";

export default function MainNavigator() {
    return (
        <NavigationContainer>
            <AuthNavigator></AuthNavigator>
        </NavigationContainer>
    );
}