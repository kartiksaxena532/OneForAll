import {View, Text,StyleSheet ,Image,Pressable, TouchableHighlight} from "react-native";
import { Link, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons';

const onboardingOptions=[{
title:"Gamer",
image:"",
description:"Ready Player One ! Just a slang to be ready to play Spiderman 2 and Wolverine on this PC probably by end of my life.",

},
{
    title:"Developer",
    image:"",
    description:"Learning React Native by building 24 in apps project to build up my resume everyday",
    
    },
    {
        title:"Ordinary Person",
        image:"",
        description:"Running through anime content such as My Hero Academia were the power One For All is beared by Iszuku Midoriya. So as the name of this github repo",
        
        },];

export default function OnboardingScreen(){

return (
    
<SafeAreaView style= {styles.container}>
    <Stack.Screen options={{headerShown : false}}/>
    <View>
    <Image style={styles.image} source={require('../day2/images2/nerd.png')}/>
<Text style= {styles.title}>Hello! Mr.Kartik</Text>
<Text style= {styles.description}>Which persona would you like to choose today? On this onboarding screen you can monitor your everyday persona and help others to get overwhelmed by the fact of your react native skills. Have fun!</Text>
</View>

<View style={styles.buttonRow}>
    <TouchableOpacity>
    <Text style={styles.buttonText}>Skip</Text>
    </TouchableOpacity>
    <Link href="/day2/onboarding2">
    <TouchableOpacity style={styles.button}>
    <AntDesign name="arrowright" size={24} color="white" />
    
    </TouchableOpacity>
    </Link>
</View>
</SafeAreaView>

)

}
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
        marginTop:20

    },
    button:{
        backgroundColor:"#302E38",
        padding:15 ,
        borderRadius:30,
        width:300,
        alignItems:"center",
        marginTop:19,
        flex:1,
        
    },
    buttonRow:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-start",
        gap:27,
        marginTop:20
    },
    

    


  });