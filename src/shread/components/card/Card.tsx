import { View } from "react-native";
import { AppCardProps } from "./Card.types";
import { CarStyles } from "./Card.styles";

export function AppCard(props:AppCardProps){
    const variand = props.variant ? props.variant : "primary";
    return <View style={[CarStyles[variand],props.styles]}>{props.children}</View>
}