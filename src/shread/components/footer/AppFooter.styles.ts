import {StyleSheet} from 'react-native';

const FooterStyles = StyleSheet.create({
    safeArea: {
      flex: 1,
    },
    screenContainer: {
      flex: 1,
      backgroundColor: '#121212',
      alignItems: 'center',
      justifyContent: 'center',
    },
    screenText: {
      color: '#FFFFFF',
      fontSize: 24,
      fontWeight: 'bold',
    },
    tabBar: {
      backgroundColor: "red",
      position: 'absolute',
      borderTopWidth: 0,
      elevation: 0,
      zIndex: 10,
      borderTopLeftRadius: 20, // Letgo navigasyon çubuğu üst köşeleri yuvarlak
      borderTopRightRadius: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: -4 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
    },
    tabBarLabel: {
      fontSize: 12,
      fontWeight: '600',
      marginTop: 2,
    },
    // Özel "İlan Ver" butonunun dış sarmalayıcısı
    postListingButton: {
      top: -20, // Butonun yukarı doğru taşmasını sağlar
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 20,
    },
    // Özel "İlan Ver" butonunun iç yuvarlağı
    postListingInnerButton: {
      width: 68,
      height: 68,
      borderRadius: 34,
      backgroundColor: "blue", // Letgo kırmızısı
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 5,
      elevation: 8,
      borderWidth: 2, // Çevresindeki ince gri çizgi
      borderColor: '#333333',
    },
  });

  export default FooterStyles;