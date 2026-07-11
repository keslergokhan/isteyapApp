import { View } from "react-native";
import { AppCardProps } from "./Card.types";
import { AppCardStyles } from "./Card.styles";

export default function AppCard(props:AppCardProps){
    const variand = props.variant ? props.variant : "primary";
    return <View style={[AppCardStyles[variand],props.styles]}>{props.children}</View>
}