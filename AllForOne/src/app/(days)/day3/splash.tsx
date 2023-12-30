
import React, { useRef, useEffect } from 'react';
import { Text,Button, StyleSheet, View,StyleProp } from 'react-native';
import LottieView from 'lottie-react-native';
import { Stack } from 'expo-router';
import { Directions } from 'react-native-gesture-handler';


export default function App() {
  const animation = useRef<LottieView>(null);
  useEffect(() => {
    // You can control the ref programmatically, rather than using autoPlay
    // animation.current?.play();
  }, []);

  return (
    <View style={styles.animationContainer}>
        <Stack.Screen options={{headerShown : false}}/>
      <LottieView
        ref={animation}
        autoPlay
        style={{
          width: 300,
          height: 300,
          borderRadius: 400,
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('./assets/Animation - 1703835489435.json')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  
  animationContainer: {
    backgroundColor: 'black',
    alignItems: 'center',
    flex: 1,
    justifyContent:"center",
  },
});
