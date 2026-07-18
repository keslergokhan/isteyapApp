import { useNavigation } from "@react-navigation/native";
import { View,Text,Button } from "react-native";

export default function WelcomeScreen(){
    const navigation = useNavigation();
    return (
        <View>
            <Text>Merhaba hoşgeldiniz test</Text>
            <Button title="Giriş" onPress={()=>{
                navigation.navigate("AuthStack" as never);
            }}></Button>

            <Button title="Kayıt" 
            onPress={()=>{
                navigation.navigate("AuthStack" as never);
            }}
            
            ></Button>

            <Button title="Anasayfa" 
            onPress={()=>{
                navigation.navigate("HomeStack" as never);
            }}
            
            ></Button>
        </View>
    );
}