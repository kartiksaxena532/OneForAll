import React, { useRef, useEffect } from 'react';
import { Text,Button, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { Stack } from 'expo-router';

export default function App() {
  const animation = useRef(null);
  useEffect(() => {
    // You can control the ref programmatically, rather than using autoPlay
    // animation.current?.play();
  }, []);

  return (
    <View style={styles.animationContainer}>
        <Stack.Screen options={{headerShown : false}}/>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 400,
          height: 400,
          backgroundColor: 'grey',
          borderRadius: 400,
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('./assets/Animation - 1703835671229.json')}
      />
      <Text style={styles.title}>Hola Amigo!
      </Text>
      <Text style={styles.title1}>Kaise ho theek ho?
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 5,
    color: 'black',
  },
  title1:{
    fontSize: 19,
    fontWeight: 'semibold',
    marginTop: 5,
    color: 'black',
  }
});
