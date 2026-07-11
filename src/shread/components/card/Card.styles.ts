import { StyleSheet, ViewStyle } from "react-native";
import { AppVariantStyles } from "../base";
import theme from "@/shread/theme";

const BaseContainer: ViewStyle = {
  padding: theme.spacing.md,
  margin: theme.spacing.sm,
  display: "flex",
  borderRadius: theme.radius.md,
  shadowColor: theme.color.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
};

export const AppCardStyles = StyleSheet.create<AppVariantStyles<ViewStyle>>({
  primary: {
    ...BaseContainer,
    backgroundColor: theme.color.primary, // Zemin rengi için color.surface kullanıldı
  },
  secondary: {
    ...BaseContainer,
    backgroundColor: theme.color.primaryDark, // Hafif mavi renk için color.primarySoft kullanıldı
    borderWidth: 1,
    borderColor: "transparent", // Ana mavi renk için color.primary kullanıldı
  },
  outline: {
    ...BaseContainer,
    backgroundColor: theme.color.primarySoft, // Şeffaf zemin
    borderWidth: 1,
    borderColor: theme.color.border, // Kenarlık için varsayılan border rengi kullanıldı
  },
});