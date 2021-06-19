import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import CustomDatePicker from '../routes/datePicker';
import * as Animatable from 'react-native-animatable';
import DropDownPicker from 'react-native-dropdown-picker';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import FontAwesome from 'react-native-vector-icons/Feather';
import Feather from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView, StyleSheet, Button, Text,Modal, View, Image, TouchableOpacity, Dimensions, Picker, Platform, ImageBackground} from 'react-native';
import Animated from 'react-native-reanimated';
import { getPixelSizeForLayoutSize } from 'react-native/Libraries/Utilities/PixelRatio';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';



const Dashboard = ({navigation}) => {

    var deviceWidth = Dimensions.get('window').width;
    var deviceHeight = Dimensions.get('window').height;



//     const [date, setDate] = React.useState(new Date(1598051730000));
//   const [mode, setMode] = React.useState('date');
//   const [show, setShow] = React.useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
  setShow(Platform.OS === 'ios');
    setDate  (currentDate);
  };

//   const showMode = (currentMode) => {
//     setShow(true);
//     setMode(currentMode);
//   };

//   const showDatepicker = () => {
//     showMode('date');
//   };


   

      const [modalOpen, setModalOpen] = React.useState(false);

     
    const [selectedValue, setSelectedValue] = React.useState("- Select Gender - ");

      const [data, setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        check_textInputChange2: false,
        check_textInputChange3: false,
        check_textInputChange4: false,
        check_textInputChange5: false,
        check_textInputChange6: false,
        secureTextEntry: true
      });
  
      const textInputChange = (val) => {
          if (val.length !== 0) {
              setData({
                  ...data,
                  email: val,
                  check_textInputChange: true
              });
          }
          else{
              setData({
                  ...data,
                  email: val,
                  check_textInputChange: false
              });
          }
      }

      const textInputChange2 = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                fullname: val,
                check_textInputChange2: true
            });
        }
        else{
            setData({
                ...data,
                fullname: val,
                check_textInputChange2: false
            });
        }
    }

    const textInputChange3 = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                address: val,
                check_textInputChange3: true
            });
        }
        else{
            setData({
                ...data,
                address: val,
                check_textInputChange3: false
            });
        }
    }

    const textInputChange4 = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                city: val,
                check_textInputChange4: true
            });
        }
        else{
            setData({
                ...data,
                city: val,
                check_textInputChange4: false
            });
        }
    }

    const textInputChange5 = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                state: val,
                check_textInputChange5: true
            });
        }
        else{
            setData({
                ...data,
                state: val,
                check_textInputChange5: false
            });
        }
    }

    const textInputChange6 = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                otp: val,
                check_textInputChange6: true
            });
        }
        else{
            setData({
                ...data,
                otp: val,
                check_textInputChange6: false
            });
        }
    }

    const handlePasswordChange = (val) => {
            setData({
                ...data,
                password: val
            });
        }

        const updateSecureTextEntry = () =>{
            setData({
                ...data,
                secureTextEntry: !data.secureTextEntry
            });
        }


    const numberInputChange = (val) =>{
        if (val.length === 11) {
            setData({
                ...data,
                phone: val,
                check_numberInputChange: true
            });
        }
        else{
            setData({
                ...data,
                phone: val,
                check_numberInputChange: false
            });
        }
    }



    return(
    <ImageBackground
    source={require('../assets/images/bg.jpg')}
    style={{width:"100%", height:"100%"}}>

    <Modal visible = {modalOpen}
    transparent = {true}
    animationType='slide'>
      <View style={{ flex: 1 }}>
          <ScrollView style={{backgroundColor: '#ffffff', height:"100%", margin:50, padding:40, borderRadius:10, flex:1}}>
        
        <MaterialIcons
        name='close'
        size={15}
        style={styles.modalToggle}
        onPress={()=> setModalOpen(false)} />


<Text style={modalStyles.text_footer}> First Name </Text>   
            <View style={modalStyles.action}>
              
                <TextInput
                placeholder="Enter your first name"
                style={modalStyles.textInput}
                autoCapitalize="none"
                onChangeText={(val)=>textInputChange2(val)}
                />
                {data.check_textInputChange2 ? 
                <Feather
                name="check-circle"
                color="#2074A4"
                size={20}
                />
                : 
                <Feather
                name="close"
                color="#FF0000"
                size={20}
                />}
            </View> 

            <Text style={modalStyles.text_footer, {marginTop: 5}}> Last Name </Text>   
            <View style={modalStyles.action}>
                <TextInput
                placeholder="Enter your last name"
                style={modalStyles.textInput}
                autoCapitalize="none"
                onChangeText={(val)=>textInputChange(val)}
                />
                {data.check_textInputChange ? 
                <Feather
                name="check-circle"
                color="#2074A4"
                size={20}
                />
                : 
                <Feather
                name="close"
                color="#FF0000"
                size={20}
                />}
            </View> 

            <Text style={modalStyles.text_footer, {marginTop: 5}}> Phone Number </Text>   
            <View style={modalStyles.action}>
                <TextInput
                placeholder="Enter your phone number"
                style={modalStyles.textInput}
                autoCapitalize="none"
                onChangeText={(val)=>numberInputChange(val)}
                keyboardType='numeric'
                maxLength={11}
                />
                {data.check_numberInputChange ? 
                <Feather
                name="check-circle"
                color="#2074A4"
                size={20}
                />
                : 
                <Feather
                name="close"
                color="#FF0000"
                size={20}
                />}
            </View> 


            <Text style={modalStyles.text_footer, {marginTop: 5}}> Date Of Birth </Text>   
            <View style={modalStyles.action}>
                {/* <TouchableOpacity onPress={showDatepicker}>
                <Feather
                name="calendar"
                color="#2074A4"
                size={20}
                />
                </TouchableOpacity> */}
            </View>
            <View style={{marginHorizontal: 1}}>
            <CustomDatePicker
            textStyle = {{
                paddingVertical: 10,
                paddingHorizontal: 10,
                borderColor: 'gray',
                borderRadius: 9,
                borderWidth: 1,
            }}
            defaultDate="1985-01-01"
            onDateChange={(value) => console.log('Date Changed' +value)} />
            </View>
            {/* {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )} */}

{/* <DatePicker
      date={date}
      onChange={onChange}
      onDateChange={setDate}
    /> */}
            
            <Text style={modalStyles.text_footer, {marginTop: 5}}> Gender </Text>   
            <Picker
            selectedValue = {selectedValue}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            itemStyle={{
            justifyContent: 'flex-start',
            borderColor: 'gray'
            }}
            dropDownStyle={{backgroundColor: '#fafafa'}}>
                 <Picker.Item label="Male" value="M" />
                <Picker.Item label="Female" value="F" />
            </Picker>


            <Text style={modalStyles.text_footer, {marginTop: 5}}> Address </Text>   
            <View style={modalStyles.action}>
                <TextInput
                placeholder="Enter your address"
                style={modalStyles.textInput}
                autoCapitalize="none"
                onChangeText={(val)=>textInputChange3(val)}
                />
                {data.check_textInputChange3 ? 
                <Feather
                name="check-circle"
                color="#2074A4"
                size={20}
                />
                : 
                <Feather
                name="close"
                color="#FF0000"
                size={20}
                />}
            </View> 

            <Text style={modalStyles.text_footer, {marginTop: 5}}> City </Text>   
            <View style={modalStyles.action}>
                <TextInput
                placeholder="Enter your city"
                style={modalStyles.textInput}
                autoCapitalize="none"
                onChangeText={(val)=>textInputChange4(val)}
                />
                {data.check_textInputChange4 ? 
                <Feather
                name="check-circle"
                color="#2074A4"
                size={20}
                />
                : 
                <Feather
                name="close"
                color="#FF0000"
                size={20}
                />}
            </View> 

            <Text style={modalStyles.text_footer, {marginTop: 5}}> State </Text>   
            <View style={modalStyles.action}>
                <TextInput
                placeholder="Enter your state"
                style={modalStyles.textInput}
                autoCapitalize="none"
                onChangeText={(val)=>textInputChange5(val)}
                />
                {data.check_textInputChange5 ? 
                <Feather
                name="check-circle"
                color="#2074A4"
                size={20}
                />
                : 
                <Feather
                name="close"
                color="#FF0000"
                size={20}
                />}
            </View> 

            <Text style={modalStyles.text_footer, {marginTop: 5}}> OTP </Text>   
            <View style={modalStyles.action}>
                <TextInput
                placeholder="Enter customer's otp"
                style={modalStyles.textInput}
                autoCapitalize="none"
                onChangeText={(val)=>textInputChange6(val)}
                keyboardType='numeric'
                />
                {data.check_textInputChange6 ? 
                <Feather
                name="check-circle"
                color="#2074A4"
                size={20}
                />
                : 
                <Feather
                name="close"
                color="#FF0000"
                size={20}
                />}
            </View> 

            <View style={modalStyles.button}>
               <LinearGradient
               colors={['#2074A4', '#01ab9d']} 
               style={modalStyles.signIn}
               >
               <TouchableOpacity
                  onPress={()=> submit()}>
                   
                   <Text style={modalStyles.textSign, {
                       color: '#fff'
                   }}>Register</Text>
                   </TouchableOpacity>
               </LinearGradient>
            </View>

            </ScrollView> 
      </View>
    </Modal>
  

    <View style={{
        flexDirection:"row",
        marginTop: 40,
        alignItems: "center",
        paddingHorizontal: 40
    }}>
        <Icon name="menu" size={30} color="#fff" style={{width: 20}} />
        <Icon name="account-circle" size={33} color="#fff" style={{marginLeft: deviceWidth * 0.8}} />
    </View>

    <View style={{paddingHorizontal:40, marginTop:25}}>
        <Text style={{
            fontSize: 40,
            color: "#fff"
        }}> 
            Hello Taiwo!
        </Text>
    
    <View style={{flexDirection: "row", paddingHorizontal: deviceWidth * 0.05}}> 
        <View style={{
            alignItems: "center",
            justifyContent: "center",
            height: deviceHeight * 0.1,
            width: deviceWidth * 0.2,
            borderRadius: deviceHeight  * 0.5,
            backgroundColor: "#fff",
            marginTop: 40
        }}>
               <TouchableOpacity
                 onPress={()=> navigation.navigate('AccountOpening1')}>
            <Image 
            source={require('../assets/images/kyc.png')}
            style={{height:84, width:84}}
            />
            </TouchableOpacity>
        </View>


            <View style={{
            alignItems: "center",
            justifyContent: "center",
            height: deviceHeight * 0.1,
            width: deviceWidth * 0.2,
            borderRadius: deviceHeight  * 0.5,
            backgroundColor: "#fff",
            marginTop: 40,
            marginLeft: deviceWidth * 0.1
        }}>
            <Image 
            source={require('../assets/images/kyc.png')}
            style={{height:84, width:84}}
            />
        </View>


        <View style={{
            alignItems: "center",
            justifyContent: "center",
            height: deviceHeight * 0.1,
            width: deviceWidth * 0.2,
            borderRadius: deviceHeight  * 0.5,
            backgroundColor: "#fff",
            marginTop: 40,
            marginLeft: deviceWidth * 0.1
        }}>
            <Image 
            source={require('../assets/images/kyc.png')}
            style={{height:84, width:84}}
            />
        </View>
        
    </View>

    <View style={{flexDirection: "row", marginTop: deviceHeight * 0.0002, paddingHorizontal: deviceWidth * 0.06}}> 
        <View style={{
            alignItems: "center",
            justifyContent: "center"
        }}>
              <TouchableOpacity
                 onPress={()=> navigation.navigate('AccountOpening1')}>
        <Text style={{
            color: "#fff",
            marginLeft: deviceWidth * 0.008
        }}>
                Account Opening
               </Text>
               </TouchableOpacity></View>


            <View style={{
            alignItems: "center",
            justifyContent: "center",
            marginLeft: deviceWidth * 0.17
        }}>
            <Text style={{
            color: "#fff"
        }}>
                Fund Transfer
            </Text>
        </View>


        <View style={{
            alignItems: "center",
            justifyContent: "center",
            marginLeft: deviceWidth * 0.18
        }}>
            <Text style={{
            color: "#fff"
        }}>
                Bills Payment
            </Text>
        </View>
        
    </View>


    </View>

 
    </ImageBackground>  

    )
}


export default Dashboard;

const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#05375a',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'flex-end',
        marginRight: 20
    }
});

const height = Dimensions.get("window").height;
const height_logo = height * 0.28;

const modalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2074A4'
    // backgroundColor: 'rgba(0, 0, 205, 0.1)'
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20
  },
  footer:{
    flex: 3,
    // backgroundColor: '#fff',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 30,
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 250
  },
  action: {
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5,
      flexDirection: 'row'
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderRadius: 10,
    flex: 1,
    paddingLeft: 10,
    borderWidth: 1
  },
  
  text_header: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 40,
      textAlign: 'center'
  },
  text_footer: {
      color: '#05375a',
      fontSize: 15
  },
  logo: {
    width: height_logo,
    height: height_logo,
    marginHorizontal: 12 /2
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop: 30
  },
  button: {
      alignItems: 'center',
      marginTop: 50
  },
  signIn: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10
    },
    textSign: {
        fontSize: 12,
        fontWeight: 'bold'
    }
});