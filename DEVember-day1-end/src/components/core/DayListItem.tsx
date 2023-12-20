import { Text, View, StyleSheet, Pressable,ImageBackground } from 'react-native';
import { Link } from 'expo-router';

type DayListItem = {
  day: number;
};

export default function DayListItem({ day }: DayListItem) {
  return (
    <Link href={`/day${day}`} asChild>
      <Pressable style={styles.box}>
      <ImageBackground
        source={require('../core/images/my_avatar-removebg-preview.png')} 
        style={styles.image}
      >
        <Text style={styles.text}>{day}</Text>
      </ImageBackground>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#527853',
    flex: 1,
    aspectRatio: 1,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#9b4521',
    borderRadius: 10,
    overflow: 'hidden',
  },
  text: {
    color: '#EE7214',
    fontSize: 30,
    fontFamily: 'Inter',
    paddingLeft:10,
   
  
  },
  image: {
    width: '100%', // Match the width of the parent container
    height: '100%', // Match the height of the parent container
    resizeMode: 'cover',   
    overflow: 'hidden',
  },

});
