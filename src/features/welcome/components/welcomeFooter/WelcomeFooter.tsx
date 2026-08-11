import { View, Text, StyleSheet, Pressable } from "react-native";
import { AppButton, AppText } from "@/shread/components";
import styles from "./WelcomeFooter.styles";
import { AppSmallText } from "@/shread/components/text/Text";
import { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import RootNavigatorParam from "@/app/navigations/types/RootNavigatorParam.types";

export default function WelcomeFooter() {
  
  const navigation = useNavigation<NativeStackNavigationProp<RootNavigatorParam>>();

  const loginBtnHandler = useCallback(()=>{
    
  },[]);

  const registerBtnHandler = useCallback(()=>{

  },[]);

  return (
    <View style={styles.bottomCard}>
      <View style={styles.buttonContainer}>
        <AppButton variant="tertiary" onPress={loginBtnHandler}>Giriş Yap</AppButton>
        <AppButton variant="secondary" onPress={registerBtnHandler}>Kayıt Ol</AppButton>
        <Pressable style={{alignItems:"center"}} onPress={()=>{
          navigation.navigate("AppNavigator",{screen:"HomeStack"});
        }}>
          <AppSmallText variant="primary">Anasayfa Git</AppSmallText>
        </Pressable>
      </View>

      <AppSmallText style={styles.termsText}>
        Devam edersen {" "} 
        <AppSmallText style={styles.boldText}>letgo Hüküm ve Koşullarını ve Gizlilik Politikası</AppSmallText> 'nı kabul etmiş olursun.
      </AppSmallText>

      
    </View>
  );
}
