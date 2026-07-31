import { TextProps, TextStyle } from "react-native";
import { Variant } from "../base";

export default interface AppTextProps extends TextProps {
    variant?: Variant;
    children?: React.ReactNode;
}