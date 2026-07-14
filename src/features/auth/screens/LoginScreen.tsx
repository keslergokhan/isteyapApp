import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View,Text } from "react-native";
import { AuthStackParamList } from "../navigations/AuthStack.types";

export default function LoginScreen(props:NativeStackScreenProps<AuthStackParamList,"Login">) {
  return (<View><Text>Burası login sayfası {props.route.params.test}</Text></View>);
}