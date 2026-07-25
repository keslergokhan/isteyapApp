import { MaterialCommunityIcons } from "@expo/vector-icons";

export interface NavigationConfig{
    route:string;
    title:string;
    iconName:keyof typeof MaterialCommunityIcons.glyphMap;
    component:()=>React.JSX.Element
}