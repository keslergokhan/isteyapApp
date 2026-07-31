import theme from "@/shread/theme";
import { StyleSheet } from "react-native"

const CategoryListStyles = StyleSheet.create({
    container:{
        width:"100%",
        padding:0,
        height:90,
    },
    list:{
    }
});

const CategoryListItemStyles = StyleSheet.create({
    container:{
        width: 100,
        alignItems: "center",
        backgroundColor:theme.color.primarySoft,
        flexDirection: 'column',
        gap:5,
        padding:5,
        flex:1
    },
    iconContainer: {
        height:40,
        width:40,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:100
    },
    title:{
        color: 'white',
        fontSize: 12,
        textAlign: 'center',
        fontWeight: '500',
        lineHeight: 16, 
    }
});

export default CategoryListStyles
export {CategoryListItemStyles}