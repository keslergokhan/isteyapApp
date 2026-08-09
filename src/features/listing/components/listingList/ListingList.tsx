import { FlatList, FlatListComponent, RefreshControl, View } from "react-native";
import ListingCard from "../listingCard/ListingCard";
import ListingCardProps from "../listingCard/ListingCard.types";
import { useState } from "react";
import theme from "@/shread/theme";
import { CategoryList } from "@/features/categories";

export default function ListingList(){

    const [refreshing, setRefreshing] = useState(false);  

    const handleRefresh = async () => {
        setRefreshing(true);
    
        try {
          // API çağrısı
          
        } finally {
          setRefreshing(false);
        }
      };

      
    const s1:ListingCardProps = {
        id: '1',
        title: "Akyurt'ta Ultra Lüks İşçilikli Özel Mimari Tasarım 3+1 Daire",
        isPremium: true,
        location: 'Ankara, Akyurt',
        price: '6.500.000 TL',
        imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&q=80',
        description: 'Bu özel tasarım daire, modern yaşamın tüm gereksinimlerini karşılamak için özenle planlanmıştır. Geniş ve ferah odaları, yüksek kaliteli malzemelerle döşenmiş iç mekanları ve etkileyici manzarası ile dikkat çekmektedir.',
        isFavorite:false,
        date: '2023-10-01',
        onPress: (id: string) => {
            console.log(`Listing with id ${id} pressed`);
        }
    };
    
    const s2={...s1,id:"2"};
    const s3={...s1,id:"3"};
    const s4={...s1,id:"4"};
    const s5={...s1,id:"5"};
    const s6={...s1,id:"6"};
    const s7={...s1,id:"7"};
    const s8={...s1,id:"8"};
    const s9={...s1,id:"9"};
    const s10={...s1,id:"10"};
    const s11={...s1,id:"11"};
    const s12={...s1,id:"12"};

    return <View>
        <FlatList key={"listing-list"}
            data={[ s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11,s12 ]} // Örnek veri
            renderItem={({ item,index }) => <ListingCard key={index} {...item} onPress={item.onPress} />}
            keyExtractor={(item) => item.id}
            refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={handleRefresh}
                  tintColor="#007ACC"
                  colors={[theme.color.primary.main]}
                />
              }
              ListHeaderComponent={
                <CategoryList></CategoryList>
              }
        >
        </FlatList>
    </View>
}