import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  let x  = 1;
  console.log("App Executed");
  
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello React Native,  we're  making some  of this textr super  longh and weird and long, so that we can test if athe app hates us for th e length of the thingswe did.</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
  },
});
