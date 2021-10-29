import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';
import { useNavigation , DrawerActions ,useRoute } from '@react-navigation/native';

export default function LoadingScreen () {

    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {navigation.navigate('Home')}, 2000)
    });

    return (
        <View style={{alignSelf:'center',alignItems:'center',justifyContent: 'center',height:120,width:120}}>
            <Image source={require('../assets/logoicon.png')} style={{tintColor:'#000',width:70,height:70}} />
            <DotIndicator color={'#000'} size={7}/>
        </View>
    );
    
}
