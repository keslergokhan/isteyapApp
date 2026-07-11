import { StyleSheet, ViewStyle } from "react-native"
import { AppVariantStyles } from "../base";
import theme from "@/shread/theme";

const BaseContainer : ViewStyle = {
    padding: theme.spacing.md,
    display:"flex"
}

export const CarStyles = StyleSheet.create<AppVariantStyles<ViewStyle>>(
    {
        primary: {
            ...BaseContainer,
            backgroundColor: "white",
            borderRadius: 8,
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
            ...BaseContainer,
            backgroundColor: "white",
            borderRadius: 8,
            borderWidth: 1,
            borderColor: "#ccc",
        },
        outline: {
            ...BaseContainer,
            backgroundColor: "transparent",
            borderRadius: 8,
            borderWidth: 1,
            borderColor: "#ccc",
        }
    }
);