import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  ToastAndroid,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const COLOR_ACCENT = '#5f259f';
const COLOR_ACCENT_LIGHT = '#b3dcff';
const COLOR_ACCENT_LIGHT2 = '#168eea';
const COLOR_WHITE = 'white';
const COLOR_BLACK = '#000000';
const COLOR_LIGHT_BLACK = '#7f7f7f';
const COLOR_LIGHT_WHITE = '#B2B2B2';
const COLOR_LIGHT_WHITE1 = '#f2f6fa';

const Home = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#91DCB9',
        alignItems: 'center',
      }}>
      <View style={{alignItems: 'center', padding: 30}}>
        <Text
          style={{
            fontSize: 50,
            fontWeight: 'bold',
            letterSpacing: 5,
            color: '#FFFFFF',
          }}>
          Welcome
        </Text>
      </View>
      <View
        style={{
          padding: 18,
          borderRadius: 20,
          height:'80%',
          width: '90%',
          backgroundColor: '#E9F8F1'
          

        }}>
          <View style={{flexDirection:'row'}}>

        <Text style={{fontSize: 20, color: '#232223', marginBottom: 20}}>
          Welcome TO Home Screen 
        </Text>
        <Text style={{fontSize: 20, color: '#232223', marginBottom: 20,color: 'red',marginLeft:10}}>
        Mr.ABC
        </Text>
          </View>
      </View>
    </View>
  );
};

export default Home;
