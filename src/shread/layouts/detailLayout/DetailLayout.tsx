import { View,Text } from "react-native";
import { DetailLayoutProps } from "./DetailLayout.types";
import ScreenHeader from "@/shread/components/screenHeader/ScreenHeader";
import {DefaultLayoutContextProvider} from "./contexts/DefaultLayoutContext";

export default function DetailLayout(props:DetailLayoutProps){
    return (
        <DefaultLayoutContextProvider>
            <View>
                <ScreenHeader></ScreenHeader>
                {props.children}
            </View>
        </DefaultLayoutContextProvider>
    )
}