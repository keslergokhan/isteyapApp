import { View,Text } from "react-native";
import styles from "./AppLayout.styles";
import { AppLayoutProps } from "./AppLayout.types";
import { AppHead } from "@/shread/components";

export default function AppLayout(props:AppLayoutProps) {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    );
}