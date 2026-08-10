import { View, Text, StyleSheet } from "react-native";
import { AppButton } from "@/shread/components";
import styles from "./WelcomeFooter.styles";

export default function WelcomeFooter() {
  return (
    <View style={styles.bottomCard}>
      <View style={styles.buttonContainer}>
        <AppButton variant="tertiary">Giriş Yap</AppButton>
        <AppButton variant="secondary">Kayıt Ol</AppButton>
      </View>

      <Text style={styles.termsText}>
        Devam edersen {" "}
        <Text style={styles.boldText}>
          letgo Hüküm ve Koşullarını ve Gizlilik Politikası
        </Text>
        'nı kabul etmiş olursun.
      </Text>
    </View>
  );
}
