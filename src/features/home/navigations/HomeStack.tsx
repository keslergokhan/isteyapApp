import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import { DefaultLayout } from "@/shread/layouts";

export default function HomeStack() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Home" screenLayout={({children})=>{
            return (<DefaultLayout>
                {children}
            </DefaultLayout>)
        }}>
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    );
}