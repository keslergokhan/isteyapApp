import RootNavigator from "@/app/navigations/RootNavigator";
import { BaseLayout } from "@/shread/layouts";
import theme from "@/shread/theme";
import { StyleSheet } from "react-native";
import { SafeAreaProvider,SafeAreaView  } from "react-native-safe-area-context";
import { View,Text } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1,backgroundColor:theme.color.primary.main }}>
          <BaseLayout>
            <RootNavigator></RootNavigator>
          </BaseLayout>
        </SafeAreaView>
      </SafeAreaProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.background,
  },
});
