import theme from "@/shread/theme"
import { StyleSheet } from "react-native"

const TabBarStyles = StyleSheet.create({
    content:{
        backgroundColor:theme.color.primary,
        width:"100%",
        margin:"auto",
        flexDirection:"row",
        justifyContent: "space-evenly",
        alignItems: "flex-start",
        gap:5,
        height:80,
        paddingTop:theme.spacing.md
    }
})

export  default TabBarStyles;

