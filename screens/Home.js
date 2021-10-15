import React, { useState , useEffect , useContext, useRef  } from 'react';
import { StatusBar, View , BackHandler , Dimensions,Text,Image} from 'react-native';
import { useNavigation , DrawerActions ,useRoute } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { buttons, styles } from '../styles/Styles';
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableHighlight } from 'react-native-gesture-handler';

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

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function Home() {

  const [loading,setLoading]= useState(true);

  useEffect(() => {

    setTimeout(() => {setLoading(false)}, 2000)

  }, []);
    const navigation = useNavigation();

    // const modifier = Math.min(1, Math.max(-1, pivotPoint));

    const zoomIn = {
      0: {
        opacity: 1,
        scale: 1,
        translateY:10
      },
      1: {
        opacity: 1,
        scale: 1.3,
        
        translateY:0
      },
    };

    const mapZoomIn = {
      0: {
        opacity: 0.6,
        scale: 1,
      },
      1: {
        opacity: 1,
        scale: 2.3,
        
      },
    };

    const arcZoomIn = {
      0: {
        opacity: 1,
        scale: 1.2,
        translateY:-10
      },
      // 0.5:{
      //   opacity: 1,
      //   scale: 1.75,
      //   translateY:40
      // },
      1: {
        opacity: 1,
        scale: 2.5,
        translateY:0
      },
    };

    const roadZoomIn = {
      0: {
        opacity: 1,
        scale: 1,
        translateY:-10
      },
      // 0.5:{
      //   opacity: 1,
      //   scale: 1.2,
      //   translateY:40
      // },
      1: {
        opacity: 1,
        scale: 1.5,
        translateY:0
      },
    };
    const manZoomOut = {
      0: {
        opacity: 1,
        scale: 1,
        translateY:0
      },
      0.5:{
        opacity: 1,
        scale: 0.5,
        translateY:-500
      },
      1: {
        opacity: 1,
        scale: 0,
        translateY:-1000
      },
    };
    return (
      <View style={styles.container}>
        <View style={[styles.header,{justifyContent:'space-between',backgroundColor:'transparent',position: 'absolute',zIndex:10,elevation:7}]}>
            <TouchableHighlight style={{borderRadius:50}} underlayColor={'rgba(107, 179, 51,0.7)'} onPress={() => navigation.goBack()}>  
             <Ionicons 
                name="arrow-back" 
                size={30} 
                color="black" 
                
             />
            </TouchableHighlight>
             
          </View>
        {loading==true ?(
        <View style={{position:'absolute',height:windowHeight,width:windowWidth,zIndex:1,top:0,backgroundColor: 'white',elevation:6,justifyContent:'center',alignItems:'center'}}>
          <View style={{alignSelf:'center',alignItems:'center',justifyContent: 'center',height:120,width:120}}>
            <Image source={require('../assets/logoicon.png')} style={{tintColor:'#000',width:70,height:70}} />
            <DotIndicator color={'#000'} size={7}/>
            </View>
        </View>):
        null
        }

          <Animatable.Image delay={500} animation={zoomIn} duration={10000} source={require('../assets/bg3.jpg')} style={styles.bg} />  
          
          <Animatable.Image delay={500} 
          animation={roadZoomIn} duration={10000} 
          source={require('../assets/road.png')} style={styles.road} />



         <Animatable.Image source={require('../assets/Arch2.png')}
                delay={1000} 
                style={styles.arc} 
                animation={arcZoomIn} duration={10000}
                /> 
          {/* <Animatable.Image delay={7000} animation={manZoomOut} duration={50000} source={require('../assets/back.gif')} style={{width:300,height:300,position:'absolute',zIndex:7,bottom:10,alignSelf:'center',resizeMode:'contain'}} /> */}
  {/* <Animatable.Image source={require('../assets/map3.png')}
                delay={9000} 
                style={styles.map} 
                animation={'bounceIn'} duration={500}
                />  */}
        
      </View>
    );
  }