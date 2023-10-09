import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { LinearGradient } from 'expo-linear-gradient';
function App() {
  return (
    <LinearGradient colors={['#FBCB00','#BF9A00']}>
        <View style = {style.container}>
          
              <View >
                  <Text style = {style.contentLogin}>Login</Text>
              </View>

              <View style = {style.viewName}>
                   <Ionicons name="person" size={30} color="black" style = {{width: "32px", height: "32px", top: "10px", left: "24px"}} />
                  <Text style = {style.contentName}>Name</Text>
              </View>
              <View style = {style.viewPass}>
                  <Fontisto name="locked" size={30} color="black" style = {{width: "32px", height: "32px", top: "10px", left: "24px"}} />
                  <Text  style = {style.contentPass}>Password</Text>
                  <AntDesign name="eye" size={30} color="black" style = {{width: "32px", height: "32px", top: "12px", left: "180px"}} />
              </View>
              <View>
                <TouchableOpacity style = {style.touch}>
                  <Text style = {style.contentLogin2}>Login</Text>
                </TouchableOpacity>
              </View>
              <View>
                  <Text style = {style.contentForgot}>Forgot your password?</Text>
              </View>
        </View>
    </LinearGradient>
  )
}

const style = StyleSheet.create({
  container: {

    flex: 1,
    width: "390px",
    height: "640px",
    flexDirection: "column",
    
   
  },
  contentLogin:{
    width: "100px",
    height: "35px",
    top: "75px",
    left: "3px",
    fontWeight: 700,
    fontSize: "30px",
    lineHeight: "35.16px",
    textAlign: "center",
    textTransform: "uppercase",
    fontFamily: "Roboto, Arial"
  },
  viewName:{
    width: "360px",
    height: "54px",
    top: "172px",
    left: "15px",
    backgroundColor: "rgba(196, 196, 196, 0.3)",
    borderColor: "#F2F2F2",
    borderWidth: "1px",
    flexDirection: 'row'
  },
  contentName:{
    width: "100px",
    height: "21px",
    top: "16px",
    left: "31px",
    fontSize: "18px",
    fontWeight: 500,
    fontStyle: "bold",
    textAlign: 'center',
    lineHeight: "21.09px",
    fontFamily: "Roboto, Arial"
  },
  viewPass:{
    width: "360px",
    height: "54px",
    top: "190px",
    left: "15px",
    backgroundColor: "rgba(196, 196, 196, 0.3)",
    borderColor: "#F2F2F2",
    borderWidth: "1px",
    flexDirection: 'row'
  },
  contentPass:{
    width: "100px",
    height: "21px",
    top: "16px",
    left: "30px",
    fontSize: "18px",
    fontWeight: 500,
    textAlign: 'center',
    lineHeight: "21.09px",
    fontFamily: "Roboto, Arial"
  },
  touch:{
    width: "360px",
    height: "45px",
    top: "260px",
    left: "15px",
    backgroundColor: "black"
  },
  contentLogin2: {
    width: "147px",
    height: "27px",
    top: "10px",
    left: "113px",
    color: "white",
    textTransform: "uppercase",
    fontWeight: 700,
    lineHeight: "23.44px",
    textAlign: "center",
    fontSize: "20px",
    fontFamily: "Roboto, Arial"
  },
  contentForgot:{
    width: "239px",
    height: "27px",
    top: "300px",
    left: "71px",
    fontWeight: 700,
    lineHeight: "23.44px",
    textAlign: "center",
    fontSize: "20px",
    fontFamily: "Roboto, Arial"
  }
}
)

export default App
