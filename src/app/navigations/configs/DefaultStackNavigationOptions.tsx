import theme from "@/shread/theme";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

export const defaultStackNavigationOptions:NativeStackNavigationOptions={
    headerShown:false,
    contentStyle:{
        backgroundColor:theme.color.background
    }
}