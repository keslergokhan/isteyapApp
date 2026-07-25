import theme from "@/shread/theme";
import { StyleSheet } from "react-native";

const TabBarButtonStyles = StyleSheet.create({
    content:{
        display:"flex",
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    text:{
        color: theme.color.white,
        textAlign:"center",
        fontSize:12
    },
    
});

export const TabBarButtonFocusStyles = StyleSheet.create({
    content:{
        ...TabBarButtonStyles.content,
        borderStyle:"solid",
        borderColor:theme.color.text.secondaryLight,
        borderBottomWidth:2,
        paddingBottom:5
    },
    text:{
        ...TabBarButtonStyles.text,
        color:theme.color.text.secondaryLight,
    },
});

export default TabBarButtonStyles;