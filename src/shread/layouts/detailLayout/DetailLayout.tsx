import { AppHead } from "@/shread/components";
import MainLayout from "../mainLayout/MainLayout";
import DetailLayoutProps from "./DetailLayout.types";

export default function DefaultLayout(props:DetailLayoutProps){
    return (
        <MainLayout>
            <AppHead></AppHead>
        </MainLayout>
    );
}