import {View, Text,StyleSheet ,Image,Pressable, TouchableHighlight, Button} from "react-native";
import { Link, Stack ,router} from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons';
import { useState } from "react";

const onboardingOptions=[
    {
        title:"Artist",
image:require('../day2/images2/artist.png'),
description:"Passionate artist immersed in a world of colors and creativity. From strokes of a brush to pixels on a screen, I craft visual stories that evoke emotions. Inspired by nature, culture, and dreams.",
    },
    {
title:"Gamer",
image:require('../day2/images2/gamer.png'),
description:"Ready Player One! Just a slang to be ready to play Spiderman 2 and Wolverine on this PC probably by end of my life. Preparing for the gaming, excited for Spiderman 2 and Wolverine adventures!",

},
{
    title:"Developer",
    image:require('../day2/images2/geek.png'),
    description:"My approach involves hands-on experience, and I'm dedicated to the completion of 24 in-apps projects, each contributing to the enhancement of my skill set. This is my daily commitment. ",
    
    },
    {
        title:"Ordinary Person",
        image:require('../day2/images2/nerd.png'),
        description:"Exploring anime like My Hero Academia, where the power One For All is wielded by Izuku Midoriya. This inspired the name of my GitHub repository, reflecting my journey through diverse animes",
        
        }];


export default function OnboardingScreen(){
   
    const [screenIndex,setScreenIndex]= useState(0);
    
    const data = onboardingOptions[screenIndex];
    const onContinue = ()=>{
        const isLastScreen =screenIndex === onboardingOptions.length-1;
        if(isLastScreen){
            setScreenIndex(0);
            router.back();
        }
        else{
        setScreenIndex(screenIndex+1);
        }
    }
    return (
<SafeAreaView style= {styles.container}>
    <Stack.Screen options={{headerShown : false}}/>
    <View>
    <Image style={styles.image} source={data.image}/>
<Text style= {styles.title}>{data.title}</Text>
<Text style= {styles.description}>{data.description}</Text>
</View>

<View style={styles.buttonRow}>
    <TouchableOpacity>
    <Text style={styles.skipText}>Skip</Text>
    </TouchableOpacity>
    <Pressable onPress={onContinue} style={styles.button}  >
        <Text style={styles.buttonText}>Continue</Text>
    </Pressable>
    
</View>
</SafeAreaView>

)}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#15141A',
      alignItems: 'center',
      justifyContent:'center'
    },
    title:{
        color:'#FDFDFD',
        fontFamily:'Inter',
        fontSize:40,
        letterSpacing:1.5,
        textAlign:'left',
        padding:20,
    },
    image:{
        alignSelf: "center",
    },
    description:{

        color:'grey',
        fontFamily:'InterSemi',
        fontSize:19,
       textAlign:'left',
       padding:10,
       paddingHorizontal:20,
       lineHeight:28 ,


    },
    buttonText:{
        fontSize:20,
        color:'#FDFDFD',
        fontFamily:'InterSemi',
        alignItems:"center",

        

    },
    button:{
        backgroundColor:"#302E38",
        padding:15 ,
        borderRadius:30,
        width:280,
        alignItems:"center",
        marginTop:19,
        flex:1,
        
    },
    buttonRow:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-start",
        gap:27,
        marginTop:20,
        marginRight:20,
    },
    skipText:{
        fontSize:20,
        color:'#FDFDFD',
        fontFamily:'InterSemi',
        alignItems:"center",
        marginTop:20,
        marginLeft:25,
        
    }

    


  });