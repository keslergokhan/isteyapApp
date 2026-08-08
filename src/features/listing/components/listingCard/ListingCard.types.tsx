import { ImageSourcePropType } from "react-native";


export default interface ListingCardProps {
    id: string;
    title: string;
    isPremium: boolean;
    location: string;
    price: string;
    imageUrl: string;
    description: string;
    date: string;
    isFavorite: boolean;
    onPress?: (id: string) => void;
    onFavoritePress?: (id: string) => void;
    
}