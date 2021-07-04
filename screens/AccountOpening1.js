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
 
    const [data, setData] = React.useState({
        bankCode: '',
        bankVerificationNumber: '',
        firstName: '',
        middleName: '',
        lastName: '',
        gender: '',
        dob: '',
        houseNumber: '',
        streetName: '',
        city: '',
        lgaCode: '',
        emailAddress: '',
        phoneNumber: '',
        customerImage: '',
        customerSignature: '',
        accountOpeningBalance: 0,
        secureTextEntry: true
    });  

    const submit = () => {
        if(data.firstName == "" || 
            data.middleName == "" || 
            data.lastName == "" || 
            data.emailAddress == "" || 
            data.phoneNumber == "" || 
            data.bankCode == "" ){
                alert('All feilds are required');
                return false
        }
        navigation.navigate('AccountOpening2', {
            paramKey: data
        }) 
    }

    return(
        // <View style={styles.container}>
        <View  style={styles.container}>
            <View style={styles.header}>
            <Image
                source={require('../assets/images/PAYSIL.png')}
                style={styles.logo}
                resizeMode="contain"
                />
            <Text style= {styles.text_header}> Account Opening </Text>    
            </View>            

            <Animatable.View animation="fadeInUpBig" style={styles.footer}>            
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
                        value={data.firstName}
                        onChangeText={(val)=> setData({ ...data, firstName : val })}
                    /> 
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
                        value={data.lastName}
                        onChangeText={(val)=> setData({ ...data, lastName : val })}
                    /> 
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
                        value={data.middleName}
                        onChangeText={(val)=> setData({ ...data, middleName : val })}
                    /> 
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
                        value={data.emailAddress}
                        onChangeText={(val)=> setData({ ...data, emailAddress : val })}
                    /> 
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
                        keyboardType='numeric'
                        maxLength={11}
                        value={data.phoneNumber}
                        onChangeText={(val)=> setData({ ...data, phoneNumber : val })}
                    /> 
                </View>  


                <Text style={styles.text_footer, {marginTop: 5}}> Bank </Text>      
                <Picker
                        selectedValue={data.bankCode} 
                        onValueChange={(itemValue, itemIndex) => setData({ ...data, bankCode : itemValue })}
                        itemStyle={{
                            justifyContent: 'flex-start', 
                            borderColor: 'white',
                            backgroundColor: 'white'
                        }}
                        dropDownStyle={{backgroundColor: '#fafafa'}}
                    >  
                    {
                        banks.bank.map((item, itemIndex) => {
                            return (<Picker.Item label={item.bankName} value={item.bankCode} key={itemIndex}/>) 
                        })
                    } 
                </Picker>

                <View style={styles.button}>
                    <TouchableOpacity
                            onPress={()=> submit() }
                            style={[styles.signIn, {
                                borderColor: '#2074A4',
                                borderWidth: 1,
                                backgroundColor: '#fff',
                                marginTop: 15
                            }]}
                        >
                        <Text style={[styles.textSign, { color: '#2074A4' }]}>Continue</Text>
                    </TouchableOpacity>
                </View> 
            </Animatable.View>  
        </View>
    );
};

export default AccountOpening1;  

const height = Dimensions.get("window").height;
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, .1)'
        // backgroundColor: 'rgba(52, 52, 52, 0.3)'
    },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20
  },
  footer:{
    flex: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    width: '100%',
    alignSelf: 'center',
    padding: 25,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    // paddingVertical: 40,
    // marginLeft: 10,
    // marginRight: 10,
    // marginBottom: 150,
    // paddingHorizontal: 30
  },
  action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(0,0,0,0.3)',
      paddingBottom: 5,
      marginVertical: 10,
  },
  textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
      
  }, 
  text_header: {
        color: '#2074A4',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        top: 10
  },
  text_footer: {
      color: '#05375a',
      fontSize: 15
  },
  logo: {
    width: 80,
    height: 100,
    // marginHorizontal: 12 /2
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
        fontSize: 15,
        fontWeight: 'bold'
    }
});
