import React, { useState , useEffect , useContext, useRef  } from 'react';
import { StatusBar, View , BackHandler , Dimensions,Text,Image,ImageBackground, ScrollView} from 'react-native';
import { useNavigation , DrawerActions ,useRoute } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { buttons, styles } from '../styles/Styles';
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableHighlight,  TouchableOpacity} from 'react-native-gesture-handler';
import { HealthProvider, HealthContext } from '../context/Context';
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

import LinearGradient from 'react-native-linear-gradient';


export default function LevelScreen (){

    const navigation = useNavigation();
    
    const arcZoomIn = {
      0: {
        opacity: 1,
        scale: 1,
        translateY:0,
        translateX:0
      },
      // 0.5:{
      //   opacity: 1,
      //   scale: 1.75,
      //   translateY:40
      // },
      1: {
        opacity: 1,
        scale: 2,
        translateY:-140,
        translateX:35
      },
    };
    return (
        <View style={styles.container} onLayout={()=>console.log(windowHeight+""+windowWidth)}>
            <StatusBar backgroundColor={'#9AEBE2'} barStyle={'dark-content'} />
        <View style={[styles.header,{justifyContent:'space-between',backgroundColor:'transparent',position: 'absolute',zIndex:10,elevation:7}]}>
            <TouchableHighlight style={{borderRadius:50}} underlayColor={'rgba(107, 179, 51,0.7)'} onPress={() => navigation.goBack()}>  
             <Ionicons 
                name="arrow-back" 
                size={30} 
                color="black" 
                
             />
            </TouchableHighlight>
             
          </View>
          
          <Animatable.Image delay={1500} easing="ease-out" duration={4500} animation={'fadeOutLeftBig'} source={require('../assets/cloud1.png')} style={{width:250,height:200,position: 'absolute',top:0,zIndex:50,resizeMode:'contain',left:-50}} />
          <Animatable.Image delay={1500} easing="ease-out" duration={4500} animation={'fadeOutRightBig'} source={require('../assets/cloud2.png')} style={{width:250,height:200,position: 'absolute',top:80,zIndex:50,resizeMode:'contain',left:80}} />
          <Animatable.Image delay={1500} easing="ease-out" duration={4500} animation={'fadeOutRightBig'} source={require('../assets/cloud3.png')} style={{width:300,height:200,position: 'absolute',top:150,zIndex:50,resizeMode:'contain',left:180}} />
          <Animatable.Image delay={1500} easing="ease-out" duration={4500} animation={'fadeOutLeftBig'} source={require('../assets/cloud4.png')} style={{width:250,height:200,position: 'absolute',top:200,zIndex:50,resizeMode:'contain',left: -50,}} />
          <Animatable.Image delay={1500} easing="ease-out" duration={4500} animation={'fadeOutRightBig'} source={require('../assets/cloud5.png')} style={{width:300,height:200,position: 'absolute',top:350,zIndex:50,resizeMode:'contain',left:150}} />

          <ScrollView style={{flex:1}} contentContainerStyle={{flex:1}}>
          <LinearGradient colors={['#9AEBE2', '#7DE6E0',]}  style={{width: windowWidth,height:windowHeight,position:'absolute',top:0,zIndex: 1}}>
                
                <Animatable.View delay={1500} duration={2900} 
                animation={arcZoomIn}
                >
                <ImageBackground source={require('../assets/map4.png')} style={[styles.map,{top:0}]}>
                  
                  <TouchableOpacity style={{marginTop:147,marginLeft:65,alignSelf:'flex-start'}} onPress={()=>navigation.navigate('Challenge')}>
                    <View style={{flexDirection:'row',alignItems:'flex-start'}}>
                      
                    <ImageBackground source={require('../assets/level.png')} style={styles.levelIcon} imageStyle={{resizeMode:'contain'}}>
                    {/* <Image source={require('../assets/complete.png')} style={{width:14,height:14,position:'absolute',top:3}} /> */}
                      <Text style={{fontSize:11,fontWeight:'bold'}}>1</Text>
                    </ImageBackground>  
                    

                      <View style={{marginLeft:1,backgroundColor: 'rgba(255,255,255,0.6)',paddingHorizontal:5,borderRadius:5,borderWidth:0.7,borderColor:'#693910',paddingVertical:1}}>
                        <Text style={{fontSize:5}}>Kingdom of Tambapanni</Text>
                      </View>  
                    </View>            
                  </TouchableOpacity>

                  <TouchableOpacity style={{marginTop:27,marginLeft:113,alignSelf:'flex-start'}}>
                  <View style={{flexDirection:'row',alignItems:'flex-start'}}>
                    <ImageBackground source={require('../assets/level.png')} style={styles.levelIcon}  imageStyle={{resizeMode:'contain'}}>
                      <Text style={{fontSize:11,fontWeight:'bold'}}>2</Text>
                    </ImageBackground> 

                    <View style={{marginLeft:1,backgroundColor: 'rgba(255,255,255,0.6)',paddingHorizontal:5,borderRadius:5,borderWidth:0.7,borderColor:'#693910',paddingVertical:1}}>
                        <Text style={{fontSize:5}}>Anuradhapura Kingdom</Text>
                      </View>

                    </View>               
                  </TouchableOpacity>

                  <TouchableOpacity style={{marginTop:30,marginLeft:121}}>
                  <View style={{flexDirection:'row',alignItems:'flex-start'}}>
                  <View style={{marginLeft:2,backgroundColor: 'rgba(255,255,255,0.6)',paddingHorizontal:3,borderRadius:5,borderWidth:0.7,borderColor:'#693910',paddingVertical:1}}>
                        <Text style={{fontSize:5}}>Kingdom of Polonnaruwa</Text>
                      </View>
                    <ImageBackground source={require('../assets/level.png')} style={styles.levelIcon}  imageStyle={{resizeMode:'contain'}}>
                      <Text style={{fontSize:11,fontWeight:'bold'}}>3</Text>
                    </ImageBackground>   

                                 
                     </View>  
                  </TouchableOpacity>

                  
                  <TouchableOpacity style={{marginTop:0,marginLeft:100,alignSelf:'flex-start'}}>
                  <View style={{flexDirection:'row',alignItems:'flex-start'}}>
                    <ImageBackground source={require('../assets/level.png')} style={styles.levelIcon}  imageStyle={{resizeMode:'contain'}}>
                      <Text style={{fontSize:11,fontWeight:'bold'}}>5</Text>
                    </ImageBackground>    
                    <View style={{marginLeft:1,backgroundColor: 'rgba(255,255,255,0.6)',paddingHorizontal:5,borderRadius:5,borderWidth:0.7,borderColor:'#693910',paddingVertical:1}}>
                        <Text style={{fontSize:5}}>Kingdom of Yapahuwa</Text>
                      </View> 
                      </View>            
                  </TouchableOpacity>

                  
                  <TouchableOpacity style={{marginTop:20,marginLeft:108,alignSelf:'flex-start'}}>
                  <View style={{flexDirection:'row',alignItems:'flex-start'}}>
                    <ImageBackground source={require('../assets/level.png')} style={styles.levelIcon}  imageStyle={{resizeMode:'contain'}}>
                      <Text style={{fontSize:11,fontWeight:'bold'}}>6</Text>
                    </ImageBackground> 
                    <View style={{marginLeft:1,backgroundColor: 'rgba(255,255,255,0.6)',paddingHorizontal:5,borderRadius:5,borderWidth:0.7,borderColor:'#693910',paddingVertical:1}}>
                        <Text style={{fontSize:5}}>Kingdom of Kurunegala</Text>
                      </View> 
                    </View>               
                  </TouchableOpacity>

                  
                  <TouchableOpacity style={{marginTop:-2,marginLeft:88,alignSelf:'flex-start'}}>
                  <View style={{flexDirection:'row',alignItems:'flex-start'}}>
                    <ImageBackground source={require('../assets/level.png')} style={styles.levelIcon}  imageStyle={{resizeMode:'contain'}}>
                      <Text style={{fontSize:11,fontWeight:'bold'}}>4</Text>
                    </ImageBackground> 
                    <View style={{marginLeft:1,backgroundColor: 'rgba(255,255,255,0.6)',paddingHorizontal:5,borderRadius:5,borderWidth:0.7,borderColor:'#693910',paddingVertical:1}}>
                        <Text style={{fontSize:5}}>Kingdom of Dambadeniya</Text>
                      </View> 
                    </View>               
                  </TouchableOpacity>

                  <TouchableOpacity style={{marginTop:-2,marginLeft:142,alignSelf:'flex-start'}}>
                  <View style={{flexDirection:'row',alignItems:'flex-start'}}>
                    <ImageBackground source={require('../assets/level.png')} style={styles.levelIcon}  imageStyle={{resizeMode:'contain'}}>
                      <Text style={{fontSize:11,fontWeight:'bold'}}>10</Text>
                    </ImageBackground> 
                    <View style={{marginLeft:1,backgroundColor: 'rgba(255,255,255,0.6)',paddingHorizontal:5,borderRadius:5,borderWidth:0.7,borderColor:'#693910',paddingVertical:1}}>
                        <Text style={{fontSize:5}}>Kingdom of Kandy</Text>
                      </View> 
                    </View>               
                  </TouchableOpacity>

                  
                  <TouchableOpacity style={{marginTop:-2,marginLeft:130,alignSelf:'flex-start'}}>
                  <View style={{flexDirection:'row',alignItems:'flex-start'}}>
                    <ImageBackground source={require('../assets/level.png')} style={styles.levelIcon}  imageStyle={{resizeMode:'contain'}}>
                      <Text style={{fontSize:11,fontWeight:'bold'}}>7</Text>
                    </ImageBackground>  
                    <View style={{marginLeft:1,backgroundColor: 'rgba(255,255,255,0.6)',paddingHorizontal:5,borderRadius:5,borderWidth:0.7,borderColor:'#693910',paddingVertical:1}}>
                        <Text style={{fontSize:5}}>Kingdom of Gampola</Text>
                      </View> 
                    </View>              
                  </TouchableOpacity>

                  <TouchableOpacity style={{marginTop:0,marginLeft:92,alignSelf:'flex-start'}}>
                  <View style={{flexDirection:'row',alignItems:'flex-start'}}>
                    <ImageBackground source={require('../assets/level.png')} style={styles.levelIcon}  imageStyle={{resizeMode:'contain'}}>
                      <Text style={{fontSize:11,fontWeight:'bold'}}>9</Text>
                    </ImageBackground>
                    <View style={{marginLeft:1,backgroundColor: 'rgba(255,255,255,0.6)',paddingHorizontal:5,borderRadius:5,borderWidth:0.7,borderColor:'#693910',paddingVertical:1}}>
                        <Text style={{fontSize:5}}>Kingdom of Sitawaka</Text>
                      </View> 
                    </View>                
                  </TouchableOpacity>

                  <TouchableOpacity style={{marginTop:-2,marginLeft:63,alignSelf:'flex-start'}} onPress={()=>{console.log('pppp')}}>
                  <View style={{flexDirection:'row',alignItems:'flex-start'}}>
                    <ImageBackground source={require('../assets/level.png')} style={styles.levelIcon}  imageStyle={{resizeMode:'contain'}}>
                      <Text style={{fontSize:11,fontWeight:'bold'}}>8</Text>
                    </ImageBackground> 
                    <View style={{marginLeft:1,backgroundColor: 'rgba(255,255,255,0.6)',paddingHorizontal:5,borderRadius:5,borderWidth:0.7,borderColor:'#693910',paddingVertical:1}}>
                        <Text style={{fontSize:5}}>Kingdom of Kotte</Text>
                      </View> 
                    </View>               
                  </TouchableOpacity>

                  {/* <Text style={{position:'absolute',top:160,left:50}}>Level 01</Text> */}
                  {/* <Text style={{position:'absolute',top:200,left:100}}>Level 02</Text> */}
                  {/* <Text style={{position:'absolute',top:160,left:50}}>Level 03</Text>
                  <Text style={{position:'absolute',top:160,left:50}}>Level 04</Text>
                  <Text style={{position:'absolute',top:160,left:50}}>Level 05</Text>
                  <Text style={{position:'absolute',top:160,left:50}}>Level 06</Text>
                  <Text style={{position:'absolute',top:160,left:50}}>Level 07</Text>
                  <Text style={{position:'absolute',top:160,left:50}}>Level 08</Text>
                  <Text style={{position:'absolute',top:160,left:50}}>Level 09</Text>
                  <Text style={{position:'absolute',top:160,left:50}}>Level 10</Text> */}
                </ImageBackground>
                </Animatable.View>
             </LinearGradient>
             </ScrollView>
      </View>
    );
  
}
