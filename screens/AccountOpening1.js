import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Modal from 'react-native-modal';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/Feather';
import Feather from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView, StyleSheet, Button, Text, View, Image, Picker, TouchableOpacity, ImageBackground, Dimensions, Platform} from 'react-native';
import Animated from 'react-native-reanimated';
import { getPixelSizeForLayoutSize } from 'react-native/Libraries/Utilities/PixelRatio';
import { TextInput } from 'react-native-gesture-handler';
import { Component } from 'react';


const AccountOpening1  = ({navigation}) => {

    const [banks, setBanks] = React.useState({ bank:  [{"bankCode":"000001","bankName":"Sterling Bank"},{"bankCode":"000002","bankName":"Keystone Bank"},{"bankCode":"000003","bankName":"FCMB"},
    {"bankCode":"000004","bankName":"UBA"},{"bankCode":"000005","bankName":"Diamond/Access"},{"bankCode":"000006","bankName":"Jaiz Bank"},
    {"bankCode":"000007","bankName":"Fidelity Bank"},{"bankCode":"000008","bankName":"Polaris Bank"},{"bankCode":"000009","bankName":"Citi Bank"},
    {"bankCode":"0000010","bankName":"Eco Bank"},{"bankCode":"0000011","bankName":"Unity Bank"},{"bankCode":"0000012","bankName":"Stanbic IBTC"}
    ,{"bankCode":"0000013","bankName":"GT Bank"},{"bankCode":"0000014","bankName":"Access Bank"},{"bankCode":"0000015","bankName":"Zenith Bank"}
    ,{"bankCode":"0000016","bankName":"First Bank"},{"bankCode":"0000017","bankName":"Wema Bank"},{"bankCode":"0000018","bankName":"Union Bank"}
    ,{"bankCode":"0000019","bankName":"Enterprise Bank"},{"bankCode":"0000020","bankName":"Heritage Bank"},{"bankCode":"0000021","bankName":"Standard Chartered"}
    ,{"bankCode":"0000022","bankName":"Suntrust Bank"},{"bankCode":"0000023","bankName":"Providus Bank"}] });

    const [selectedBank, setSelectedBank] = React.useState('');

    const [data, setData] = React.useState({
      email: '',
      phone: '',
      firstname: '',
      lastname: '',
      middlename: '',
      bank: '',
      check_textInputChange: false,
      check_textInputChange2: false,
      check_textInputChange3: false,
      check_textInputChange4: false,
      check_textInputChange5: false,
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

    const textInputChange3 = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                lastname: val,
                check_textInputChange3: true
            });
        }
        else{
            setData({
                ...data,
                lastname: val,
                check_textInputChange3: false
            });
        }
    }

    const textInputChange4 = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                middlename: val,
                check_textInputChange4: true
            });
        }
        else{
            setData({
                ...data,
                middlename: val,
                check_textInputChange4: false
            });
        }
    }

    const textInputChange5 = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                username: val,
                check_textInputChange5: true
            });
        }
        else{
            setData({
                ...data,
                username: val,
                check_textInputChange5: false
            });
        }
    }



    function modal()
    {
       <View>
            <Modal isVisible={true}>
              <View style={{ flex: 1 }}>
                <Text>I am the modal content!</Text>
              </View>
            </Modal>
          </View>
    }

    const textInputChange2 = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                firstname: val,
                check_textInputChange2: true
            });
        }
        else{
            setData({
                ...data,
                firstname: val,
                check_textInputChange2: false
            });
        }
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
        // <View style={styles.container}>
        <ImageBackground
        source={require('../assets/images/bg.jpg')}
        style={{width:"100%", height:"100%"}}>
            <View style={styles.header}>
            <Image
                source={require('../assets/images/PAYSIL.png')}
                style={styles.logo}
                resizeMode="stretch"
                />
            <Text style= {styles.text_header}> Account Opening </Text>    
            </View>            

            <Animatable.View
             animation="fadeInUpBig"
             style={styles.footer}>
            
            <Text style={styles.text_footer}>First Name </Text>   
            <View style={styles.action}>
                <Feather
                name = "user"
                color= "#05375a"
                size={20}
                />
                <TextInput
                placeholder="Enter your first name"
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(val)=>textInputChange2(val)}
                />
                {data.check_textInputChange2 ? 
                <Feather
                name="check-circle"
                color="#2074A4"
                size={20}
                />
                : null}
            </View> 

            <Text style={styles.text_footer}>Last Name </Text>   
            <View style={styles.action}>
                <Feather
                name = "user"
                color= "#05375a"
                size={20}
                />
                <TextInput
                placeholder="Enter your last name"
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(val)=>textInputChange3(val)}
                />
                {data.check_textInputChange3 ? 
                <Feather
                name="check-circle"
                color="#2074A4"
                size={20}
                />
                : null}
            </View>

            <Text style={styles.text_footer}>Middle Name </Text>   
            <View style={styles.action}>
                <Feather
                name = "user"
                color= "#05375a"
                size={20}
                />
                <TextInput
                placeholder="Enter your middle name"
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(val)=>textInputChange4(val)}
                />
                {data.check_textInputChange4 ? 
                <Feather
                name="check-circle"
                color="#2074A4"
                size={20}
                />
                : null}
            </View> 

            <Text style={styles.text_footer}>Email </Text>   
            <View style={styles.action}>
                <FontAwesome
                name = "mail"
                color= "#05375a"
                size={20}
                />
                <TextInput
                placeholder="Enter your email"
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(val)=>textInputChange(val)}
                />
                {data.check_textInputChange ? 
                <Feather
                name="check-circle"
                color="#2074A4"
                size={20}
                />
                : null}
            </View> 

             <Text style={styles.text_footer, {marginTop: 20}}> Phone Number </Text>   
            <View style={styles.action}>
                <Feather
                name = "phone"
                color= "#05375a"
                size={20}
                />
                <TextInput
                placeholder="Enter your phone number"
                style={styles.textInput}
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
                : null}
            </View>  


            <Text style={styles.text_footer, {marginTop: 5}}> Bank </Text>      
            <Picker
            selectedValue={selectedBank}
            onValueChange={(itemValue, itemIndex) => setSelectedBank(itemValue)}
            itemStyle={{
            justifyContent: 'flex-start', 
            borderColor: 'white',
            backgroundColor: 'white'
            }}
            dropDownStyle={{backgroundColor: '#fafafa'}}> 
            {/* {states.map((myValue)=>{ ( <Picker.Item label={myValue.stateName} value={myValue.stateCode} key={myValue.stateCode} />
          )})} */}
           {banks.bank.map((item, itemIndex) => {
        return (<Picker.Item label={item.bankName} value={item.bankCode} key={itemIndex}/>) 
        })}
                {/* {serviceItems} */}
            </Picker>


            <View style={styles.button}>
               <TouchableOpacity
               onPress={()=>navigation.navigate('AccountOpening2', {
                   paramKey: data
               })}
               style={[styles.signIn, {
                   borderColor: '#2074A4',
                   borderWidth: 1,
                   backgroundColor: '#fff',
                   marginTop: 15
               }]}
               >
                   <Text style={[styles.textSign, {
                   color: '#2074A4'
               }]}>Next >>></Text>
               </TouchableOpacity>
            </View> 
            </Animatable.View>        
       
        </ImageBackground>
    );
};

export default AccountOpening1;

  

const height = Dimensions.get("window").height;
const height_logo = height * 0.28;

const styles = StyleSheet.create({
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
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5
  },
  textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a'
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
