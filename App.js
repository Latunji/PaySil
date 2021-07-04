import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import HomeScreen from './screens/HomeScreen';
import SplashScreen from './screens/SplashScreen';
import SplashScreen2 from './screens/SplashScreen2';
import SplashScreen3 from './screens/SplashScreen3';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import RegisterScreen2 from './screens/RegisterScreen2';
import RegisterScreen3 from './screens/RegisterScreen3';
import AccountOpening1 from './screens/AccountOpening1';
import AccountOpening2 from './screens/AccountOpening2';
import AccountOpening3 from './screens/AccountOpening3';
import Dashboard from './screens/Dashboard';
import AllRegistredMember from './screens/AllRegistredMember';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}  options={{headerShown: false}}/>
        <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Splash2" component={SplashScreen2} options={{headerShown: false}}/>
        <Stack.Screen name="Splash3" component={SplashScreen3} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown: false}}/> 
        <Stack.Screen name="AllRegistredMember" component={AllRegistredMember} options={{headerShown: false}}/>         
        <Stack.Screen name="RegisterScreen2" component={RegisterScreen2} options={{headerShown: false}}/>
        <Stack.Screen name="RegisterScreen3" component={RegisterScreen3} options={{headerShown: false}}/>
        <Stack.Screen name="AccountOpening1" component={AccountOpening1} options={{headerShown: false}}/>
        <Stack.Screen name="AccountOpening2" component={AccountOpening2} options={{headerShown: false}}/>
        <Stack.Screen name="AccountOpening3" component={AccountOpening3} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


