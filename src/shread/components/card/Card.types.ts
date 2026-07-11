import { ViewStyle } from "react-native";
import { Variant } from "../base";

export interface AppCardProps {
    variant?:Variant;
    children?: React.ReactNode;
    styles?: ViewStyle;
}