import { View } from "react-native";
import { AppStackProps } from "./Stack.types";
import { ViewStyle } from "react-native";

export function AppVStack(props:AppStackProps){
    let style = {flexDirection:"column",gap:props.spacing} as ViewStyle;
    style = {...style,...props.style} as ViewStyle;
    return (
        <View style={style} >
            {props.children}
        </View>
    );
}

export function AppHStack(props:AppStackProps){
    return (
        <View style={{flexDirection:"row",gap:props.spacing}}>
            {props.children}
        </View>
    );
}
