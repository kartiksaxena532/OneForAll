// ReadmeScreen.js
import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { Stack } from 'expo-router';
const ReadmeScreen = () => {
  return (
    <ScrollView style={styles.container}>
       <Stack.Screen options={{headerShown : false}}/>
      <View style={styles.header}>
        <Image
          source={require('../day2/images2/ok.png')} // Replace with your app logo
          style={styles.logo}
        />
        <Text style={styles.title}>My Awesome React Native App</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Overview</Text>
        <Text style={styles.sectionText}>
        This screen landmarks the starting of developing a fully react native app(...blah blah blah) with Moreover (blah blah blah..)
        I can flex this (blah blah ) all day😂
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Installation</Text>
        <Text style={styles.sectionText}>
          Follow these steps to install the app and get started:
          1. Clone the repository
          2. Run `npm install`
          3. Run `npm start`
          </Text>
          <Text style={{ textAlign : 'left', fontSize: 15,paddingLeft:10,lineHeight:30}}>
          Try it out yourself where you can click each numbered box and experience skills and feel the imposter syndrome
         that would haunt you everyday after using this app ,Thank me later if you feel insominiatic and hallucinated😎
         
        </Text>
      </View>
      {/* Add more sections as needed */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  sectionText: {
    fontSize: 16,
    marginBottom:20
  },
});

export default ReadmeScreen;
