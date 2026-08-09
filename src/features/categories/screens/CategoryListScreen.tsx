import useHeader from "@/shread/hooks/useHeader";
import { useEffect } from "react";
import { View,Text } from "react-native";
import SubCategoryList from "../components/subCategoryList/SubCategoryList";

export default function CategoryScreen(){

    const header = useHeader();
    useEffect(()=>{
        header.setTitle("Kategoriler");
    },[])

    return (<View>
        <SubCategoryList></SubCategoryList>
    </View>);
}