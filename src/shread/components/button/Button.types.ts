import { ViewStyle } from "react-native";
import {DefaultVariant} from "./../base";

export interface AppButtonProps {
  children?: React.ReactNode;
  disabled?: boolean;
  variant?:DefaultVariant;
  styles?:ViewStyle
}