import RootNavigatorParam from "@/app/navigations/types/RootNavigatorParam.types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ImageBackground, View} from "react-native";
import WelcomeFooter from "../components/welcomeFooter/WelcomeFooter";
import WelcomeContent from "../components/welcomeContent/WelcomeContent";

export default function WelcomeScreen(){
    const loginBackground = require('@/assets/images/login-background.png');
    return (
        <ImageBackground style={{flex:1}} source={loginBackground} resizeMode="cover">
            <View style={{flex:1}}>
                <WelcomeContent 
                title={"En hızlı ve profesyonel çözümler cebinizde"} 
                description={"İhtiyaçlarınızı kendi seçtiğiniz ekipler tarafından profesyonel olarak çözmenize imkan sağlayan İSTEYAP uygulaması ile artık herşey daha kolay."}>
                </WelcomeContent>
                <WelcomeFooter></WelcomeFooter>
            </View>
        </ImageBackground>
        
    );
}