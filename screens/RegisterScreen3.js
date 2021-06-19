import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Modal from 'react-native-modal';
import CustomDatePicker from '../routes/datePicker';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/Feather';
import Feather from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView, StyleSheet, Button, Text, View, FlatList, ActivityIndicator, Image, TouchableOpacity, ImageBackground, Picker, Dimensions, Platform} from 'react-native';
import Animated from 'react-native-reanimated';
import { getPixelSizeForLayoutSize } from 'react-native/Libraries/Utilities/PixelRatio';
import { TextInput } from 'react-native-gesture-handler';
import { Component } from 'react';


const RegisterScreen3  = ({navigation, route}) => {

    const [isLoading, setLoading] = React.useState(true);
    
    const [states, setStates] = React.useState({
        st: null,
        red: [],
         });

    const [lgas, setLgas] = React.useState({
            st: null,
            red: [
                {"lgaCode":"1","lgaName":"Gwagwalada"},{"lgaCode":"2","lgaName":"Kuje"},{"lgaCode":"3","lgaName":"Abaji"},
                    {"lgaCode":"4","lgaName":"Abuja Municipal"},{"lgaCode":"5","lgaName":"Bwari"},{"lgaCode":"6","lgaName":"Kwali"}]
             });

    const [business, setBusiness] = React.useState({
                st: null,
                red: [
                    {"businessCode":"0","businessName":"Pharmacy"},{"businessCode":"1","businessName":"Gas station"},{"businessCode":"2","businessName":"Saloon"},
                        {"businessCode":"3","businessName":"Grocery Stores"},{"businessCode":"5","businessName":"Supermarkets"},{"businessCode":"5","businessName":"Mobile network outlet"},
                        {"businessCode":"6","businessName":"Restaurants"}, {"businessCode":"7","businessName":"Hotels"}, {"businessCode":"8","businessName":"Cyber Cafe"},
                        {"businessCode":"9","businessName":"Post office"}, {"businessCode":"10","businessName":"Others"}]
            });

    const [state, setState] = React.useState('');

    const [lga, setLga] = React.useState('');

    const [biz, setBiz] = React.useState('');

    const [data, setData] = React.useState({
        email: route.params.paramKey2.email,
        firstname: route.params.paramKey2.firstname,
        lastname: route.params.paramKey2.lastname,
        middlename: route.params.paramKey2.middlename,
        username: route.params.paramKey2.username,
        password: route.params.paramKey2.password,
        dob: route.params.paramKey2.dob,
        phone: route.params.paramKey2.phone,
        phone2: route.params.paramKey2.phone2,
        address: route.params.paramKey2.address,
        transactionpin: route.params.paramKey2.transactionpin,
        gender: route.params.paramKey2.gender,
        businessName: '',
        businessAddress: '',
        closesetLandmark: '',
        agentState: '',
        agentLga: '',
        agentBusiness: '',
        bvn: '',
        tin: '',
      check_textInputChange: false,
      secureTextEntry: true,
      secureTextEntry2: true,
      secureTextEntry3: true
    });
    React.useEffect(()  => 

    {
    var url = "http://192.168.43.238:8080/PaySil/RestfulApi/getStates";
         fetch(url)
            .then(res => res.json())
            .then((json) => {
                // setStates(JSON.stringify(json))})
                setStates({
                    st: [JSON.stringify(json)],
                    red: [{"stateCode":"1","stateName":"Federal Capital Territory"},{"stateCode":"2","stateName":"Abia"},{"stateCode":"3","stateName":"Adamawa"},
                    {"stateCode":"4","stateName":"Akwa Ibom"},{"stateCode":"5","stateName":"Anambra"},{"stateCode":"6","stateName":"Bauchi"},
                    {"stateCode":"7","stateName":"Bayelsa"},{"stateCode":"8","stateName":"Benue"},{"stateCode":"9","stateName":"Bornu"},
                    {"stateCode":"10","stateName":"Cross River"},{"stateCode":"11","stateName":"Delta"},{"stateCode":"12","stateName":"Ebonyi"},
                    {"stateCode":"13","stateName":"Edo"},{"stateCode":"14","stateName":"Ekiti"},{"stateCode":"15","stateName":"Enugu"},{"stateCode":"16","stateName":"Gombe"},{
                        "stateCode":"17","stateName":"Imo"},{"stateCode":"18","stateName":"Jigawa"},{"stateCode":"19","stateName":"Kaduna"},{"stateCode":"20","stateName":"Kano"},
                        {"stateCode":"21","stateName":"Katsina"},{"stateCode":"22","stateName":"Kebbi"},{"stateCode":"23","stateName":"Kogi"},{"stateCode":"24","stateName":"Kwara"},
                        {"stateCode":"25","stateName":"Lagos"},{"stateCode":"26","stateName":"Nasarawa"},{"stateCode":"27","stateName":"Niger"},{"stateCode":"28","stateName":"Ogun"},
                        {"stateCode":"29","stateName":"Ondo"},{"stateCode":"30","stateName":"Osun"},{"stateCode":"31","stateName":"Oyo"},{"stateCode":"32","stateName":"Plateau"},
                        {"stateCode":"33","stateName":"Rivers"},{"stateCode":"34","stateName":"Sokoto"},{"stateCode":"35","stateName":"Taraba"},{"stateCode":"36","stateName":"Yobe"},
                        {"stateCode":"37","stateName":"Zamfara"}]
                })})
            .catch(err => console.log('Error: ', err))
            .finally(() => setLoading(false));

    }, []);
    
    {isLoading ? <ActivityIndicator/> : (
       console.log("states are: "+states.st)
     )}

    const textInputChange = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                businessName: val,
                check_textInputChange: true
            });
        }
        else{
            setData({
                ...data,
                businessName: val,
                check_textInputChange: false
            });
        }
    }

    const setSelectedLga = (val) => {
        setData({
            ...data,
            agentLga: val
        });
        console.log(val);
}

const setSelectedBiz = (val) => {
    setData({
        ...data,
        agentBusiness: val
    });
    console.log(val);
}

    const textInputChange2 = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                businessAddress: val,
                check_textInputChange2: true
            });
        }
        else{
            setData({
                ...data,
                businessAddress: val,
                check_textInputChange2: false
            });
        }
    }


    const textInputChange3 = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                closesetLandmark: val,
                check_textInputChange3: true
            });
        }
        else{
            setData({
                ...data,
                closesetLandmark: val,
                check_textInputChange3: false
            });
        }
    }

    const dateChange = (val) => {
            setData({
                ...data,
                dob: val
            });
    }
   

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
        setDate  (currentDate);
      };

    const submit = ()  =>
    {
        let _data = {
            business: data.agentBusiness, 
            bvn:      data.bvn,
            businessAddress: data.businessAddress,
            businessName: data.businessName,
            landmark: data.closesetLandmark,
            dob: data.dob,
            emailAddress: data.email,
            firstName: data.firstname,
            gender: data.gender,
            lastName: data.lastname,
            localGovernmentCode: data.agentLga,
            middleName: data.middlename,
            password: data.password,
            phonenumber: data.phone,
            phonenumber2: data.phone2,
            taxIdentificationNumber: data.tin,
            transactionPin: data.transactionpin,
            username: data.username,
            agentAddress: data.address
          }
          

          console.log("data to send: "+JSON.stringify(_data));
           

         var url = "http://192.168.43.238:8080/PaySil/RestfulApi/createNewAgent";
         fetch(url, {
             method: "POST",
             body: JSON.stringify(_data),
             headers: {
                "Content-Type": "application/json; charset=UTF-8"}
            })
            .then(res => res.json())
            .then((json) => {  
                if(json.responseCode == '00'){
                    alert('Registration Successful! Please Login...');
                    navigation.navigate('Login');
                }
                else if(json.responseCode == '21'){
                    alert('User Already Exist!');
                }
                 else if(json.responseCode == '01'){
                    alert('Error Saving User!');
                }
                else if(json.responseCode == '96'){
                    alert('An unexpected error occured!');
                }})
            .catch(err => console.log('Error: ', err));
        
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
                bvn: val,
                check_numberInputChange: true
            });
        }
        else{
            setData({
                ...data,
                bvn: val,
                check_numberInputChange: false
            });
        }
    }

    const numberInputChange2 = (val) =>{
        if (val.length === 11) {
            setData({
                ...data,
                tin: val,
                check_numberInputChange2: true
            });
        }
        else{
            setData({
                ...data,
                tin: val,
                check_numberInputChange2: false
            });
        }
    }

    const numberInputChange3 = (val) =>{
        if (val.length === 4) {
            setData({
                ...data,
                phone2: val,
                check_numberInputChange3: true
            });
        }
        else{
            setData({
                ...data,
                phone2: val,
                check_numberInputChange3: false
            });
        }
    }

    // let serviceItems = states.map( (s, i) => {
    //     return <Picker.Item key={i} value={s} label={s} />
    // });

    
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
            <Text style= {styles.text_header}> Register! </Text>    
            </View>            

            <Animatable.View
             animation="fadeInUpBig"
             style={styles.footer}>


            <Text style={styles.text_footer}>Business Name </Text>   
            <View style={styles.action}>
            <Feather
                name = "map"
                color= "#05375a"
                size={20}
                />
              <TextInput
                placeholder="Enter your business name"
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


            <Text style={styles.text_footer}>Business Address </Text>   
            <View style={styles.action}>
            <Feather
                name = "home"
                color= "#05375a"
                size={20}
                />
              <TextInput
                placeholder="Enter your business address"
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


            <Text style={styles.text_footer, {marginTop: 5}}>Closest Landmark </Text>   
            <View style={styles.action}>
            <Feather
                name = "bank"
                color= "#05375a"
                size={20}
                />
              <TextInput
                placeholder="Enter closest landmark to your address"
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


            <Text style={styles.text_footer, {marginTop: 5}}> State </Text>  
         {isLoading ? <ActivityIndicator/> : (      
            <Picker
            selectedValue={state}
            onValueChange={(itemValue, itemIndex) => setState(itemValue)}
            itemStyle={{
            justifyContent: 'flex-start', 
            borderColor: 'white',
            backgroundColor: 'white'
            }}
            dropDownStyle={{backgroundColor: '#fafafa'}}> 
            {/* {states.map((myValue)=>{ ( <Picker.Item label={myValue.stateName} value={myValue.stateCode} key={myValue.stateCode} />
          )})} */}
           {states.red.map((item, itemIndex) => {
        return (<Picker.Item label={item.stateName} value={item.stateCode} key={itemIndex}/>) 
    })}
                {/* {serviceItems} */}
            </Picker> )}

            <Text style={styles.text_footer}> LGA </Text>  
         {isLoading ? <ActivityIndicator/> : (      
            <Picker
            selectedValue={data.agentLga}
            onValueChange={(itemValue, itemIndex) => setSelectedLga(itemValue)}
            itemStyle={{
            justifyContent: 'flex-start', 
            borderColor: 'white',
            backgroundColor: 'white'
            }}
            dropDownStyle={{backgroundColor: '#fafafa'}}> 
            {/* {states.map((myValue)=>{ ( <Picker.Item label={myValue.stateName} value={myValue.stateCode} key={myValue.stateCode} />
          )})} */}
           {lgas.red.map((item, itemIndex) => {
        return (<Picker.Item label={item.lgaName} value={item.lgaCode} key={itemIndex}/>) 
    })}
                {/* {serviceItems} */}
            </Picker> )}


            <Text style={styles.text_footer}> Business Type </Text>  
         {isLoading ? <ActivityIndicator/> : (      
            <Picker
            selectedValue={data.agentBusiness}
            onValueChange={(itemValue, itemIndex) => setSelectedBiz(itemValue)}
            itemStyle={{
            justifyContent: 'flex-start', 
            borderColor: 'white',
            backgroundColor: 'white'
            }}
            dropDownStyle={{backgroundColor: '#fafafa'}}> 
            {/* {states.map((myValue)=>{ ( <Picker.Item label={myValue.stateName} value={myValue.stateCode} key={myValue.stateCode} />
          )})} */}
           {business.red.map((item, itemIndex) => {
        return (<Picker.Item label={item.businessName} value={item.businessCode} key={itemIndex}/>) 
    })}
                {/* {serviceItems} */}
            </Picker> )}

        

        

            <Text style={styles.text_footer}>BVN </Text>   
            <View style={styles.action}>
                <Feather
                name = "lock"
                color= "#05375a"
                size={20}
                />
                <TextInput
                placeholder="Enter phone line 1"
                style={styles.textInput}
                autoCapitalize="none"
                keyboardType='numeric'
                maxLength={11}
                onChangeText={(val)=>numberInputChange(val)}
                />
                {data.check_numberInputChange ? 
                <Feather
                name="check-circle"
                color="#2074A4"
                size={20}
                />
                : null}
            </View> 

            <Text style={styles.text_footer}>TIN </Text>   
            <View style={styles.action}>
                <FontAwesome
                name = "lock"
                color= "#05375a"
                size={20}
                />
                <TextInput
                placeholder="Enter line 2"
                style={styles.textInput}
                autoCapitalize="none"
                keyboardType='numeric'
                maxLength={11}
                onChangeText={(val)=>numberInputChange2(val)}
                />
                {data.check_numberInputChange2 ? 
                <Feather
                name="check-circle"
                color="#2074A4"
                size={20}
                />
                : null}
            </View> 
            

            <View style={styles.button}>

               <TouchableOpacity
               onPress={()=> submit()}
               style={[styles.signIn, {
                   borderColor: '#2074A4',
                   borderWidth: 1,
                   backgroundColor: '#fff',
                   marginTop: 15
               }]}
               >
                   <Text style={[styles.textSign, {
                   color: '#2074A4'
               }]}>Save</Text>
               </TouchableOpacity>
            </View> 
            </Animatable.View>        
       
        </ImageBackground>
    );
};
export default RegisterScreen3;

  

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
      marginTop: 30
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
