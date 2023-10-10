import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,  TouchableOpacity, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function App() {
  return (
    <View style={styles.container}>
        <View style ={{width: "auto", height: "300px", backgroundColor: "white"}}>
              <View style ={{width: "auto", height: "150px", flexDirection: "row"}}>
                <Image source={{uri: 'https://salt.tikicdn.com/cache/w1200/ts/product/7a/5e/62/8a692ce25c7ed5778c5e2e72576a15cc.jpg'}} style = {{width: "104px", height: "127px", top: "14px", left: "10px"}}/>
                <View>
                  <View style ={{top: "10px", width: "auto", height: "60px"}} >
                      <Text style ={{ top: "10px", width: "250px", height: "14px", left: "45px",
                        fontWeight: 700, fontFamily: "Roboto, Arial", fontSize: "12px", lineHeight: "14.06px", color: "black"}}>Nguyên hàm tích phân và ứng dụng</Text>
                      <Text style ={{ top: "20px", width: "250px", height: "14px", left: "45px",
                        fontWeight: 700, fontFamily: "Roboto, Arial", fontSize: "12px", lineHeight: "14.06px", color: "black"}}>Cung cấp bởi Tiki Trading</Text>
                      <Text style ={{ top: "30px", width: "100px", height: "21px", left: "45px",
                      fontWeight: 700, fontFamily: "Roboto, Arial", fontSize: "18px", lineHeight: "21.09px", color: "#EE0D0D"}}>141.800 đ</Text>
                      <Text style ={{ top: "35px", width: "100px", height: "21px", left: "45px",
                      fontWeight: 700, fontFamily: "Roboto, Arial", fontSize: "12px", lineHeight: "14.06px", color: "#808080"}}>141.800 đ</Text>
                      <View style ={{width: "auto", height: "20px", flexDirection: "row"}}>
                          <AntDesign name="minussquare" size={15} color="gray" style = {{top: "40px", left: "45px"}} />
                          <Text style ={{top: "40px", width: "10px", height: "18px", left: "65px",
                          fontWeight: 700, fontFamily: "Roboto, Arial", fontSize: "15px", lineHeight: "17.58px", color: "black"}}>1</Text>
                          <AntDesign name="plussquare" size={15} color="gray" style = {{top: "40px", left: "85px"}} />
                          <Text style ={{ top: "40px", width: "60px", height: "14px", left: "180px",
                          fontWeight: 700, fontFamily: "Roboto, Arial", fontSize: "12px", lineHeight: "14.06px", color: "#134FEC"}}>Mua sau</Text>
                      </View>
                  </View>
                </View>
              </View>
              <View style ={{width: "auto", height: "30px", flexDirection: "row"}}>
                  <Text style ={{ top: "10px", width: "130px", height: "14px", left: "20px",
                  fontWeight: 700, fontFamily: "Roboto, Arial", fontSize: "12px", lineHeight: "14.06px", color: "black"}}>Mã giảm giá đã lưu</Text>
                  <Text style ={{ top: "10px", width: "80px", height: "14px", left: "20px",
                  fontWeight: 700, fontFamily: "Roboto, Arial", fontSize: "12px", lineHeight: "14.06px", color: "#134FEC"}}>Xem tại đây</Text>
              </View>
              <View style ={{width: "auto", height: "50px", flexDirection: "row"}}>
                  <View style ={{width: "200px", height: "40px", top:"40px", left: "20px", borderColor:"#808080", borderRadius: "1px", borderWidth: "1px", flexDirection: "row"}}>
                      <MaterialCommunityIcons name="rectangle" size={24} color="#F2DD1B" style = {{top: "7px", left: "10px", width: "10px"}}/>
                      <Text style = {{top: "10px", left: "40px", fontFamily: "Roboto, Arial", fontSize: "18px", lineHeight: "21.09px", fontWeight: 700}}>Mã giảm giá</Text>
                  </View>
                  <TouchableOpacity style ={{width: "100px", height: "40px", top:"40px", left: "75px", backgroundColor:"#0A5EB7", borderRadius: "2px"}}>
                      <Text style = {{top: "10px", left: "10px", fontFamily: "Roboto, Arial", fontSize: "20px", lineHeight: "23.44px", fontWeight: 700, color: "white"}}>Áp dụng</Text>
                  </TouchableOpacity>
              </View>
        </View>

        <View style ={{top: "30px", width: "auto", height: "51px", backgroundColor: "white"}}>
          <View style ={{top: "10px", width: "auto", height: "60px", flexDirection: "row"}} >
              <Text style ={{ top: "10px", width: "250px", height: "14px", left: "20px",
                fontWeight: 700, fontFamily: "Roboto, Arial", fontSize: "12px", lineHeight: "14.06px", color: "black"}}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
              <Text style ={{ top: "10px", width: "100px", height: "14px", left: "30px",
                fontWeight: 700, fontFamily: "Roboto, Arial", fontSize: "12px", lineHeight: "14.06px", color: "#134FEC"}}>Nhập tại đây?</Text>
          </View>
        </View>

        <View style ={{top: "50px", width: "auto", height: "51px", backgroundColor: "white"}} >
          <View style ={{top: "10px", width: "auto", height: "60px", flexDirection: "row"}} >
              <Text style ={{ top: "10px", width: "100px", height: "21px", left: "20px",
                fontWeight: 700, fontFamily: "Roboto, Arial", fontSize: "18px", lineHeight: "21.09px", color: "black"}}>Tạm tính</Text>
              <Text style ={{ top: "8px", width: "100px", height: "21px", left: "180px",
                fontWeight: 700, fontFamily: "Roboto, Arial", fontSize: "18px", lineHeight: "21.09px", color: "#EE0D0D"}}>141.800 đ</Text>
          </View>
        </View>

        <View style ={{top: "140px", width: "auto", height: "120px", backgroundColor: "white"}}>
          <View style ={{top: "10px", width: "auto", height: "60px", flexDirection: "row"}} >
              <Text style ={{ top: "10px", width: "100px", height: "21px", left: "20px",
                fontWeight: 700, fontFamily: "Roboto, Arial", fontSize: "18px", lineHeight: "21.09px", color: "#808080"}}>Thành tiền</Text>
              <Text style ={{ top: "8px", width: "100px", height: "21px", left: "180px",
                fontWeight: 700, fontFamily: "Roboto, Arial", fontSize: "20px", lineHeight: "23.44px", color: "#EE0D0D"}}>141.800 đ</Text>
          </View>
          <View>
              <TouchableOpacity style ={{top: "0px", width: "360px", height: "45px", backgroundColor: "#E53935", left: '13px', borderRadius: "2px"}}>
                  <Text  style ={{ top: "10px", width: "300px", height: "23px", left: "70px",
                fontWeight: 700, fontFamily: "Roboto, Arial", fontSize: "20px", lineHeight: "23.44px", color: "white"}}>TIẾN HÀNH ĐẶT HÀNG</Text>
              </TouchableOpacity>
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C4C4C4',
  },
});
