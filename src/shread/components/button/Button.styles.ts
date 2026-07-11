import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import theme from "@/shread/theme";
import { AppVariantStyles } from "../base/Theme.variand.types";


const buttonBaseContainer : ViewStyle = {
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.md,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
}

export const ButtonStyles = StyleSheet.create<AppVariantStyles<TextStyle>>({
  primary:{
    ...buttonBaseContainer,
    backgroundColor: theme.color.primary,
  },
  secondary:{
    ...buttonBaseContainer,
    backgroundColor: theme.color.primaryLight,
    borderWidth: 1,
    borderColor: theme.color.border,
  },
  outline:{
    ...buttonBaseContainer,
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: theme.color.border,
  } as ViewStyle,
  pressed: {
    opacity: 0.85,
  }
});

const textBaseContainer : TextStyle = {
  fontSize: theme.typography.button.fontSize,
  fontWeight: theme.typography.button.fontWeight,
}

export const ButtonChildrenStyles = StyleSheet.create<AppVariantStyles<TextStyle>>({
  primary:{
    ...textBaseContainer,
    color: theme.color.white
  },
  secondary:{
    ...textBaseContainer,
  },
  outline:{
    ...textBaseContainer,
  }
});



