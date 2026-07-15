import { StyleSheet } from 'react-native';
import theme from '@/shread/theme';

const AppHeadStyles = StyleSheet.create({
    container: {
        backgroundColor: theme.color.primary,
        paddingHorizontal: 16,
        paddingTop: 35,
        paddingBottom: 12,
    },
    topRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    logoText: {
        color: '#FFFFFF',
        fontSize: 32,
        fontWeight: 'bold',
        fontStyle: 'italic', // Letgo'nun el yazısı hissini yakalamak için
        letterSpacing: -1.5,
    },
    locationButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.color.primaryDark,
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 20,
        flex: 1,
        marginHorizontal: 16,
        justifyContent: 'center',
    },
    locationText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '600',
        marginHorizontal: 4,
        maxWidth: '75%', // Yazının taşmasını önlemek için
    },
    iconGroup: {
        flexDirection: 'row',
        gap: 10, // İkon daireleri arasındaki boşluk
    },
    iconCircle: {
        width: 38,
        height: 38,
        borderRadius: 19,
        backgroundColor: theme.color.primaryDark,
        alignItems: 'center',
        justifyContent: 'center',
        color:'red'
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.color.background,
        borderRadius: 50,
        color: 'black',
        paddingHorizontal: 16,
        height: 48,
    },
    searchIcon: {
        marginRight: 8,
    },
    searchInput: {
        flex: 1,
        color: 'black',
        fontSize: 15,
        paddingVertical: 0, // Android için ekstra dikey boşluğu sıfırlar
    },
});

export default AppHeadStyles;