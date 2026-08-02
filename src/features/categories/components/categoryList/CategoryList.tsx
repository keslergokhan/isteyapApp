import { View,FlatList, ListRenderItemInfo, Pressable } from "react-native";
import CategoryListProps, { CategoryFlatListItemProps } from "./CategoryList.types";
import CategoryListStyles, { CategoryListItemStyles } from "./Category.styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import RootNavigatorParam from "@/app/navigations/types/RootNavigatorParam.types";
import { AppText } from "@/shread/components";

export default function CategoryList(props:CategoryListProps){

    const dataList: CategoryFlatListItemProps[] = [
        {
          id: 1,
          name: "Ev & Yaşam",
          color: "#F6D365",
          iconName: "sofa-outline"
        },
        {
          id: 2,
          name: "Araç",
          color: "#F8A978",
          iconName: "car-outline"
        },
        {
          id: 3,
          name: "Tesisat & Altyapı",
          color: "#F59BB3",
          iconName: "pipe"
        },
        {
          id: 4,
          name: "Tadilat & Dekorasyon",
          color: "#B9A3F7",
          iconName: "hammer-screwdriver"
        },
        {
          id: 5,
          name: "Bakım & Onarım",
          color: "#6ECBEA",
          iconName: "wrench-outline"
        },
        {
          id: 6,
          name: "Temizlik",
          color: "#F2A7D8",
          iconName: "broom"
        },
        {
          id: 7,
          name: "Elektrik & Elektronik",
          color: "#81C784",
          iconName: "lightning-bolt-outline"
        },
        {
          id: 8,
          name: "Nakliyat & Lojistik",
          color: "#F7B267",
          iconName: "truck-fast-outline"
        },
        {
          id: 9,
          name: "Güvenlik Sistemleri",
          color: "#F48FB1",
          iconName: "shield-lock-outline"
        },
        {
          id: 10,
          name: "İklimlendirme & Isıtma",
          color: "#80DEEA",
          iconName: "air-conditioner"
        },
        {
          id: 11,
          name: "Peyzaj & Bahçe",
          color: "#AED581",
          iconName: "flower-outline"
        },
        {
          id: 12,
          name: "Kuru Temizleme & Terzi",
          color: "#CE93D8",
          iconName: "hanger"
        },
        {
          id: 13,
          name: "Kişisel Bakım & Sağlık",
          color: "#FFAB91",
          iconName: "heart-pulse"
        },
        {
          id: 14,
          name: "Özel Ders & Eğitim",
          color: "#9FA8DA",
          iconName: "school-outline"
        },
        {
          id: 15,
          name: "Organizasyon & Etkinlik",
          color: "#80CBC4",
          iconName: "party-popper"
        },
      ];


    const navigation = useNavigation<NativeStackNavigationProp<RootNavigatorParam>>();
    
    async function CategoryListItemOnPress(props:CategoryFlatListItemProps){
      navigation.navigate("CategoryNavigator",{screen:"CategoryList",params:{baseCategoryId:55}});
    }

    function CategoryListItem(props:ListRenderItemInfo<CategoryFlatListItemProps>){
        return (
            <Pressable style={CategoryListItemStyles.container} onPress={async ()=>{await CategoryListItemOnPress(props.item)}}>
                <View style={[CategoryListItemStyles.iconContainer,{backgroundColor:props.item.color}]}>
                  <MaterialCommunityIcons name={props.item.iconName} size={30} color={"white"} />
                </View>
                <AppText numberOfLines={3} ellipsizeMode="tail" style={[CategoryListItemStyles.title]}>{props.item.name}</AppText>
            </Pressable>
        )
    }

    return (
        <View style={CategoryListStyles.container}>
            <FlatList
                style={CategoryListStyles.list}
                data={dataList}
                renderItem={CategoryListItem}
                keyExtractor={x=>x.id.toString()}
                horizontal={true}
            />
        </View>
    );
}