import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
        <View style = {styles.backGrIN}>
            <View style ={{  width: "322px", height: "100px", justifyContent: "center", alignItems: "center" }}>
                <Text style = {styles.passwGen}>PASSWORD</Text>
                <Text style = {[styles.passwGen, {top:"15px"}]}>GENERATOR</Text>
            </View>
            <View style = {styles.blankView}><Text>  </Text></View>
            <View style = {styles.viewContent}>
                <Text style = {styles.content}>Password length</Text>
                <View style = {{width: "118px", height: "33px", top: "5px", left: "30px", backgroundColor: "white"}}> </View>
            </View>
            <View style = {styles.viewContent}>
                <Text style = {styles.content}>Include lower case letters </Text>
                <Ionicons name="ios-checkbox" size={30} color="white" style ={{top: '5px', left: '30px'}} />
            </View>
            <View style = {styles.viewContent}>
                <Text style = {styles.content}>Include upcase letters </Text>
                <MaterialCommunityIcons name="checkbox-blank" size={30} color="white" style ={{top: '5px', left: '63px'}}/>
            </View>
            <View style = {styles.viewContent}>
                <Text style = {styles.content}>Include number </Text>
                <Ionicons name="ios-checkbox" size={30} color="white" style ={{top: '5px', left: '125px'}} />
            </View>
            <View style = {styles.viewContent}>
                <Text style = {styles.content}>Include special symbol </Text>
                <MaterialCommunityIcons name="checkbox-blank" size={30} color="white" style ={{top: '5px', left: '54px'}}/>
            </View >
            <View style = {{ width: "269px", height: "55px", top: "10px", left: "15px"}}>
                <TouchableOpacity style = {{backgroundColor:"#3B3B98", width: "269px", height: "55px", top: "100px", left: "30px"}}>
                    <Text style = {[styles.passwGen, {fontSize: "18px", lineHeight:"21.09px", left: "30px"}]}>GENERATE PASSWORD </Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3B3B98',
    width: "360px",
  },
  backGrIN: {
    backgroundColor: "#23235B",
    width: "350px",
    height: "625px",
    top: "19px",
    left: "19px",
    borderRadius: "15px"
  },
  passwGen: {
    top: "19px",
    left: "19px",
    fontFamily: "Roboto, Arial",
    fontWeight: 700,
    fontSize: "25px",
    lineHeight: "29.3px",
    color: "white",
    
  },
  blankView: {
    width: "310px",
    height: "55px",
    top: "19px",
    left: "19px",
    backgroundColor: "#151537"
  },
  viewContent: {
    width: "350px",
    height: "50px",
    top: "50px",
    left: "19px",
    flexDirection: "row"
  },
  content: {
    top: "10px",
    fontFamily: "Roboto, Arial",
    fontWeight: 700,
    fontSize: "20px",
    lineHeight: "23.44px",
    color: "white",
  }
});
