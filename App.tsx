import RootNavigator from '@/app/navigations/RootNavigator';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  
  return (
    <SafeAreaProvider>
      <RootNavigator></RootNavigator>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
