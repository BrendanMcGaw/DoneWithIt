import { 
  SafeAreaProvider, 
  useSafeAreaInsets 
} from "react-native-safe-area-context";

import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight,
  Platform, 
  SafeAreaView, 
  View, 
  StyleSheet, 
  Text, 
  Image,
  Button,
  Alert,
  StatusBar,
} from 'react-native';

function SafeScreen() {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.container}>
        <Text style={styles.fontStyle}>Hello React Native. What ift hjerre weremorwewords</Text>

        <TouchableHighlight onPress={() => 
          Alert.alert("Question", "Do you like this image?", [
            { text: "Yes", onPress: () => console.log("Yes") },
            { text: "No", onPress: () => console.log("No") },
          ])
        }>
          <Image
            blurRadius={5}
            fadeDuration={2000}
            source={{
              width: 200,
              height: 300,
              uri:"https://picsum.photos/200/300",
            }} 
          />
        </TouchableHighlight>

{/* our button,with styling and a prompt that asks aquestion,only works on ios. */}
        <Button 
          title="Click Me!"
          color="orange"
          onPress={() => 
            Alert.prompt(
              "Question", 
              "Are you digging this app?", 
              [
                { text: "Ok", onPress: console.log("He's a PIMP")}
              ]
            )
          }
        />
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
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent: "center",
    alignItems: "center",
  },
  fontStyle: {
    fontSize: 16,
  }
});
