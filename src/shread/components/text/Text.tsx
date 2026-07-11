import {Text} from "react-native";
import { AppTextProps } from "./Text.types";
import { AppTextStyles,AppTitleTextStyles,AppH2TextStyles,AppH3TextStyles,AppSmallTextStyles } from "./Text.styles";

export default function AppText(props:AppTextProps){
    const variandStyles = props.variant ? AppTextStyles[props.variant] : AppTextStyles.basic;
    return (<Text style={[variandStyles,props.styles]}>{props.children}</Text>);
}

export function AppH1Text(props:AppTextProps){
    const variandStyles = props.variant ? AppTitleTextStyles[props.variant] : AppTitleTextStyles.basic;
    return (<Text style={[variandStyles,props.styles]}>{props.children}</Text>);
}


export function AppH2Text(props:AppTextProps){
    const variandStyles = props.variant ? AppH2TextStyles[props.variant] : AppTitleTextStyles.basic;
    return (<Text style={[variandStyles,props.styles]}>{props.children}</Text>);
}

export function AppH3Text(props:AppTextProps){
    const variandStyles = props.variant ? AppH3TextStyles[props.variant] : AppTitleTextStyles.basic;
    return (<Text style={[variandStyles,props.styles]}>{props.children}</Text>);
}

export function AppSmallText(props:AppTextProps){
    const variandStyles = props.variant ? AppSmallTextStyles[props.variant] : AppTitleTextStyles.basic;
    return (<Text style={[variandStyles,props.styles]}>{props.children}</Text>);
}