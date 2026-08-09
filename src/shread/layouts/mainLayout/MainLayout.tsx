import { View } from "react-native";
import MainLayoutProps from "./MainLayout.types";
import styles from "./MainLayout.styles";

export default function MainLayout(props:MainLayoutProps) {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    );
}