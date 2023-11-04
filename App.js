import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import {Platform, SafeAreaView, View, StyleSheet, Text, Image} from 'react-native';

function SafeScreen() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, paddingTop:insets.top}}>
      <Text style={{ fontSize: 28}}>Content is in a safe place.</Text>
    </View>
  )
}

export default function App() {
  
  return (
    <SafeAreaProvider>
      <SafeScreen />
      <View style={styles.container}>
        <Text style={styles.fontStyle}>Hello React Native, we're making some of this text super long and weird and long, so that we can test if the app hates us for the length of the things we did.</Text>
        <Image source={{
          width: 200,
          height: 300,
          uri:"https://picsum.photos/200/300"}} />
      </View>
    </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    // alignItems: "center",
    // justifyContent: "center",
  },
  fontStyle: {
    fontSize: 24,
    PaddingTop: 36,
  }
});
