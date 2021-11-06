import React, { useState , useEffect , useContext, useRef  } from 'react';
import { StatusBar, View , BackHandler , Dimensions,Text,Image,TouchableOpacity} from 'react-native';
import { useNavigation , DrawerActions ,useRoute } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { buttons, styles } from '../styles/Styles';
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { HealthProvider, HealthContext } from '../context/Context';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
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

import {LevelData} from '../styles/LevelData'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import { AvatarImages } from '../styles/AvatarImages';

import { SwipeablePanel } from 'rn-swipeable-panel';

import Modal from "react-native-modal";

export default function Home() {
  const health = useContext(HealthContext);
  const [loading,setLoading]= useState(true);
  const navigation = useNavigation();

  const BaseUrl = require('../styles/BaseUrl');
  
  const [users, setUsers] = useState([]);
  const [win, setWins] = useState([]);
  const route = useRoute();
  const next = parseInt(health.user.level) + 1
  const [isModalVisible, setModalVisible] = useState(false);

  React.useEffect(() => {
    setTimeout(() => {setLoading(false)}, 1500)

    setTimeout(() => {openPanel()}, 9000)
    getData()
    getWinData()
    getUser()
  },[]);

  const getData = () => {
    var array =[]
    fetch(BaseUrl.BASE_URL+'/api/LeaderBoard/'+route.params.challengId)
    .then((response) => response.json())
    .then((json) => {
    setUsers(json)
    console.log(json)
    })
    .catch((error) => console.error(error))
    .finally(() => {});
 
  }
  const getWinData = () => {
    var array =[]
    fetch(BaseUrl.BASE_URL+'/api/Win/'+route.params.challengId+"/"+next)
    .then((response) => response.json())
    .then((json) => {

    setWins(json)
    console.log(json)
      if(json.win !=0){
        setModalVisible(true)
      }
    })
    .catch((error) => console.error(error))
    .finally(() => {});
 
  }

  
  const getUser = () => {
    var array =[]
    fetch(BaseUrl.BASE_URL+'/api/Login/'+health.user.id)
    .then((response) => response.json())
    .then((json) => {

      health.setUser(json)
    // setWins(json)
    console.log(json)
      // if(json.win !=0){
      //   setModalVisible(true)
      // }
    })
    .catch((error) => console.error(error))
    .finally(() => {});
 
  }

  const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    showCloseButton: false,
    noBackgroundOpacity:true,
    // noBar:true,
    // onClose: () => closePanel(),
    onPressCloseButton: () => closePanel(),
    // ...or any prop you want
  });
  const [isPanelActive, setIsPanelActive] = useState(false);

  const openPanel = () => {
    setIsPanelActive(true);
  };

  const closePanel = () => {
    setIsPanelActive(false);
  };
  
    // const modifier = Math.min(1, Math.max(-1, pivotPoint));

    const zoomIn = {
      0: {
        opacity: 1,
        scale: 1.1,
        translateY:10
      },
      0.75: {
        opacity: 1,
        scale: 1.4,
        
        translateY:0
      },
      0.85: {
        opacity: 1,
        scale: 1.4,
        
        translateY:0
      },
      1: {
        opacity:0.6,
        scale: 1,
        
        translateY:-150
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
        scale: 1,
        translateY:-10
      },
      // 0.5:{
      //   opacity: 1,
      //   scale: 1.75,
      //   translateY:40
      // },
      0.75: {
        opacity: 1,
        scale: 2.2,
        translateY:0
      },
      0.85: {
        opacity: 1,
        scale: 2.2,
        translateY:0
      },
      1: {
        opacity: 0.7,
        scale: 2.2,
        translateY:0
      },
    };

    const roadZoomIn = {
      0: {
        opacity: 1,
        scale: 0.7,
        translateY:20
      },
      // 0.5:{
      //   opacity: 1,
      //   scale: 1.2,
      //   translateY:40
      // },
      0.75: {
        opacity: 1,
        scale: 1,
        translateY:60
      },
      0.85: {
        opacity: 1,
        scale: 1,
        translateY:60
      },
      1: {
        opacity: 0.7,
        scale: 0.6,
        translateY:-280
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
        {/* <View style={[styles.header,{justifyContent:'space-between',backgroundColor:'red',position: 'absolute',zIndex:10,elevation:7,}]}> */}
          <View style={{position: 'absolute',zIndex:10,top:10,left:10}}>
            <TouchableHighlight style={{borderRadius:50}} underlayColor={'rgba(107, 179, 51,0.7)'} onPress={() => navigation.goBack()}>  
             <Ionicons 
                name="arrow-back" 
                size={30} 
                color="black" 
                
             />
            </TouchableHighlight>
            {/* <Text>{route.params.challengId}</Text> */}
            
          </View>
          <View style={{position: 'absolute',zIndex:10,top:10,right:10}}>
            <TouchableHighlight style={{borderRadius:50}} underlayColor={'rgba(107, 179, 51,0.7)'} onPress={() => navigation.goBack()}>  
             {/* <Ionicons 
                name="arrow-back" 
                size={30} 
                color="black" 
                
             /> */}
            </TouchableHighlight>
            <Text style={{backgroundColor:'rgba(255,255,255,0.6)',paddingVertical:2,paddingHorizontal:7,borderRadius:20,fontSize:15}}>Target - {win.target} steps</Text>
            
          </View>
            
             
          {/* </View> */}
        {loading==true ?(
        <View style={{position:'absolute',height:windowHeight,width:windowWidth,zIndex:1,top:0,backgroundColor: 'white',elevation:6,justifyContent:'center',alignItems:'center'}}>
          <View style={{alignSelf:'center',alignItems:'center',justifyContent: 'center',height:120,width:120}}>
            <Image source={require('../assets/logoicon.png')} style={{tintColor:'#000',width:70,height:70}} />
            <DotIndicator color={'#000'} size={7}/>
            </View>
        </View>):
        null}

        
<View style={{flex:1}}>

          <Animatable.Image delay={500} animation={zoomIn} duration={14000} source={require('../assets/bg3.jpg')} style={styles.bg} />  
          
          <Animatable.Image delay={500} 
          animation={roadZoomIn} duration={14000} 
          source={require('../assets/path.png')} style={styles.road} />



         <Animatable.Image source={require('../assets/Arch3.png')}
                delay={1000} 
                style={styles.arc} 
                animation={arcZoomIn} duration={14000}
                /> 
          <Animatable.View delay={6000} animation={'fadeIn'} style={{position:'absolute',zIndex:1,alignSelf:'center',top:20}}>
            <Animatable.Text delay={10000} animation={'fadeOut'} style={{fontSize:45,fontWeight:'bold',marginTop:60}}>Start Walking</Animatable.Text>  
            {
                     LevelData.map((lv)=>
                     lv.id==health.user.level?
                     <Animatable.View delay={11000} animation={'fadeIn'} key={lv.id} style={{marginTop:-115,alignItems:'center'}}>
                        <Animatable.Image delay={11000} animation={'fadeIn'} source={lv.png} style={{width: 160,height:160,resizeMode:'contain',tintColor:'#6bb333',zIndex:2}} />
                        {/* <Image source={lv.png} style={{width: 200,height:200,resizeMode:'contain',tintColor:'rgba(255,255,255,0.7)',position:'absolute',top:-20}} /> */}
                     <View key={lv.id} style={{padding:5,marginLeft:10,backgroundColor:'rgba(255, 255, 255,0.7)',paddingHorizontal:10,marginVertical:5,borderRadius:15}}>
                        <Animatable.Text delay={10000} animation={'fadeIn'} style={{fontSize:17,color:'#000'}}>Walk Around {lv.name}</Animatable.Text>
                     </View>
                     </Animatable.View>
                     :
                     null
                     )
                  }
          </Animatable.View>

          {/* <Animatable.Image delay={7000} animation={manZoomOut} duration={50000} source={require('../assets/back.gif')} style={{width:300,height:300,position:'absolute',zIndex:7,bottom:10,alignSelf:'center',resizeMode:'contain'}} /> */}
  {/* <Animatable.View animation={'slideInUp'} delay={6000} style={[styles.map,{top:50,left:20,alignItems:'center',backgroundColor:'rgba(255, 255, 255,0.8)',borderWidth:2,borderColor:'white',height:400,justifyContent:'space-evenly',borderRadius:10}]}>
        <View style={{alignItems:'center'}}>
          <Image style={{position:'absolute',width:130,height:130,zIndex:9,top:0}} source={require('../assets/avatarbg.png')} />
        {AvatarImages.map((item,index)=>
        health.user.avatar==item.id?
            <Image key ={index} style={{width:100,height:100,borderRadius:120,marginTop:15,}} source={item.png} />
          : 
          null        
        )} 
        <View style={{marginTop:-5,alignItems:'center',zIndex:10}}>
        <Text style={{fontSize:16,color:'black',borderColor:'white',borderWidth:1 ,backgroundColor:'rgba(255, 255, 255,0.6)',paddingHorizontal:5,borderRadius:5}}> Level {health.user.level} </Text>
        <Text style={{fontSize:17,color:'black',marginTop:40}}> {health.user.email} </Text> 

        <TouchableHighlight  underlayColor={'rgba(107, 179, 51,0.7)'} onPress={()=>{navigation.navigate('LevelScreen')}} style={{padding:10,paddingHorizontal:15,borderRadius:25,backgroundColor:'rgba(107, 179, 51,0.5)',marginTop:50,borderWidth:2,borderColor:'rgb(107, 179, 51)'}}>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text style={{color:'black',fontSize:16}}>Challenge with Friends</Text>
                  </View>
               </TouchableHighlight>

        </View> 
        </View>  
        
  </Animatable.View> */}

  

  </View> 
        {/* } */}
        <SwipeablePanel {...panelProps} isActive={isPanelActive} style={{zIndex:3,elevation:20,padding: 20,}}>
                  <Text style={{fontSize:22,fontWeight:'bold',textAlign:'center',marginBottom:15}}>Leaderboard</Text>
                  <View>
                    {
                      users.map((user)=>
                        <View key={user.id} style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',margin:2,padding:10,backgroundColor: 'rgba(107, 179, 51,0.2)',borderRadius:10}}>
                          <View style={{flexDirection:'row',alignItems:'center'}}>
                          {AvatarImages.map((av)=>
                              av.id==user.avatar?
                                  // setImage(av.png)
                                  <Image key={av.id} source={av.png} style={{width:30,height:30,borderRadius:50,marginRight:10}}  />
                                  :
                                  null
                                  // <Image key={av.id} source={av.png} style={{width:25,height:25}}  />
                              
                                                  
                          )}
                          <Text style={{fontSize:17}}>{user.player}</Text>
                          </View>
                          <View style={{backgroundColor: 'white',padding:5,paddingHorizontal:15,borderRadius:15,width:90,flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                            <FontAwesome5 name={'walking'} size={17} color={'#6bb333'}/>
                            <Text style={{fontSize:17,color:'#6bb333',textAlign:'center'}}>{user.steps}</Text>
                          </View>
                        </View>
                      )
                    }
                  </View>
               </SwipeablePanel>
               <Modal isVisible={isModalVisible} style={{zIndex:25,elevation:6,alignItems:'center',justifyContent:'center'}}>
        <View style={{backgroundColor:'white',alignSelf:'center',width:windowWidth-40,alignItems:'center',padding:15,borderRadius:15}}>
          <Text style={{fontSize:25}}>Congradulations</Text>
            {users.map((user,index)=>
            user.member_id==win.win?
            <View key={index} style={{alignItems:'center'}}>
              <Text style={{fontSize:25,fontWeight:'bold'}}>{user.player}</Text>{AvatarImages.map((av)=>
                              av.id==user.avatar?
                                  // setImage(av.png)
                                  <Image key={av.id} source={av.png} style={{width:60,height:60,borderRadius:50,margin:20}}  />
                                  :
                                  null
                                  // <Image key={av.id} source={av.png} style={{width:25,height:25}}  />
                              
                                                  
                          )}
              <Text style={{color:'gray',marginTop:10}}>{user.player} won the Challenge</Text>
            </View>
            :
            null
            )}
          {/* <Button title="Hide modal" onPress={toggleModal} /> */}
          <TouchableOpacity onPress={()=>setModalVisible(false)} style={{backgroundColor:'rgba(107, 179, 51,0.4)',paddingVertical:5,paddingHorizontal:10,borderRadius:10,marginTop:20}}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      </View>
    );
  }