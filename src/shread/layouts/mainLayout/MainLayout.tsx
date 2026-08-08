import { View } from "react-native";
import MainLayoutProps from "./MainLayout.types";
import MainLayoutStyles from "./MainLayout.styles";

export default function MainLayout(props:MainLayoutProps) {
    return (
        <View style={MainLayoutStyles.container}>
            {props.children}
        </View>
    );
}