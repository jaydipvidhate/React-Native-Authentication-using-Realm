/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import CreateAccount from './components/CreateAccount';
import LoginScreen from './components/LoginScreen';
import CreatAccount from './components/CreateAccount';
import Home from './components/Home';

const Stack = createStackNavigator();

const App=() => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      headerMode={false}>
        <Stack.Screen name="CreateAccount" component={CreatAccount}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen}/>
        <Stack.Screen name="Home" component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
