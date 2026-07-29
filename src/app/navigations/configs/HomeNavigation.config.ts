import HomeStack from "@/features/home/navigations/HomeStack";
import { ChatStack } from "@/features/chats";
import { CreateListingStack, ListingStack } from "@/features/listing";
import { ProfileStack } from "@/features/profile";
import { NavigationConfig } from "../types/Navigation.types";
 const HomeNavigationConfig:NavigationConfig[] = [
    {
        route:"HomeStack",
        title : "Ana Sayfa",
        iconName:"home",
        component:HomeStack
    },
    {
        route:"ChatStack",
        title:"Sohbet",
        component:ChatStack,
        iconName:"chat-processing"
    },
    {
        route:"CreateListingStack",
        title:"İlanlar",
        component:CreateListingStack,
        iconName:"camera"
    },
    {
        route:"ListingStack",
        title:"İlanlar",
        component:ListingStack,
        iconName:"view-list",
    },
    {
        route: "ProfileStack",
        component: ProfileStack,
        title: "Hesabım",
        iconName: "account"
    },
] 

export default HomeNavigationConfig;