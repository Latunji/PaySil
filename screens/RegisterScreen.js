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
import { SafeAreaView, StyleSheet, Button, Text, View, Image, TouchableOpacity, ScrollView, ImageBackground, Dimensions, Platform} from 'react-native';
import Animated from 'react-native-reanimated';
import { getPixelSizeForLayoutSize } from 'react-native/Libraries/Utilities/PixelRatio';
import { TextInput } from 'react-native-gesture-handler';
import { Component } from 'react';


const RegisterScreen  = ({navigation}) => { 

    const [data, setData] = React.useState({
      email: '',
      password: '',
      firstname: '',
      lastname: '',
      middlename: '',
      username: '',
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

    function modal() {
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

    const submit = ()  => { 
        if(data.email == "" || 
            data.password == "" || 
            data.firstname == "" || 
            data.lastname == "" || 
            data.middlename == "" || 
            data.username == "" ){
                alert('All feilds are required');
                return false
        }
        navigation.navigate('RegisterScreen2', {  paramKey: data })
    }

    return(
        // <View style={styles.container}>
        <View style={styles.container}>
            <View style={styles.header}>
            <Image
                source={require('../assets/images/PAYSIL.png')}
                style={styles.logo}
                resizeMode="contain"
                />
            <Text style= {styles.text_header}> Register! </Text>    
            </View>            

            <Animatable.View
                animation="fadeInUpBig"
                style={styles.footer}> 
                <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false} > 
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

                    <Text style={styles.text_footer}>Username </Text>   
                    <View style={styles.action}>
                        <Feather
                            name = "user"
                            color= "#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Enter your username"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val)=>textInputChange5(val)}
                        />
                        {data.check_textInputChange5 ? 
                        <Feather
                            name="check-circle"
                            color="#2074A4"
                            size={20}
                        />
                        : null}
                    </View> 
 
                    <Text style={styles.text_footer}>Password </Text>   
                    <View style={styles.action}>
                        <Feather
                            name = "lock"
                            color= "#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Enter your password"
                            secureTextEntry={data.secureTextEntry ? true : false}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => handlePasswordChange(val)}
                        />
                        <TouchableOpacity onPress={updateSecureTextEntry}>
                            {data.secureTextEntry ?
                                <FontAwesome
                                    name = "eye-off"
                                    color= "grey"
                                    size={20}
                                />
                                :
                                <FontAwesome
                                    name = "eye"
                                    color= "grey"
                                    size={20}
                                />
                            }
                        </TouchableOpacity>
                    </View>

                    <View style={styles.button}> 
                        <TouchableOpacity
                                onPress={()=> submit()}
                                style={[styles.signIn, {
                                    borderColor: '#2074A4',
                                    borderWidth: .5,
                                    backgroundColor: '#fff',
                                    marginTop: 15
                                }]}
                                >
                            <Text style={[styles.textSign, { color: '#2074A4' } ]}>Continue</Text>
                        </TouchableOpacity>
                    </View> 
                </ScrollView>
            </Animatable.View>  
        </View>
    );
};

export default RegisterScreen;

  

const { width, height} = Dimensions.get("window");
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
