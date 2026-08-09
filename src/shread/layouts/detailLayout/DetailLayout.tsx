import { View,Text } from "react-native";
import { DetailLayoutProps } from "./DetailLayout.types";
import ScreenHeader from "@/shread/components/screenHeader/ScreenHeader";
import {DefaultLayoutContextProvider} from "./contexts/DefaultLayoutContext";
import styles from "./DetailLayout.style";

export default function DetailLayout(props:DetailLayoutProps){
    return (
        <DefaultLayoutContextProvider>
            <View style={styles.container}>
                <ScreenHeader></ScreenHeader>
                {props.children}
            </View>
        </DefaultLayoutContextProvider>
    )
}