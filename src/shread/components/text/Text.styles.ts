import{ StyleSheet,TextStyle } from 'react-native';
import { AppVariantStyles } from '../base';
import theme from '../../theme';

const BaseContainer: TextStyle = {
    ...theme.typography.body,
}


export const AppTextStyles = StyleSheet.create<AppVariantStyles<TextStyle>>({
    primary: {
        ...BaseContainer,
        color: theme.color.text.primary
    },
    secondary: {
        ...BaseContainer,
        color: theme.color.text.secondary,
    },
    tertiary: {
        ...BaseContainer,
        color: theme.color.text.tertiary
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
        ...theme.typography.h1,
        color: theme.color.text.primary
    },
    secondary: {
        ...BaseTitleContainer,
        color: theme.color.text.secondary,
    },
    tertiary: {
        ...BaseTitleContainer,
        color: theme.color.text.tertiary,
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
        color: theme.color.text.primary
    },
    secondary: {
        ...BaseH2Container,
        color: theme.color.text.secondary,
    },
    tertiary: {
        ...BaseH2Container,
        color: theme.color.text.tertiary,
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
        color: theme.color.text.primary
    },
    secondary: {
        ...BaseH3Container,
        color: theme.color.text.secondary,
    },
    tertiary: {
        ...BaseH3Container,
        color: theme.color.text.tertiary,
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
        color: theme.color.text.primary
    },
    secondary: {
        ...BaseSmallContainer,
        color: theme.color.text.secondary,
    },
    tertiary: {
        ...BaseSmallContainer,
        color: theme.color.text.tertiary,
    },
    basic:{
        ...BaseSmallContainer,
    }
});