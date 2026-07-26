import { IconType } from "@/shread/types";

export interface NavigationConfig{
    route:string;
    title:string;
    iconName:IconType;
    component:()=>React.JSX.Element
}