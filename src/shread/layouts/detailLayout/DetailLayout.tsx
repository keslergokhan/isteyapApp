import { View,Text } from "react-native";
import { DetailLayoutProps } from "./DetailLayout.types";

export default function DetailLayout(props:DetailLayoutProps){
    return (
        <View>
            <Text>Header</Text>
            {props.children}
        </View>
    )
}