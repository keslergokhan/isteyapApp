import { View } from "react-native";
import { AppCardStyles } from "./Card.styles";
import AppCardProps from "./Card.types";

export default function AppCard(props:AppCardProps){
    const variand = props.variant ? props.variant : "basic";
    return <View style={[AppCardStyles[variand],props.style]}>{props.children}</View>
}