import theme from "@/shread/theme";
import { StyleSheet } from "react-native";

const labelFontSize = 15;
const inputHeight = 48
const AppTextInputStyles = StyleSheet.create({
    container: {
        width: '100%',
    },
    inputContainer:{
        position:"relative"
    },
    label: {
        fontSize: labelFontSize,
        fontWeight: '500',
        color: theme.color.text.secondary,
        marginBottom: 6,
    },
    input: {
        height: inputHeight,
        borderRadius: 8,
        borderWidth: 1,
        paddingHorizontal: 12,
        fontSize: 16,
        color: theme.color.text.primary,
        backgroundColor: theme.color.primary.main,
        borderColor: theme.color.primary.border,
        paddingRight: 15,
        paddingLeft: 15
    },
    inputFocus: {
        borderColor:theme.color.tertiary.border,
    },
    errorText: {
        fontSize: 14,
        fontWeight: "bold",
        color: '#FF4D4D',
        marginTop: 1,
    },
    inputSecureTextEntry:{
        position:"absolute",
        right:10,
        top:labelFontSize+(inputHeight/2)
    }
});

export default AppTextInputStyles;