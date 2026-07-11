import{ StyleSheet,TextStyle } from 'react-native';
import { AppVariantStyles } from '../base';
import theme from '../../theme';

const BaseContainer: TextStyle = {
    ...theme.typography.body,
}


export const AppTextStyles = StyleSheet.create<AppVariantStyles<TextStyle>>({
    primary: {
        ...BaseContainer,
        color: theme.color.white
        
    },
    secondary: {
        ...BaseContainer,
        color: theme.color.white,
    },
    outline: {
        ...BaseContainer,
        color: theme.color.primary
    },
    basic:{
        ...BaseContainer,
    }
});

const BaseTitleContainer: TextStyle = {
    ...theme.typography.h1,
}

export const AppTitleTextStyles = StyleSheet.create<AppVariantStyles<TextStyle>>({
    primary: {
        ...BaseTitleContainer,
        color: theme.color.white
        
    },
    secondary: {
        ...BaseTitleContainer,
        color: theme.color.white,
    },
    outline: {
        ...BaseTitleContainer,
        color: theme.color.primary
    },
    basic:{
        ...BaseTitleContainer,
    }
});