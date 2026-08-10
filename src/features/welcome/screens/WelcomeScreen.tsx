import RootNavigatorParam from "@/app/navigations/types/RootNavigatorParam.types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View} from "react-native";
import WelcomeFooter from "../components/welcomeFooter/WelcomeFooter";
import WelcomeContent from "../components/welcomeContent/WelcomeContent";

export default function WelcomeScreen(){
    const navigation = useNavigation<NativeStackNavigationProp<RootNavigatorParam>>();
    return (
        <View style={{flex:1}}>
            <WelcomeContent title={"Başlık"} description={"Description"}></WelcomeContent>
            <WelcomeFooter></WelcomeFooter>
        </View>
    );
}