import { AppHead } from "@/shread/components";
import MainLayout from "../mainLayout/MainLayout";
import AppLayoutProps from "./AppLayout.types";
import { View } from "react-native";

export default function AppLayout(props:AppLayoutProps){
    return (
        <MainLayout>
            <View>
                <AppHead></AppHead>
                {props.children}
            </View>
        </MainLayout>
    );
}