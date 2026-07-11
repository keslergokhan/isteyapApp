import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import theme from "@/shread/theme"

export default function App() {
  
  return (
    <View style={styles.container} >
      <Text>Open up App.tsx to start working on your app! fsfd Deneme</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
