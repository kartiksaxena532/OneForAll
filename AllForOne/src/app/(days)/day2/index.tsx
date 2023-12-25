import {View, Text,StyleSheet ,Image,Pressable, TouchableHighlight} from "react-native";
import { Link, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons';

const DayDetailsScreen = () => {
  return (
      <SafeAreaView style= {styles.container}>
          <Stack.Screen options={{headerShown : false}}/>
          <View>
          <Image style={styles.image} source={require('../day2/images2/ok.png')}/>
      <Text style= {styles.title}>Hello! Mr.Kartik</Text>
      <Text style= {styles.description}>Which persona would you like to choose today? On this onboarding screen you can monitor your everyday persona and help others to get overwhelmed by the fact of your react native skills. Have fun!</Text>
      </View>
      
      <View style={styles.buttonRow}>
          
      <Link href="/day2/onboarding" >
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
              width: 300, // Set the desired width
    height: 300,
    borderRadius:150,
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
      


export default DayDetailsScreen;
