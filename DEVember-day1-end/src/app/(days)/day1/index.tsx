import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const DayDetailsScreen = () => {
  return (
    <SafeAreaView>
      <Stack.Screen options={{ title: 'ReadMe N**ga' }} />

      <Text style={{ fontFamily: 'Inter', fontSize: 25,paddingLeft:5, lineHeight:80}}>
        This screen landmarks the starting of developing a fully react native app(...blah blah blah) with Moreover (blah blah blah..)
        I can flex this (blah blah ) all day😂
      </Text>
      <Text  style={{ fontFamily: 'Inter', fontSize: 30,paddingLeft:10, }}>So,</Text> 
      <Text style={{ textAlign : 'left', fontSize: 15,paddingLeft:10,lineHeight:30}}>Try it out yourself where you can click each numbered box and experience skills and feel the imposter syndrome
         that would haunt you everyday after using this app ,              Thank me later if you feel insominiatic and hallucinated😎 </Text>
    </SafeAreaView>
  );
};

export default DayDetailsScreen;
