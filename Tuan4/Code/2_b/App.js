import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
        <View style = {{width: "auto", flexDirection: "row"}}>
          <Image source={{uri: 'https://product.hstatic.net/1000261226/product/hjx_001_master.jpg'}} style = {{width: "70px", height: "70px", top: "13px", left: "35px"}}/>
          <Text style = {styles.firstContent}>USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa bluetooth</Text>
        </View>
        <View>
            <Text style = {styles.secondContent}>Cực kỳ hài lòng</Text>
        </View>
        <View style = {{flexDirection: "row"}}>
            <Entypo name="star" size={45} color="#F2DD1B" style = {{ width: "39px", height: "39px", top:"75px", left: "60px"}} />
            <Entypo name="star" size={45} color="#F2DD1B" style = {{ width: "39px", height: "39px", top:"75px", left: "80px"}} />
            <Entypo name="star" size={45} color="#F2DD1B" style = {{ width: "39px", height: "39px", top:"75px", left: "100px"}} />
            <Entypo name="star" size={45} color="#F2DD1B" style = {{ width: "39px", height: "39px", top:"75px", left: "120px"}} />
            <Entypo name="star" size={45} color="#F2DD1B" style = {{ width: "39px", height: "39px", top:"75px", left: "140px"}} />
        </View>
        <View style = {styles.view1}>
            <FontAwesome5 name="camera" size={40} color="black" style = {{width: "39px", height: "39px", top: "10px", left: "40px"}} />
            <Text style = {styles.thirdContent} >Thêm hình ảnh</Text>
        </View>
        <View style = {styles.view2}>
                <Text style ={{ width: "259px", height: "21px", top: "10px", left: "27px", fontFamily: "Roboto, Arial", fontSize: "18px", lineHeight: "21.09px", fontWeight: 700, color: "#C4C4C4"
                 }}>Hãy chia sẻ những điều mà bạn thích về sản phẩm</Text>
        </View>
        <View>
            <TouchableOpacity style = {styles.touch}>
                 <Text style = {styles.lastContent}>Gửi</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
  firstContent: {
    width: "259px",
    height: "21px",
    top: "19px",
    left: "70px",
    fontFamily: "Roboto, Arial",
    fontSize: "16px",
    lineHeight: "18.75px",
    fontWeight: 700
  },
  secondContent: {
    width: "259px",
    height: "21px",
    top: "70px",
    left: "140px",
    fontFamily: "Roboto, Arial",
    fontSize: "18px",
    lineHeight: "21.09px",
    fontWeight: 700,
  },
  view1: {
    width: "293px",
    height: "68px",
    top: "120px",
    left: "55px",
    borderColor: "#1511EB",
    borderWidth: "1px",
    borderRadius: "5px",
    flexDirection: 'row'
  }, 
  thirdContent: {
    width: "259px",
    height: "21px",
    top: "23px",
    left: "59px",
    fontFamily: "Roboto, Arial",
    fontSize: "18px",
    lineHeight: "21.09px",
    fontWeight: 700,
  },
  view2: {
    width: "293px",
    height: "222px",
    top: "150px",
    left: "55px",
    borderColor: "#C4C4C4",
    borderWidth: "1px",
    borderRadius: "5px",
  }, 
  lastContent: {
    width: "259px",
    height: "31px",
    top: "10px",
    left: "127px",
    fontFamily: "Roboto, Arial",
    fontSize: "20px",
    lineHeight: "23.44px",
    fontWeight: 700,
    color: "white"
  }, 
  touch: {
    width: "293px",
    height: "40px",
    top: "180px",
    left: "55px",
    borderColor: "#1511EB",
    borderWidth: "1px",
    borderRadius: "5px",
    backgroundColor: "#0D5DB6"
  }
});
