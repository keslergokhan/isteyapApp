import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View,Text,Button } from "react-native";
import { AuthStackParamList } from "../navigations/AuthStack.types";

export default function WelcomeSCreen(){
    const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList,"Login">>();
    return (
        <View>
            <Text>Merhaba hoşgeldiniz</Text>
            <Button title="Giriş" onPress={()=>{
                navigation.navigate("Login",{test:"test parametre"});
            }}></Button>
            <Button title="Kayıt" 
            onPress={()=>{
                navigation.navigate("Register" as never);
            }}
            ></Button>
        </View>
    );
}