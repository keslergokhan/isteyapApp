import { Pressable, View } from "react-native";
import ScreenHeaderStyles from "./ScreenHeader.styles";
import { AppH2Text } from "../text/Text";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import theme from "@/shread/theme";
import { useNavigation } from "@react-navigation/native";
import { useCallback, useContext } from "react";
import {DefaultLayoutContext} from "@/shread/layouts/detailLayout/contexts/DefaultLayoutContext";


export default function ScreenHeader(){
    const context = useContext(DefaultLayoutContext);
    const navigation = useNavigation();
    
    const onPressGoBack = useCallback(function(){
        navigation.goBack();
    },[]);

    return (
        <View style={ScreenHeaderStyles.container}>
            <Pressable style={ScreenHeaderStyles.Icon} onPress={onPressGoBack}>
                <MaterialCommunityIcons name="keyboard-backspace" size={24} color={theme.color.primarySoftLight} />
            </Pressable>
            <AppH2Text style={ScreenHeaderStyles.title} variant="secondary">
                {context?.screenHeaderTitle}
            </AppH2Text>
            <View style={{width:30,height:30}}></View>
        </View>
    );
}