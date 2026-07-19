import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";

export default function AppFooter(){
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={() => <Text>Home Screen</Text>} />
        </Tab.Navigator>
    )
}