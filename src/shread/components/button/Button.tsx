import {ButtonStyles,ButtonChildrenStyles} from "./Button.styles";
import { Pressable,Text } from "react-native";
import { Variant } from "../base";
import AppButtonProps from "./Button.types";


export default function AppButton(props:AppButtonProps){

    const varyand:Variant = props.variant ? props.variant : "primary";
    return (
        <Pressable style={({pressed})=>[ButtonStyles[varyand],pressed && ButtonStyles.pressed,props.styles]}>
            <Text style={ButtonChildrenStyles[varyand]}>{props.children}</Text>
        </Pressable>
    );
}