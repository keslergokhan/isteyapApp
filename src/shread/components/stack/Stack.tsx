import { View } from "react-native";
import { AppStackProps } from "./Stack.types";

export function AppVStack(props:AppStackProps){
    return (
        <View style={{flexDirection:"column",gap:props.spacing}}>
            {props.cheldren}
        </View>
    );
}

export function AppHStack(props:AppStackProps){
    return (
        <View style={{flexDirection:"row",gap:props.spacing}}>
            {props.cheldren}
        </View>
    );
}
