export interface ChatItem {
    id: string;
    userName: string;
    avatarUrl: string;
    lastMessage: string;
    timestamp: string;
    unreadCount: number;
    isOnline: boolean;
    hasStory: boolean;
  }
  
  export interface CardListItemProps {
    item: ChatItem;
    onPress: (id: string) => void;
  }