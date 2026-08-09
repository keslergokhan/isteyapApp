import { View } from 'react-native';
import { AppCard} from '@/shread/components';
import { AppH3Text } from '@/shread/components/text/Text';
import styles,{SubCategoryItemStyles} from "./SubCategory.styles"
import theme from '@/shread/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SubCategoryListItemProps } from './SubCategoryListy.types';
import { FlatList } from 'react-native';



export function SubCategoryListItem(props:SubCategoryListItemProps){
    return (
        <AppCard>
            <View style={SubCategoryItemStyles.Container}>
                <AppH3Text variant='secondary'>{props.title}</AppH3Text>
                <MaterialCommunityIcons name="arrow-right" size={24} color={theme.color.text.secondary} />
            </View>
        </AppCard>
    );
}


export default function SubCategoryList(){
    return (
        <View>
            <SubCategoryListItem title='Araba tamiri'></SubCategoryListItem>
            <SubCategoryListItem title='Araç yıkama'></SubCategoryListItem>
            <SubCategoryListItem title='İç dış temizlik'></SubCategoryListItem>
            <SubCategoryListItem title='Örnek liste'></SubCategoryListItem>
        </View>
    );
}

