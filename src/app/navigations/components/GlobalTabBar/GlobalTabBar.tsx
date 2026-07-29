import TabBarStyles from "./GlobalTabBar.styles"
import GlobalTabBarProps from "./GlobalTabBar.types";
import { View } from "react-native";
import TabBarButton from "../TabBarButton/TabBarButton";
import HomeNavigationConfig from "../../configs/AppNavigation.config";


export default function GLobalTabBar(props:GlobalTabBarProps){

    return (
        <View style={TabBarStyles.content}>
            {
                props.state.routes.map((route,index)=>{
                    return <TabBarButton 
                        IconName={HomeNavigationConfig.find(x=>x.route == route.name)?.iconName}
                        key={route.key}
                        route={route}
                        navigation={props.navigation}
                        options={props.descriptors[route.key].options}
                        focused={props.state.index === index}
                    ></TabBarButton>
                })
            }
        </View>
    );
}