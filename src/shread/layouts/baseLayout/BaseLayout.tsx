import { View } from "react-native";
import MainLayoutProps from "./BaseLayout.types";
import styles from "./BaseLayout.styles";

export default function BaseLayout(props:MainLayoutProps) {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    );
}