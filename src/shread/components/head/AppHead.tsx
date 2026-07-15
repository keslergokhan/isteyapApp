import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";
import AppHeadProps from "./AppHead.types";
import AppHeadStyles from "./AppHead.styles";

export default function AppHead() {
  return (
    <View>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <View style={AppHeadStyles.container}>
        {/* Üst Satır: Logo, Konum ve Sağ İkonlar */}
        <View style={AppHeadStyles.topRow}>
          {/* Logo (Yazı olarak istenildiği için el yazısı fontuna benzer italik bir stil verildi) */}
          <Text style={AppHeadStyles.logoText}>isteyap</Text>

          {/* Konum Seçici Buton */}
          <TouchableOpacity style={AppHeadStyles.locationButton} activeOpacity={0.8}>
            <Ionicons name="location-sharp" size={16} color="#F34757" />
            <Text style={AppHeadStyles.locationText} numberOfLines={1}>
              İstanbul, Ümr...
            </Text>
            <MaterialIcons
              name="keyboard-arrow-down"
              size={16}
              color="#F34757"
            />
          </TouchableOpacity>

          {/* Sağ İkon Grubu */}
          <View style={AppHeadStyles.iconGroup}>
            {/* Sepet İkonu */}

            {/* Bildirim İkonu */}
            <TouchableOpacity style={AppHeadStyles.iconCircle}>
              <Ionicons name="notifications" size={18} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Alt Satır: Arama Çubuğu */}
        <View style={AppHeadStyles.searchContainer}>
          <Feather
            name="search"
            size={20}
            color="#8E8E93"
            style={AppHeadStyles.searchIcon}
          />
          <TextInput
            style={AppHeadStyles.searchInput}
            placeholder="Ürün, marka, kategori, satıcı ara"
          />
        </View>
      </View>
    </View>
  );
}
