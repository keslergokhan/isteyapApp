import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

export default function LetgoWelcomeScreen(){
  
  const handleLogin = () => {
    console.log('Giriş Yap tıklandı');
  };

  const handleRegister = () => {
    console.log('Kayıt Ol tıklandı');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      {/* Üst Kısım: İllüstrasyon Alanı */}
      <View style={styles.imageContainer}>
        {/* Gerçek projede buraya <Image source={require('./path-to-image.png')} /> 
          veya SVG bileşeni koymalısınız. Şimdilik görseldeki renkleri temsil eden geçici bir çember bıraktım.
        */}
        <View style={styles.illustrationPlaceholder}>
          <Text style={styles.placeholderText}>[letgo İllüstrasyon]</Text>
        </View>
      </View>

      {/* Orta Kısım: Metinler */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Aradığın ne varsa letgo’da!</Text>
        <Text style={styles.subtitle}>
          Hesaplı alışveriş ve kolay satış bir arada. Hemen üye ol, ilk alışverişine özel 100 TL indirim kazan!
        </Text>
      </View>

      {/* Alt Kısım: Butonlar ve Sözleşme Metni */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity 
          style={styles.loginButton} 
          activeOpacity={0.8}
          onPress={handleLogin}
        >
          <Text style={styles.loginButtonText}>Giriş Yap</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.registerButton} 
          activeOpacity={0.8}
          onPress={handleRegister}
        >
          <Text style={styles.registerButtonText}>Kayıt Ol</Text>
        </TouchableOpacity>

        <Text style={styles.termsText}>
          Devam edersen <Text style={styles.boldText}>letgo Hüküm ve Koşullarını ve Gizlilik Politikası</Text>'nı kabul etmiş olursun.
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  imageContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  illustrationPlaceholder: {
    width: width * 0.65,
    height: width * 0.65,
    borderRadius: (width * 0.65) / 2,
    backgroundColor: '#FFD700', // Görseldeki sarı arka plan rengi
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: '#FF2E55',
    fontWeight: 'bold',
  },
  textContainer: {
    flex: 2,
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#212121',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 15,
    color: '#424242',
    textAlign: 'center',
    lineHeight: 22,
  },
  bottomContainer: {
    flex: 3,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
    paddingBottom: 24,
  },
  loginButton: {
    backgroundColor: '#FF3F55', // Letgo canlı mercan/kırmızı rengi
    height: 52,
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerButton: {
    backgroundColor: '#ffffff',
    height: 52,
    borderRadius: 26,
    borderWidth: 1.5,
    borderColor: '#FF3F55',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  registerButtonText: {
    color: '#FF3F55',
    fontSize: 18,
    fontWeight: 'bold',
  },
  termsText: {
    fontSize: 12.5,
    color: '#616161',
    textAlign: 'center',
    lineHeight: 18,
    paddingHorizontal: 10,
  },
  boldText: {
    fontWeight: '600',
    color: '#000000',
  },
});
