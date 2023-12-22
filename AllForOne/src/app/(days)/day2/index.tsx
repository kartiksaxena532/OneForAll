import { View, Text,Button } from 'react-native';
import React from 'react';
import { Stack,Link } from 'expo-router';
const DayDetailsScreen = () => {
  return (
    <View>
      <Stack.Screen options={{title: "Rebel 1 : Landing"}}/>
      <Text>Day Details Screen</Text>
      <Link href="/day2/onboarding" asChild>
      <Button title="Go to landing"/>
      </Link>  
    </View>
  );
};

export default DayDetailsScreen;
