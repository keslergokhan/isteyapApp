import { type TextStyle } from "react-native";

export const typography = {


    // Büyük sayfa başlığı
    // Kullanım:
    // - Screen title
    // - Dashboard başlığı
    h1:{
      fontSize:32,
      lineHeight:40,
      fontWeight:"700",
    } as TextStyle,
  
  
    // Bölüm başlığı
    // Kullanım:
    // - Card title
    // - Section header
    h2:{
      fontSize:24,
      lineHeight:32,
      fontWeight:"700",
    } as TextStyle,
  
  
    // Alt başlık
    // Kullanım:
    // - Component title
    // - Modal title
    h3:{
      fontSize:20,
      lineHeight:28,
      fontWeight:"600",
    } as TextStyle,
  
  
    // Normal önemli metin
    // Kullanım:
    // - Label
    // - Button text
    // - List title
    body:{
      fontSize:16,
      lineHeight:24,
      fontWeight:"400",
    } as TextStyle,
  
  
    // Küçük açıklama metni
    // Kullanım:
    // - Description
    // - Helper text
    // - Secondary information
    bodySmall:{
      fontSize:14,
      lineHeight:20,
      fontWeight:"400",
    } as TextStyle,
  
  
    // Çok küçük bilgi metni
    // Kullanım:
    // - Caption
    // - Timestamp
    // - Metadata
    caption:{
      fontSize:12,
      lineHeight:16,
      fontWeight:"400",
    } as TextStyle,
  
  
    // Buton yazısı
    button:{
      fontSize:14,
      lineHeight:20,
      fontWeight:"600",
    } as TextStyle,
  
  
    // Input yazısı
    input:{
      fontSize:16,
      lineHeight:24,
      fontWeight:"400",
    } as TextStyle
};