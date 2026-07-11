import { TextStyle, ViewStyle } from "react-native";

const defaultVariant = ["primary", "secondary", "outline"] as const;

export type Variant = typeof defaultVariant[number];

type AppVariantStylesBase<TStyle extends TextStyle | ViewStyle> =
    Record<Variant, TStyle>;

export interface AppVariantStyles<TStyle extends TextStyle | ViewStyle> extends AppVariantStylesBase<TStyle> {
    pressed?:TStyle;
    basic?:TStyle;
}