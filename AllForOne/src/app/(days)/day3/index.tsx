import React, { useRef, useEffect } from 'react';
import { Text,Button, StyleSheet, View,StyleProp } from 'react-native';
import LottieView from 'lottie-react-native';
import { Stack ,Link} from 'expo-router';
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
        style={{
          width: 400,
          height: 400,
      
          borderRadius: 400,
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('./assets/Animation - 1703835671229.json')}
      />
      
      <View style={styles.animation}>
<Button style={styles.animationButton}title="Play" onPress={()=>animation.current?.play()}/>
<Button  title="Pause" onPress={()=>animation.current?.pause()}/>
<Button  title="Reset" onPress={()=>animation.current?.reset()}/>
</View>

      <Text style={styles.title}>Hola Amigo!
      </Text>
      <Text style={styles.title1}>Kaise ho theek ho?
      </Text>
      <Link href="/day3/splash" asChild>
      <Button style={{marginTop:20}}title='Go to Splash Screen'/>
      </Link>
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
  },
  animation:{
    flexDirection: "row",
    gap:50,
  },
  animationButton:{
    borderRadius:100,
    backgroundColor:'orange',
  }
});
