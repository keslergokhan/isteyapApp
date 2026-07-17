import { View,Text } from "react-native";
import MainLayoutProps from "./MainLayout.types";

export default function MainLayout(props:MainLayoutProps) {
    return (
        <View>
            {props.children}
        </View>
    );
}