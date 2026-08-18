import { ChatStackParamList } from "@/features/chats";
import { NavigatorScreenParams } from "@react-navigation/native";

type AppNavigatorParam = {
    HomeStack:undefined;
    ChatStack:NavigatorScreenParams<ChatStackParamList>;
    CreateListingStack:undefined;
    ListingStack:undefined;
    ProfileStack:undefined;
};

export default AppNavigatorParam;