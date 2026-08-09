import theme from '@/shread/theme';
import { StyleSheet } from 'react-native';

export const COLORS = {
    background: '#1E1E1E',
    cardBackground: '#252526',
    surfaceBorder: '#3E3E42',
    badgeBackground: '#3E3E42',
    textPrimary: '#FFFFFF',
    textSecondary: '#CCCCCC',
    accent: '#007ACC',
    favorite: '#FF4757', 
  };
  
const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        borderBottomWidth: 1,

      },
      imageContainer: {
        width: 110,
        height: 110,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: COLORS.surfaceBorder,
      },
      image: {
        width: '100%',
        height: '100%',
      },
      contentContainer: {
        flex: 1,
        marginLeft: 12,
        justifyContent: 'space-between', // İçeriği dikeyde yayar
      },
      // Başlık ve Favori İkonu Satırı
      headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      },
      title: {
        color: COLORS.textPrimary,
        fontSize: 14,
        fontWeight: 'bold',
        flex: 1, // İkonun üzerine binmemesi için
        marginRight: 8,
      },
      favoriteButton: {
        padding: 4,
      },
      favoriteIcon: {
        borderRadius:100,
        backgroundColor: theme.color.primary.main,
        paddingBottom:2,
        paddingTop:4,
        paddingLeft:3,
        paddingRight:3
      },
      // Açıklama Metni
      description: {
        color: COLORS.textSecondary,
        fontSize: 12,
        lineHeight: 16,
        marginVertical: 4,
      },
      // Konum ve Tarih Satırı
      footerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8,
      },
      locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      locationText: {
        color: COLORS.textSecondary,
        fontSize: 11,
        marginLeft: 4,
      },
      dateText: {
        color: COLORS.textSecondary,
        fontSize: 11,
        fontStyle: 'italic',
      },
  });

export default styles;