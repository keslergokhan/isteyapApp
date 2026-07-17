import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeNavigator from "./WelcomeNavigator";

export default function RootNavigator() {

    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <WelcomeNavigator></WelcomeNavigator>
        </NavigationContainer>
    );
}