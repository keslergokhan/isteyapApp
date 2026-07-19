import { AppHead } from "@/shread/components";
import MainLayout from "../mainLayout/MainLayout";
import DetailLayoutProps from "./DetailLayout.types";
import AppFooter from "@/shread/components/footer/AppFooter";
import { View } from "react-native";

export default function DefaultLayout(props:DetailLayoutProps){
    return (
        <MainLayout>
            <View>
                <AppHead></AppHead>
            </View>
        </MainLayout>
    );
}