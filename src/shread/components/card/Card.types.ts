import { ViewStyle } from "react-native";
import { Variant } from "../base";

export default interface AppCardProps {
    variant?:Variant;
    children?: React.ReactNode;
    styles?: ViewStyle;
}