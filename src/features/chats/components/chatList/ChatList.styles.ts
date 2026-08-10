import theme from '@/shread/theme';
import { StyleSheet } from 'react-native';

const ChartListItemStyles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 12,
      backgroundColor:theme.color.secondary.main,
    },
    pressed: {
      backgroundColor: theme.color.secondary.main,
      opacity: 0.9,
    },
    avatarWrapper: {
      position: 'relative',
      marginRight: 12,
    },
    avatar: {
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: theme.color.secondary.main,
    },
    storyBorder: {
      borderWidth: 2,
      borderColor: theme.color.tertiary.main,
      padding: 2,
      borderRadius: 35,
    },
    onlineIndicator: {
      position: 'absolute',
      bottom: 2,
      right: 2,
      width: 15,
      height: 15,
      borderRadius: 7.5,
      backgroundColor: theme.color.success.main,
      borderWidth: 3,
      borderColor: theme.color.primary.main,
    },
    content: {
      flex: 1,
      justifyContent: 'center',
    },
    titleRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 4,
    },
    userName: {
      color: theme.color.text.primary,
      fontSize: 15,
      fontWeight: '500',
    },
    unreadText: {
      fontWeight: '800',
    },
    messageRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    lastMessage: {
      color: theme.color.text.secondary,
      fontSize: 14,
      flex: 1,
      marginRight: 10,
    },
    timestamp: {
      color: theme.color.text.secondary,
      fontSize: 12,
    },
    unreadBadge: {
      backgroundColor: theme.color.tertiary.main,
      borderRadius: 10,
      minWidth: 18,
      height: 18,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 5,
      marginLeft: 8,
    },
    badgeText: {
      color: theme.color.white,
      fontSize: 10,
      fontWeight: 'bold',
    },
  });


  const ChartListStyles = StyleSheet.create({
    separator: {
      height: 0.5,
      backgroundColor: theme.color.primary.border,
      marginLeft: 88, // Avatar + Boşluk kadar içeriden başlatma (Instagram stili)
    },
    listPadding: {
      paddingBottom: 20,
    },
  });

export {ChartListStyles}
export default ChartListItemStyles;