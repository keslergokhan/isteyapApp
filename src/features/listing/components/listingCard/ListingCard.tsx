import { Text, View,Image, Pressable } from "react-native";
import ListingCardProps from "./ListingCard.types";
import styles from "./ListingCard.styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import theme from "@/shread/theme";

export default function ListingCard(props:ListingCardProps){
    const { onFavoritePress } = props;
    return (
        <Pressable
          style={styles.card}
        >
          <View style={styles.imageContainer}>
        <Image source={{ uri: props.imageUrl }} style={styles.image} resizeMode="cover" />
      </View>

      <View style={styles.contentContainer}>
        {/* Üst Satır: Başlık ve Beğeni */}
        <View style={styles.headerRow}>
          <Text style={styles.title} numberOfLines={2}>
            {props.title}
          </Text>
          <Pressable 
            style={styles.favoriteButton}
            onPress={() => onFavoritePress && onFavoritePress(props.id)}
          >
            <Text style={[
              styles.favoriteIcon, 
              { color: props.isFavorite ? "red" : "blue"}
            ]}>
              {props.isFavorite ? 
                <MaterialCommunityIcons name="cards-heart" size={20} color={theme.color.text.secondary} /> : 
                <MaterialCommunityIcons name="cards-heart-outline" size={20} color={theme.color.text.secondary} />
              }
            </Text>
          </Pressable>
        </View>

        {/* Orta Kısım: Açıklama */}
        <Text style={styles.description} numberOfLines={2}>
          {props.description}
        </Text>

        {/* Alt Satır: Konum ve Tarih */}
        <View style={styles.footerRow}>
          <View style={styles.locationContainer}>
            <Text style={{ fontSize: 10 }}>📍</Text>
            <Text style={styles.locationText}>{props.location}</Text>
          </View>
          <Text style={styles.dateText}>{props.date}</Text>
        </View>
      </View>
        </Pressable>
      );
}