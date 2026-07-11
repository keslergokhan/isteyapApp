import { ThemeTest } from '@/shread/theme/ThemeTest';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  
  return (
    <View style={styles.container} >
      <Text>Open up App.tsx to start working on your app! deneme </Text>
      <StatusBar style="auto" />
      <ThemeTest></ThemeTest>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
