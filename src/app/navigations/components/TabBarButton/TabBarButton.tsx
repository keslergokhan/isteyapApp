import { useCallback } from "react";
import TabBarButtonProps from "./TabBarButton.types";
import { Pressable,Text } from "react-native";
import TabBarButtonStyles, { TabBarButtonFocusStyles } from "./TabBarButton.styles";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import theme from "@/shread/theme";

export default function TabBarButton(props: TabBarButtonProps){

    const onPressHandler = useCallback(function(){
        try{
            props.navigation.navigate(props.route.name);
        }catch(e){
            console.error(e);
        }
    },[]);
 
    return (
        <Pressable onPress={onPressHandler} style={({pressed})=>[props.focused ? TabBarButtonFocusStyles.content : TabBarButtonStyles.content ]}>
            {props.IconName && <MaterialCommunityIcons name={props.IconName} size={30} color={props.focused ? theme.color.text.secondaryLight : theme.color.text.secondary}></MaterialCommunityIcons>}
            <Text style={props.focused ? TabBarButtonFocusStyles.text : TabBarButtonStyles.text}>{props.options.title}</Text>
        </Pressable>
    )
}