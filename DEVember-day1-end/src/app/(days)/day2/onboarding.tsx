import {View, Text,StyleSheet ,Image} from "react-native";
import { Stack } from "expo-router";



export default function OnboardingScreen(){

return (
<View style= {styles.container}>
    <Stack.Screen options={{headerShown : false}}/>
    <Image source={require('../day2/images2/geek.png')}/>
<Text style= {styles.title}>Hello! Mr.Kartik</Text>
<Text style= {styles.description}>Which persona would you like to choose today? On this onboarding screen you can monitor your everyday persona and help others to get overwhelmed by the fact of your react native skills. Have fun!</Text>
</View>
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
        fontSize:28,
        letterSpacing:1.5,

        padding:20,

    },
    image:{


    },
    description:{

        color:'grey',
        fontFamily:'InterSemi',
        fontSize:18,
       textAlign:'left',
       padding:10,


    },
  });