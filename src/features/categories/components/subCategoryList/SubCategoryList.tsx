import { View,Text } from 'react-native';
import Styles,{SubCategoryItemStyles} from './SubCategory.styles'
import { AppCard, AppText } from '@/shread/components';
import { ThemeTest } from '@/shread/theme/ThemeTest';


export function SubCategoryListItem(){
    return (
        <AppCard style={{...SubCategoryItemStyles.Card,backgroundColor:"green"}}>
        </AppCard>
    );
}


export default function SubCategoryList(){
    return (
        <ThemeTest></ThemeTest>
    );
}

