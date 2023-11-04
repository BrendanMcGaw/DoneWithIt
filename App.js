import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import {Platform, SafeAreaView, View, StyleSheet, Text, Image} from 'react-native';

function SafeScreen() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, paddingTop:insets.top, backgroundColor: 'dodgerblue', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.fontStyle}>Hello React Native, we're making some of this text super long and weird and long, so that we can test if the app hates us for the length of the things we did.</Text>
        <Image
          blurRadius={5}
          fadeDuration={2000}
          source={{
            width: 200,
            height: 300,
            uri:"https://picsum.photos/200/300"}} />
    </View>
  )
}

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeScreen />
    </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
  },

  fontStyle: {
    fontSize: 24,
  }
});
