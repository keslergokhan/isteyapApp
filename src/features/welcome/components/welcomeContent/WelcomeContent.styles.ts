import theme from '@/shread/theme';
import { StyleSheet } from 'react-native';

const contentStyles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingHorizontal: 24,
    },
    title: {
      fontSize: 22,
      fontWeight: '800',
      color: theme.color.text.primary,
      textAlign: 'center',
      marginBottom: 12,
    },
    description: {
      fontSize: 14,
      color: theme.color.text.secondary,
      textAlign: 'center',
      lineHeight: 22,
    },
  });

export default contentStyles;