import { ViewStyle } from "react-native";
import {Variant} from "./../base";

export interface AppButtonProps {
  children?: React.ReactNode;
  disabled?: boolean;
  variant?:Variant;
  styles?:ViewStyle
}