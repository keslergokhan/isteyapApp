import RootNavigator from "@/app/navigations/RootNavigator";
import theme from "@/shread/theme";
import { StyleSheet } from "react-native";
import { SafeAreaProvider,SafeAreaView  } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1,backgroundColor:theme.color.primary }}>
        <RootNavigator></RootNavigator>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
