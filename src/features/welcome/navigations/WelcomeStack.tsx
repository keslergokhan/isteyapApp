import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";

export default function WelcomeStack() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
        </Stack.Navigator>
    )
}

