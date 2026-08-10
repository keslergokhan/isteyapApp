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
    backgroundColor: theme.color.primary.main,
  },
  secondary:{
    ...buttonBaseContainer,
    backgroundColor: theme.color.secondary.main,
    borderWidth: 1,
    borderColor: theme.color.secondary.border,
  },
  tertiary:{
    ...buttonBaseContainer,
    backgroundColor: theme.color.tertiary.main,
    borderWidth: 2,
    borderColor: theme.color.tertiary.border,
  } as ViewStyle,
  pressed: {
    opacity: 0.85,
  }
});

const textBaseContainer : TextStyle = {
  ...theme.typography.button
}

export const ButtonChildrenStyles = StyleSheet.create<AppVariantStyles<TextStyle>>({
  primary:{
    ...textBaseContainer,
    color: theme.color.text.primary
  },
  secondary:{
    ...textBaseContainer,
    color: theme.color.text.primary
  },
  tertiary:{
    ...textBaseContainer,
    color: theme.color.text.primary
  }
});



