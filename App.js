import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, 
  SafeAreaView, state, Image, TouchableWithoutFeedback, 
  TouchableOpacity, TouchableHighlight,
   TouchableNativeFeedback, 
   Button,
   Alert} from 'react-native';

export default function App() {
  var i = 0;
  const handlePress = () => console.log("text pressed");
  

  return (
    
    <SafeAreaView style={styles.container}>
      <Button 
        title="Click Me" 
        color="orange"
        onPress={() => 
        Alert.prompt(
          "Question",
          "What is your name?",
          (text) => console.log(text)
        )}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
