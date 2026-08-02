import useHeader from "@/shread/hooks/useHeader";
import { useEffect } from "react";
import { View,Text } from "react-native";

export default function CategoryScreen(){

    const header = useHeader();
    useEffect(()=>{
        header.setTitle("Kategoriler");
    },[])

    return (<View><Text>Kategoriler</Text></View>);
}