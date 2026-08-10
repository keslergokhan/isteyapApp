import { StyleSheet } from "react-native";

const LogoStyles = StyleSheet.create({
    container:{

    },
    logoText: {
        fontWeight: 'bold',
        fontStyle: 'italic', // Letgo'nun el yazısı hissini yakalamak için
        letterSpacing: -1.5,
    },
    small:{
        fontSize:16,
        lineHeight:20
    },
    medium:{

    },
    large:{
        fontSize:64,
        lineHeight:72
    }   
});


export default LogoStyles;