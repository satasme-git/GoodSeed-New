import React, { useState , useEffect , useRef } from 'react';
import { Image, View , Text, BackHandler, Dimensions} from 'react-native';
import { useNavigation , DrawerActions } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { buttons, styles } from '../styles/Styles';

import { WebView } from 'react-native-webview';
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
export default function Meditation() {

   const navigation = useNavigation();
   const WEBVIEW_REF = useRef();
    
   const [visible, setVisible] = useState(true);

   const hideSpinner=()=> {
      setVisible(false)
   }

   const showSpinner=()=> {
      setVisible(true)
   }
    const handleBackButton = ()=>{
      WEBVIEW_REF.current.goBack();
      // setFavorite(false);
      return true;
   }

   useEffect(function() {
      BackHandler.addEventListener('hardwareBackPress', handleBackButton);
  
      return function cleanup() {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
      }
    }, []);

    return (
      <View style={styles.container}>
          <View style={[styles.header,{zIndex:3}]}>
          <Ionicons 
                name="arrow-back" 
                size={30} 
                color="black" 
                onPress={() => navigation.goBack()}
             />
             <Text style={{color:'#000',fontSize:22,marginLeft:10}}>Meditation</Text>
          </View>
          
          <View style={styles.innerContainer}>
               <WebView 
               source={{ uri: 'https://seed.rn-innovations.com/category/meditation/' }} 
               style={{marginTop:-200}}
               ref={WEBVIEW_REF}
               onLoadStart={() => (showSpinner())}
               onLoadEnd={() => hideSpinner()}
               />

          </View>
        {visible && (
        <View style={{position:'absolute',height:windowHeight,width:windowWidth,zIndex:1,top:0,backgroundColor: 'white',elevation:6,justifyContent:'center',alignItems:'center'}}>
        <View style={{alignSelf:'center',alignItems:'center',justifyContent: 'center',height:120,width:120}}>
          <Image source={require('../assets/logoicon.png')} style={{tintColor:'#000',width:70,height:70}} />
          <DotIndicator color={'#000'} size={7}/>
          </View>
      </View>
      )}
      </View>
    );
  }