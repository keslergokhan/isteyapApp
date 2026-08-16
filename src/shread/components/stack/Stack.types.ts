import theme from "@/shread/theme";
import { ViewStyle } from "react-native";


export interface AppStackProps {
    children?: React.ReactNode;
    spacing:typeof theme.spacing[keyof typeof theme.spacing];
    style?: ViewStyle;
}