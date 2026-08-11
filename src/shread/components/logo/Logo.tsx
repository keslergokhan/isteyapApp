import { View } from "react-native";
import styles from "./Logo.styles";
import { AppH1Text } from "../text/Text";
import AppLogoProps from "./Logo.types";

export default function AppLogo(props:AppLogoProps){

    let sizeStyles = {};
    if(props.size){
        sizeStyles = styles[props.size];
    }else{
        sizeStyles = styles.medium;
    }

    return (
        <View style={styles.container}>
            <AppH1Text variant={props.variant ? props.variant : "secondary"} style={{...styles.logoText,...sizeStyles}}>isteyap</AppH1Text>
        </View>
    );
}