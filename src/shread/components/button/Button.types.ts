import { GestureResponderEvent, ViewStyle } from "react-native";
import {Variant} from "./../base";

export default interface AppButtonProps {
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
  children?: React.ReactNode;
  disabled?: boolean;
  variant?:Variant;
  styles?:ViewStyle
}