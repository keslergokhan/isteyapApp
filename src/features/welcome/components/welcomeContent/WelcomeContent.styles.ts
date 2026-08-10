import theme from '@/shread/theme';
import { StyleSheet } from 'react-native';

const contentStyles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 24,
    },
    imagePlaceholder: {
      width: 200,
      height: 200,
      marginBottom: 32,
      justifyContent: 'center',
      alignItems: 'center',
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