import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeNavigator from "./WelcomeNavigator";
import HomeNavigator from "./HomeNavigator";

export default function RootNavigator() {

    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <HomeNavigator></HomeNavigator>
        </NavigationContainer>
    );
}