import { StyleSheet, ViewStyle } from "react-native"
import { AppVariantStyles } from "../base";

export const CarStyles = StyleSheet.create<AppVariantStyles<ViewStyle>>(
    {
        primary: {
            backgroundColor: "white",
            borderRadius: 8,
            padding: 16,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
        },
        secondary: {
            backgroundColor: "white",
            borderRadius: 8,
            padding: 16,
            borderWidth: 1,
            borderColor: "#ccc",
        },
        outline: {
            backgroundColor: "transparent",
            borderRadius: 8,
            padding: 16,
            borderWidth: 1,
            borderColor: "#ccc",
        }
    }
);