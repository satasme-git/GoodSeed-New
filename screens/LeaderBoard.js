import React, { useState , useEffect , useContext, useRef , useMemo } from 'react';
import { StatusBar, View , BackHandler , Dimensions,Text,Image,TouchableOpacity, ScrollView, LogBox } from 'react-native';
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
import LinearGradient from 'react-native-linear-gradient';

import {LevelData} from '../styles/LevelData'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import { AvatarImages } from '../styles/AvatarImages';

import { SwipeablePanel } from 'rn-swipeable-panel';

import Modal from "react-native-modal";

import * as Progress from 'react-native-progress';

import Sound from 'react-native-sound';
// import BottomSheet from 'react-native-simple-bottom-sheet';

// import RBSheet from "react-native-raw-bottom-sheet";

// import BottomSheet from '@gorhom/bottom-sheet';

LogBox.ignoreLogs(['Animated.event now requires a second argument for options']);

export default function Home() {
  const health = useContext(HealthContext);
  const [loading,setLoading]= useState(true);
  const navigation = useNavigation();

  const BaseUrl = require('../styles/BaseUrl');
  
  const [users, setUsers] = useState([]);
  const [win, setWins] = useState([]);
  const [target, setTarget] = useState(0);
  const route = useRoute();

  var next;

  const [isModalVisible, setModalVisible] = useState(false);

  const panelRef = useRef(null);
  
  const refRBSheet = useRef();

  const getUserData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user')
      return jsonValue != null ?[ 
      next = parseInt(JSON.parse(jsonValue).level)+1, 
      // getSteps(JSON.parse(jsonValue).id),


      // console.log('>>>>>>>>>>> Next '+next)
    ]
      
      : 
      next = 2;
    } catch(e) {
      console.log(e)
      // error reading value
    }
  }

  useEffect(() => {
    getUserData()
    // setTimeout(() => {setLoading(false)}, 1500)

    // setTimeout(() => {openPanel()}, 300)
    // setTimeout(() => {refRBSheet.current.open()}, 9000)
    openPanel()
    getData()
    getWinData()
    getUser()
    
  },[users]);

  const getData = () => {
    var array =[]
    fetch(BaseUrl.BASE_URL+'/api/LeaderBoard/'+route.params.challengId)
    .then((response) => response.json())
    .then((json) => {
    setUsers(json)
    // console.log(json)
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
    setTarget(json.target)
    // console.log(json)
      // if(json.win !=0){
      //   setModalVisible(true)
      // }
    })
    .catch((error) => console.error(error))
    .finally(() => {});
 
  }

  
  const getUser = () => {
    var array =[]
    fetch(BaseUrl.BASE_URL+'/api/Login/'+health.user.id)
    .then((response) => response.json())
    .then((json) => {

    //   health.setUser(json)
    })
    .catch((error) => console.error(error))
    .finally(() => {});
 
  }

  const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    showCloseButton: false,
    noBackgroundOpacity:true,
    noBar:true,
    // onClose: () => closePanel(),
    onPressCloseButton: () => closePanel(),
    // ...or any prop you want
  });  
  
  const [panelProps2, setPanelProps2] = useState({
    fullWidth: true,
    showCloseButton: false,
    noBackgroundOpacity:true,
    noBar:true,
    onClose: () => closePanel(),
    onPressCloseButton: () => closePanel(),
    // ...or any prop you want
  });

  const [isPanelActive, setIsPanelActive] = useState(false);

  const [isPanelActive2, setIsPanelActive2] = useState(false);

  const openPanel = () => {
    setIsPanelActive(true);
  };

  const closePanel = () => {
    setIsPanelActive(false);
  };  

    // const modifier = Math.min(1, Math.max(-1, pivotPoint));

   

    return (
      <View style={styles.container}>
        {/* <View style={[styles.header,{justifyContent:'space-between',backgroundColor:'red',position: 'absolute',zIndex:10,elevation:7,}]}> */}
          <View style={{position: 'absolute',zIndex:10,top:10,left:10}}>
            <TouchableHighlight style={{borderRadius:50}} underlayColor={'rgba(107, 179, 51,0.7)'} onPress={() => navigation.navigate('LoadingScreen')}>  
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
            <Text style={{backgroundColor:'white',color:'#6bb333',paddingVertical:2,paddingHorizontal:7,borderRadius:20,fontSize:15}}>Target - {win.target} steps</Text>
            
          </View>
          
            
             
          {/* </View> */}
        

        
<View style={{flex:1}}>

           <Animatable.View animation={'fadeIn'} style={{position:'absolute',zIndex:1,alignSelf:'center',top:15,height:windowHeight/1.85,justifyContent: 'space-between',width:windowWidth}}>
         <Image source={require('../assets/path.png')} style={{width:windowWidth,height:windowHeight/3,position:'absolute',bottom:-50,zIndex:2}} />
         <Image source={require('../assets/bg3.jpg')} style={{width:windowWidth,height:windowHeight/1.2,position:'absolute',top:-20,zIndex:1}} />
            
            <Animatable.View animation={'fadeIn'} style={{flex:1,zIndex:4}}>

            <LinearGradient  
    colors={['transparent', 'rgba(0,0,0,0.4)', 'rgba(0,0,0,0.6)']} 
    style={{alignItems:'center',flex:1,zIndex:4}}>
            
                    {
                        LevelData.map((lv)=>
                        lv.id==health.user.level?
                        // <View style={{marginTop:10,alignItems:'center',backgroundColor:'red'}}>
                            <Image key={lv.id} source={lv.png} style={{width: 180,height:180,resizeMode:'contain',tintColor:'white',zIndex:2}} />
                        
                        // </View>
                        :
                        null
                        )
                    }

                      <Animatable.View animation={'fadeIn'} style={{marginTop:0,flexWrap:'wrap',flexDirection:'row',justifyContent:'center',alignItems:'flex-end'}}>
                        {users.map((user,index)=>
                          index==1?
                          <View key={1}>
                            <Text style={{position: 'absolute',right:10,fontSize:12,top:2,zIndex:5,backgroundColor:'#FB3D5E',width: 15,height:15,textAlign:'center',textAlignVertical:'center',borderRadius:25,color:'#fff',elevation:5}}>2</Text>
                            {AvatarImages.map((av)=>
                              av.id==user.avatar?
                                  <Image key={av.id} source={av.png} style={{width:windowWidth/6,height:windowWidth/6,borderRadius:50,margin:5,borderWidth:3,borderColor:'#FB3D5E'}}  />
                                  :
                                  null                  
                          )}
                          <Text style={{textAlign:'center',color:'white',backgroundColor:'#6bb333',paddingHorizontal:5,paddingVertical:2,borderRadius:10,alignSelf:'center'}}>{user.player.split('@')[0]}</Text>
                          </View>
                          :
                          null
                        )}

{
                          users.length==1?
                          <View>
                          <View style={{width:windowWidth/6,height:windowWidth/6,borderRadius:50,margin:5}}  />
                                  
                          <Text style={{textAlign:'center'}}>   </Text>
                          </View>
                          :
                          null
                        }

                        {users.map((user,index)=>
                          index==0?
                          <View key={0} style={{alignSelf:'center',alignItems:'center',}}>
                            
                            <Text style={{position: 'absolute',right:10,fontSize:14,top:2,zIndex:5,backgroundColor:'#E8B234',width: 20,height:20,textAlign:'center',textAlignVertical:'center',borderRadius:25,color:'#fff',elevation:5}}>1</Text>
                            {AvatarImages.map((av)=>
                              av.id==user.avatar?
                                  // setImage(av.png)
                                  <Image key={av.id} source={av.png} style={{width:windowWidth/4.5,height:windowWidth/4.5,borderRadius:50,margin:5,borderWidth:3,borderColor:'#E8B234'}}  />
                                  :
                                  null
                                  // <Image key={av.id} source={av.png} style={{width:25,height:25}}  />
                              
                                                  
                          )}
                          
                          <Text style={{textAlign:'center',color:'white',backgroundColor:'#6bb333',paddingHorizontal:5,paddingVertical:2,borderRadius:10}}>{user.player.split('@')[0]}</Text>
                          </View>
                          : 
                           
                          null
                        )}

                        {users.map((user,index)=>
                          index==2?
                          <View key={2} style={{alignItems:'center'}}>
                            <Text style={{position: 'absolute',right:10,fontSize:12,top:2,zIndex:5,backgroundColor:'#08B3FB',width: 15,height:15,textAlign:'center',textAlignVertical:'center',borderRadius:25,color:'#fff',elevation:5}}>3</Text>
                            {AvatarImages.map((av)=>
                              av.id==user.avatar?
                                  // setImage(av.png)
                                  <Image key={av.id} source={av.png} style={{width:windowWidth/6,height:windowWidth/6,borderRadius:50,margin:5,borderWidth:3,borderColor:'#08B3FB'}}  />
                                  :
                                  
                                  null
                                  // <Image key={av.id} source={av.png} style={{width:25,height:25}}  />
                              
                                                  
                          )}
                          <Text style={{textAlign:'center',color:'white',backgroundColor:'#6bb333',paddingHorizontal:5,paddingVertical:2,borderRadius:10}}>{user.player.split('@')[0]}</Text>
                          </View>
                          :
                           
                          null
                        )}
                        {
                          users.length<=2?
                          <View>
                          <View style={{width:windowWidth/6,height:windowWidth/6,borderRadius:50,margin:5}}  />
                                  
                          <Text style={{textAlign:'center'}}>   </Text>
                          </View>
                          :
                          null
                        }
                        
                      </Animatable.View>
                  </LinearGradient>
          </Animatable.View>

          </Animatable.View>

  

  </View> 
        
        <SwipeablePanel onClose={()=>{setIsPanelActive(false),setTimeout(() => {setIsPanelActive(true)}, 100)}}  smallPanelHeight={windowHeight/2} {...panelProps} isActive={isPanelActive} style={{zIndex:3,elevation:20,paddingHorizontal: 20,}}>
        {
                     LevelData.map((lv)=>
                     lv.id==health.user.level?
                    
                     <View key={lv.id} style={{padding:5,marginLeft:10,backgroundColor:'rgba(255, 255, 255,0.7)',paddingHorizontal:10,marginVertical:5,borderRadius:15,width:'70%',alignSelf:'center',alignItems:'center'}}>
                        <Animatable.Text animation={'fadeIn'} style={{fontSize:16,color:'#000',textAlign:'center'}}>Walk Around {lv.name}</Animatable.Text>
                     <View style={{height:2,width:'50%',backgroundColor:'#6bb333',borderRadius:5,margin:3}} />
                     </View>
                     :
                     null
                     )
                  }
                  {/* <Text style={{fontSize:22,fontWeight:'bold',textAlign:'center',marginBottom:15}}>Leaderboard</Text> */}
                  <ScrollView>
                    
                    
                    {
                      users.map((user,index)=>
                      <View>
                        <View key={user.id} style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',margin:2,padding:10,width:windowWidth/1.3}}>
                          <View style={{flexDirection:'row',alignItems:'center'}}>
                          <Text style={{fontSize:16}}>{index<10?"0"+(index+1):index+1}  </Text>
                          {AvatarImages.map((av)=>
                              av.id==user.avatar?
                                  // setImage(av.png)
                                  <Image key={av.id} source={av.png} style={{width:30,height:30,borderRadius:50,marginRight:10}}  />
                                  :
                                  null
                                  // <Image key={av.id} source={av.png} style={{width:25,height:25}}  />
                              
                                                  
                          )}
                          <View>
                          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>  
                          <Text style={{fontSize:17}}>{user.player==health.user.email?"Me":user.player.split('@')[0]}</Text>
                          <Text>{user.steps}</Text>
                          </View>
                          <View style={{width:windowWidth/1.6,borderRadius:5,height:6,backgroundColor:'rgba(107, 179, 51,0.3)'}}>
                            <View style={{backgroundColor:'rgb(107, 179, 51)',width:(windowWidth/1.6)*(parseInt(user.steps?user.steps:10)/parseInt(target?target:5)),height:6,borderRadius:5}} />
                          </View>

                          {/* {
                              parseInt(user.steps) >= parseInt(win.target)?
                              <Progress.Bar 
                            progress={1} 
                            width={windowWidth/1.6} 
                            borderRadius={2} 
                            height={6} 
                            unfilledColor={'rgba(107, 179, 51,0.3)'}
                            borderColor={'transparent'}
                            color={'rgb(107, 179, 51)'}
                            borderRadius={5}
                            
                            />
                            :
                            <Progress.Bar 
                            progress={0.5} 
                            width={windowWidth/1.6} 
                            borderRadius={2} 
                            height={6} 
                            unfilledColor={'rgba(107, 179, 51,0.3)'}
                            borderColor={'transparent'}
                            color={'rgb(107, 179, 51)'}
                            borderRadius={5}
                            
                            />
                          } */}
                          

                          </View>
                          </View>
                          {/* <View style={{backgroundColor: 'white',padding:5,paddingHorizontal:15,borderRadius:15,width:90,flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                            <FontAwesome5 name={'walking'} size={17} color={'#6bb333'}/>
                            <Text style={{fontSize:17,color:'#6bb333',textAlign:'center'}}>{user.steps}</Text>
                          </View> */}
                          <FontAwesome5 name={'flag-checkered'} size={15} color={'gray'} style={{paddingLeft:5}}/>
                        </View>
                        <View  style={{backgroundColor:'#c6c6c6',height:0.8,width:'100%'}}  />
                        </View>
                      )
                    }
                  </ScrollView>
               </SwipeablePanel>


               


               <Modal isVisible={isModalVisible} style={{zIndex:25,elevation:6,alignItems:'center',justifyContent:'center'}}>
        <View style={{backgroundColor:'white',alignSelf:'center',width:windowWidth-40,alignItems:'center',padding:15,borderRadius:15}}>
          <Text style={{fontSize:25}}>Congradulations</Text>
            {users.map((user,index)=>
            user.member_id==win.win?
            <View key={index} style={{alignItems:'center'}}>
              <Text style={{fontSize:25,fontWeight:'bold'}}>{user.player.split('@')[0]}</Text>{AvatarImages.map((av)=>
                              av.id==user.avatar?
                                  // setImage(av.png)
                                  <Image key={av.id} source={av.png} style={{width:60,height:60,borderRadius:50,margin:20}}  />
                                  :
                                  null
                                  // <Image key={av.id} source={av.png} style={{width:25,height:25}}  />
                              
                                                  
                          )}
              <Text style={{color:'gray',marginTop:10}}>{user.player==health.user.email?"You":user.player.split('@')[0]} won the Challenge</Text>
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