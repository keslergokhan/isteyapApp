import theme from "@/shread/theme";
import { StyleSheet } from "react-native";

const ScreenHeaderStyles = StyleSheet.create({
    container:{
        height: 60,
        backgroundColor:theme.color.primary.main,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingLeft:20,
        paddingRight:20
    },
    title:{
        color:theme.color.text.secondary,
        textAlign:"center",
    },
    Icon:{
        width:35,
        height:35,
        backgroundColor:theme.color.secondary.main,
        textAlign:"center",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:100

    }
});

export default ScreenHeaderStyles;