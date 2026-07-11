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



const BaseH2Container: TextStyle = {
    ...theme.typography.h2,
}

export const AppH2TextStyles = StyleSheet.create<AppVariantStyles<TextStyle>>({
    primary: {
        ...BaseH2Container,
        color: theme.color.white
        
    },
    secondary: {
        ...BaseH2Container,
        color: theme.color.white,
    },
    outline: {
        ...BaseH2Container,
        color: theme.color.primary
    },
    basic:{
        ...BaseH2Container,
    }
});

const BaseH3Container: TextStyle = {
    ...theme.typography.h3,
}

export const AppH3TextStyles = StyleSheet.create<AppVariantStyles<TextStyle>>({
    primary: {
        ...BaseH3Container,
        color: theme.color.white
        
    },
    secondary: {
        ...BaseH3Container,
        color: theme.color.white,
    },
    outline: {
        ...BaseH3Container,
        color: theme.color.primary
    },
    basic:{
        ...BaseH3Container,
    }
});


const BaseSmallContainer: TextStyle = {
    ...theme.typography.bodySmall,
}

export const AppSmallTextStyles = StyleSheet.create<AppVariantStyles<TextStyle>>({
    primary: {
        ...BaseSmallContainer,
        color: theme.color.white
        
    },
    secondary: {
        ...BaseSmallContainer,
        color: theme.color.white,
    },
    outline: {
        ...BaseSmallContainer,
        color: theme.color.primary
    },
    basic:{
        ...BaseSmallContainer,
    }
});