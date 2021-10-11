import React, { useState , useEffect , useContext, useRef  } from 'react';
import { StatusBar, View , BackHandler , Linking} from 'react-native';
import { useNavigation , DrawerActions ,useRoute } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { buttons, styles } from '../styles/Styles';
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home() {

  

  useEffect(() => {
    // if (Platform.OS === 'android') {
    //     StatusBar.setBackgroundColor('rgba(0,0,0,0)');
    //     StatusBar.setTranslucent(true);
    //     StatusBar.setBarStyle('dark-content')
    //     StatusBar.setHidden(false)
    //   }

      // const backAction = () => {
      //   navigation.goBack()
      //   StatusBar.setHidden(false)
      //   return true;
      // };
  
      // const backHandler = BackHandler.addEventListener(
      //   "hardwareBackPress",
      //   backAction
      // );
  
      // return () => backHandler.remove();

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

    return (
      <View style={styles.container}>
          {/* <View style={styles.header}>
             <Ionicons 
                name="menu-outline" 
                size={30} 
                color="black" 
                onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
             /> 
             <Text style={styles.headerText}>Home</Text>
          </View> */}
          {/* <View style={{alignItems:'baseline',justifyContent:'center',bottom:0}}> */}

          <Animatable.Image delay={500} animation={zoomIn} duration={10000} source={require('../assets/bg.jpg')} style={styles.bg} />  
          
          
          <Animatable.Image delay={500} 
          animation={roadZoomIn} duration={10000} 
          source={require('../assets/road.png')} style={styles.road} />

 {/* <Animatable.Image delay={500} 
          animation={roadZoomIn} duration={10000} 
          source={require('../assets/road2.png')} style={styles.road} /> */}


                {/* <Animatable.Image delay={1000} 
          animation={roadZoomIn} duration={4000} 
          source={require('../assets/grass3.png')} style={styles.grass} />   */}

         <Animatable.Image source={require('../assets/Arch2.png')}
                delay={1000} 
                style={styles.arc} 
                animation={arcZoomIn} duration={10000}
                /> 

  <Animatable.Image source={require('../assets/map2.png')}
                delay={9000} 
                style={styles.map} 
                animation={'bounceIn'} duration={500}
                /> 

          {/* </View> */}
        
          
          {/* <View style={styles.innerContainer}>
            <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Details')}
            />  
          </View> */}
        
      </View>
    );
  }