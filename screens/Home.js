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
    setTimeout(() => {setLoading(false)}, 1500)

    setTimeout(() => {navigation.navigate('LeaderBoard',{challengId:route.params.challengId})}, 19000)
    // // setTimeout(() => {refRBSheet.current.open()}, 9000)

    // getData()
    // getWinData()
    // getUser()
    
  },[]);

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

      health.setUser(json)
    // setWins(json)
    // console.log(json)
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
  
  const openPanel2 = () => {
    setIsPanelActive2(true);
  };

  const closePanel2 = () => {
    setIsPanelActive2(false);
  };
  
    // const modifier = Math.min(1, Math.max(-1, pivotPoint));

    const zoomIn = {
      0: {
        opacity: 1,
        scale: 1.1,
        translateY:10
      },
      // 0.75: {
      //   opacity: 1,
      //   scale: 1.4,
        
      //   translateY:0
      // },
      1: {
        opacity: 1,
        scale: 1.4,
        
        translateY:0
      },
      // 1: {
      //   opacity:1,
      //   scale: 1,
        
      //   translateY:-(windowHeight/6)
      // },
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


    const arcZoomIn2 = {
      0: {
        opacity: 1,
        scale: 1.2,
        translateY:30
      },
      // 0.5:{
      //   opacity: 1,
      //   scale: 1.75,
      //   translateY:40
      // },
      0.75: {
        opacity: 1,
        scale: 2.5,
        translateY:0
      },
      1: {
        opacity: 1,
        scale: 3,
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
        translateY:50
      },
      1: {
        opacity: 1,
        scale: 1.2,
        translateY:60
      },
      // 1: {
      //   opacity: 1,
      //   scale: 0.6,
      //   translateY:-(windowHeight/3)
      // },
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

    const playSound=()=>{
      var sound3 = new Sound(require('../assets/sound/drum5.mp3'),
      (error, sound) => {
        if (error) {
          // alert('error' + error.message);
          return;
        }
        sound3.play(() => {
          // sound3.setVolume(1)
          sound3.release();
        });

        
        setTimeout(() => {sound3.setVolume(0)}, 18000)

        // if (this.state.checked2==true){
        //   sound3.setVolume(0);
        // }
        // else if(this.state.checked2==false){
        //   sound3.setVolume(0.1);
        // }
      });
    }
    // const bottomSheetRef = useRef(null);

    // variables
    // const snapPoints = useMemo(() => ['25%', '50%'], []);
  
    // callbacks
    // const handleSheetChanges = useCallback((index: number) => {
    //   console.log('handleSheetChanges', index);
    // }, []);

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


          {/* <View style={{position: 'absolute',zIndex:10,top:10,right:10}}>
            <TouchableHighlight style={{borderRadius:50}} underlayColor={'rgba(107, 179, 51,0.7)'} onPress={() => navigation.goBack()}>  
             
            </TouchableHighlight>
            <Text style={{backgroundColor:'white',color:'#6bb333',paddingVertical:2,paddingHorizontal:7,borderRadius:20,fontSize:15}}>Target - {win.target} steps</Text>
            
          </View> */}
          
            
             
          {/* </View> */}
        {loading==true ?(
        <View style={{position:'absolute',height:windowHeight,width:windowWidth,zIndex:1,top:0,backgroundColor: 'white',elevation:6,justifyContent:'center',alignItems:'center'}} onLayout={()=>setTimeout(() => {playSound()}, 1000)}>
          <View style={{alignSelf:'center',alignItems:'center',justifyContent: 'center',height:120,width:120}}>
            <Image source={require('../assets/logoicon.png')} style={{tintColor:'#000',width:70,height:70}} />
            <DotIndicator color={'#000'} size={7}/>
            </View>
        </View>):
        null}

        
<View style={{flex:1}}>

          <Animatable.Image delay={500} animation={zoomIn} duration={18000} source={require('../assets/bg3.jpg')} style={styles.bg} />  
          
          <Animatable.Image delay={500} 
          animation={roadZoomIn} duration={18000} 
          source={require('../assets/path.png')} style={styles.road} />



         <Animatable.Image source={require('../assets/Arch6.png')}
                delay={1000} 
                style={styles.arc} 
                animation={arcZoomIn2} duration={18000}
                /> 

          <Animatable.View delay={9000} animation={'fadeIn'} style={{position:'absolute',zIndex:6,alignItems:'center',justifyContent:'center',flex:1,width:windowWidth,height:windowHeight/1.3}}>
          <Animatable.Text delay={12000} animation={'fadeOut'} style={{fontSize:50,fontWeight:'bold',textAlign:'center'}}>Start Walking</Animatable.Text>
          </Animatable.View> 

          <Animatable.View delay={12500} animation={'fadeIn'} style={{position:'absolute',zIndex:6,alignItems:'center',justifyContent:'center',flex:1,width:windowWidth,height:windowHeight}}>
          <Animatable.Text delay={14500} animation={'bounceOut'} style={{fontSize:100,fontWeight:'bold',textAlign:'center',position:'absolute'}}>3</Animatable.Text>
          </Animatable.View> 

          <Animatable.View delay={15000} animation={'fadeIn'} style={{position:'absolute',zIndex:6,alignItems:'center',justifyContent:'center',flex:1,width:windowWidth,height:windowHeight}}>
          <Animatable.Text delay={16500} animation={'bounceOut'} style={{fontSize:100,fontWeight:'bold',textAlign:'center',position:'absolute'}}>2</Animatable.Text>
          </Animatable.View> 

          <Animatable.View delay={17000} animation={'fadeIn'} style={{position:'absolute',zIndex:6,alignItems:'center',justifyContent:'center',flex:1,width:windowWidth,height:windowHeight}}>
          <Animatable.Text delay={18500} animation={'bounceOut'} style={{fontSize:100,fontWeight:'bold',textAlign:'center',position:'absolute'}}>1</Animatable.Text>
          </Animatable.View>  
              
      </View>    
      </View>
    );
  }