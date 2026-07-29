import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import { DefaultLayout } from "@/shread/layouts";
import { defaultStackNavigationOptions } from "@/app/navigations/configs/DefaultStackNavigationOptions";

const Stack = createNativeStackNavigator();
export default function HomeStack() {
    
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={defaultStackNavigationOptions} screenLayout={({children})=>{
            return (<DefaultLayout>
                {children}
            </DefaultLayout>)
        }}>
            
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    );
}