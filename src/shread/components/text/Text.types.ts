import { TextStyle } from "react-native";
import { Variant } from "../base";

export default interface AppTextProps {
    variant?: Variant;
    styles?: TextStyle;
    children?: React.ReactNode;
}