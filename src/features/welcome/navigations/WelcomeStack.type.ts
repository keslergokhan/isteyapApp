import { AuthStackParamList } from "@/features/auth";
import { NavigatorScreenParams } from "@react-navigation/native";

export type WelcomeStackParamList = {
    AuthStack:NavigatorScreenParams<AuthStackParamList>,
    Welcome:undefined,
}