import theme from "@/shread/theme";
import { StyleSheet } from "react-native";

const footerStyles = StyleSheet.create({
    bottomCard: {
        backgroundColor: theme.color.primary.main,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        paddingHorizontal: 20,
        paddingTop: 24,
        paddingBottom: 32,
        borderTopWidth: 1,
        borderTopColor: theme.color.primary.border,
    },
    buttonContainer: {
        gap: 12,
    },
    button: {
        height: 52,
        borderRadius: 26,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonPrimary: {
        backgroundColor: theme.color.error.main,
    },
    buttonSecondary: {
        backgroundColor: 'transparent',
        borderWidth: 1.5,
        borderColor: theme.color.error.main,
    },
    buttonPressed: {
        opacity: 0.8,
    },
    buttonTextPrimary: {
        color: theme.color.white,
        fontSize: 16,
        fontWeight: '700',
    },
    buttonTextSecondary: {
        color: theme.color.error.main,
        fontSize: 16,
        fontWeight: '700',
    },
    termsText: {
        color: theme.color.text.secondary,
        fontSize: 12,
        textAlign: 'center',
        marginTop: 20,
        lineHeight: 18,
    },
    boldText: {
        fontWeight: '700',
        color: theme.color.text.primary,
    },
});

export default footerStyles;