import { Pressable, View, Image, Text, FlatList } from "react-native";
import styles, { ChartListStyles } from "./ChatList.styles";
import { CardListItemProps } from "./ChatList.types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import RootNavigatorParam from "@/app/navigations/types/RootNavigatorParam.types";

export function CardListItem(props: CardListItemProps) {
  const isUnread = props.item.unreadCount > 0;

  return (
    <Pressable
      onPress={() => props.onPress(props.item.id)}
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
    >
      <View style={styles.avatarWrapper}>
        <View style={props.item.hasStory ? styles.storyBorder : undefined}>
          <Image source={{ uri: props.item.avatarUrl }} style={styles.avatar} />
        </View>
        {props.item.isOnline && <View style={styles.onlineIndicator} />}
      </View>

      <View style={styles.content}>
        <View style={styles.titleRow}>
          <Text
            style={[styles.userName, isUnread && styles.unreadText]}
            numberOfLines={1}
          >
            {props.item.userName}
          </Text>
          <Text style={styles.timestamp}>{props.item.timestamp}</Text>
        </View>

        <View style={styles.messageRow}>
          <Text
            style={[styles.lastMessage, isUnread && { color: "#fff" }]}
            numberOfLines={1}
          >
            {props.item.lastMessage}
          </Text>
          {isUnread && (
            <View style={styles.unreadBadge}>
              <Text style={styles.badgeText}>{props.item.unreadCount}</Text>
            </View>
          )}
        </View>
      </View>
    </Pressable>
  );
}

export function ChartList() {
    const navigation = useNavigation<NativeStackNavigationProp<RootNavigatorParam>>();
    
    const MOCK_CHAT_DATA = [
    {
      id: "1",
      userName: "kod_yazari",
      avatarUrl: "https://i.pravatar.cc/150?u=1",
      lastMessage: "Yeni tasarımı kontrol ettin mi?",
      timestamp: "12:45",
      unreadCount: 3,
      isOnline: true,
      hasStory: true,
    },
    {
      id: "2",
      userName: "tasarim_merkezi",
      avatarUrl: "https://i.pravatar.cc/150?u=2",
      lastMessage: "Harika görünüyor, eline sağlık!",
      timestamp: "Dün",
      unreadCount: 0,
      isOnline: false,
      hasStory: true,
    },
    // ... daha fazla veri
  ];

  return (
    <FlatList
      data={MOCK_CHAT_DATA}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <CardListItem item={item} onPress={() => {
        navigation.navigate("AppNavigator",{screen:"ChatStack",params:{screen:"ChatDetailScreen"}})
      }} />}
      ItemSeparatorComponent={() => <View style={ChartListStyles.separator} />}
      contentContainerStyle={ChartListStyles.listPadding}
    />
  );
}
