import React, { useState , useEffect , useContext, useRef  } from 'react';
import { Dimensions, View , StatusBar,Image,FlatList,TouchableOpacity,Text, ScrollView,Linking} from 'react-native';
import { useNavigation , DrawerActions } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { buttons, styles } from '../styles/Styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const BaseUrl = require('../styles/BaseUrl');

import { Background } from '../styles/Background';

import * as Animatable from 'react-native-animatable';

import { Habbits } from '../styles/Habbits';

import MaskedView from '@react-native-community/masked-view';

import { Neomorph } from 'react-native-neomorph-shadows';

import AsyncStorage from '@react-native-async-storage/async-storage';
import BackgroundJob from 'react-native-background-actions';

import { HealthProvider, HealthContext } from '../context/Context';

import { startCounter, stopCounter } from 'react-native-accurate-step-counter';

import LinearGradient from 'react-native-linear-gradient';
import BackgroundTimer from 'react-native-background-timer';

import { AvatarImages } from '../styles/AvatarImages';
import moment from 'moment';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function Details() {
  
  const health = useContext(HealthContext);

  const sleep = (time) => new Promise((resolve) => setTimeout(() => resolve(), time));
  
  const [steps, setStep] = useState(0);
  
  const [data, setData] = useState([]);

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('steps', value)
    } catch (e) {
      // saving error
    }
  }
  
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('steps')
      if(value !== null) {
        setStep(parseInt(value))
        console.log(value)
        // value previously stored
      }
    } catch(e) {
      // error reading value
    }
  }

  const storeSteps = async (value) => {
    try {
      const datas = []
      const obj = {"id":health.user.id,"steps":value,"sleep":'07.00'}
      
      datas.push(obj)

      // console.log(datas)
      
      data = datas

      const jsonValue = JSON.stringify(datas)

      await AsyncStorage.setItem('stepStorage', jsonValue)
    } catch (e) {
      // saving error
    }
  }


  const getStepsData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('stepStorage')
      
      return jsonValue != null ? 

      // setData(JSON.parse(jsonValue)) 
      console.log('array is '+JSON.parse(jsonValue))

      :
      null
      ;

    } catch(e) {
      // error reading value
    }
  }
  
  
    const BaseUrl = require('../styles/BaseUrl');

    const getImages =()=>{
      
      fetch(BaseUrl.BASE_URL+'/api/imageUpload/'+health.user.id)
      .then((response) => response.json())
      .then((json) => {
         health.setProPic(BaseUrl.BASE_URL+'/assets/profile_pics/'+json[1].image)
         // console.log(BaseUrl.BASE_URL+'/assets/profile_pics/'+json[1].image)
      })
      .catch((error) => console.error(error))
      .finally(() => {});

    }
    const getSleptData =()=>{
      
      fetch(BaseUrl.BASE_URL+'/api/sleepData/'+health.user.id)
      .then((response) => response.json())
      .then((json) => {
        

        const current = moment().format('YYYY-MM-DD')

        if (json!='no Item Found'){
          const added2 = moment(json.date).format('YYYY-MM-DD')
          if(added2==current){
            health.setSleep(json.duration + ' Hours')
          }
          else{
            health.setSleep('Add Sleep Time')
          }
          

        }
       })
      .catch((error) => console.error(error))
      .finally(() => {});

    }
    const setSteps = (steps) => {
      const formData = new FormData()
  
      formData.append('member_id', health.user.id);
      formData.append('steps', steps);
  
      
      fetch(BaseUrl.BASE_URL+'/api/steps/', {
        method: 'POST',
        body: formData,
      })
        .then(response => response.json())
        .then(data => {
          // navigation.navigate('profile')
          console.log('Success:', data);
          setStep(parseInt(data.steps))
          // Message('Nice','#6bb333','You Created Challenge Successfully','Start Walking','');
        })
        .catch(error => {
          console.log('Error:', formData);
        });
  
    };

    
    useEffect(() => {
      getData()
      getImages()
      getSleptData()
      getStepsData()
      // toggleBackground()
      const config = {
        default_threshold: 15.0,
        default_delay: 150000000,
        cheatInterval: 3000,
        onStepCountChange: (stepCount) => {backgroundtimer(steps+stepCount) },
        onCheat: () => { }
      }
      startCounter(config);
    // }
      
    const backgroundtimer = (step) =>{
      // console.log(steps)
      health.setSteps(step)
      storeData(step.toString())
      setSteps(step)
      // storeSteps(step.toString())
      
    }
    },[]);

    const navigation = useNavigation();
    const renderItem = ({ item }) => (
      <TouchableOpacity style={{backgroundColor:item.color,margin:10,paddingVertical:10,paddingHorizontal:20,borderRadius:10}} onPress={()=>{navigation.navigate(item.screen)}}>
        <Text style={{color:item.fontColor,fontSize:20}}>{item.title}</Text>
      </TouchableOpacity>
    );

    return (
      <View style={[styles.container,{backgroundColor:'white'}]}>
        <StatusBar backgroundColor={'#6bb333'} barStyle={'light-content'} />
          <View style={[styles.header,{backgroundColor: 'transparent',justifyContent:'space-between',}]}>
             <Ionicons 
                name="menu-outline" 
                size={30} 
                color="white" 
                onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
             /> 
             
             {
          health.propic!=null?
          <TouchableOpacity 
                style={[buttons.profileBitton,{marginRight:10,backgroundColor:'rgba(255,255,255,0.5)'}]} 
                onPress={()=>{navigation.navigate('Profile')}}>
                <View >
                <Image style={buttons.profileBitton} source={{uri:health.propic}}  />
                </View>
              </TouchableOpacity>

          
          :
          <View onLayout={()=>getImages()}>
          </View>
          
          
        }
          </View>
          {/* <Background> */}
          <ScrollView>
          <View style={{alignItems:'center'}}>
            <LinearGradient 
              colors={['#6bb333','#6bb333', '#438e05']} 
              style={[styles.heartBg]}>

        
              
          
              <MaskedView
                maskElement={
                  <View
                    style={{
                      backgroundColor: 'transparent',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                    }}
                  >
                    <Image source={require('../assets/heartNewFill.png')} style={styles.heart2} />
                  </View>
                }>
                <View style={[styles.heartempty]} >
                <Image source={require('../assets/heartNew.png')} style={[styles.heart,{tintColor:'white'}]} />
                  <Image source={require('../assets/watering2.gif')} style={{height:20,width:'100%',tintColor:'#6bb333'}}/>
                  <View style={{backgroundColor:'#6bb333',height:30,width:'100%'}} />
                </View>
              </MaskedView>

              <View style={{width:'60%',justifyContent:'space-around',alignItems:'center',paddingLeft:0,flexDirection:'row',backgroundColor:'white',paddingVertical:2,borderRadius:10}}>
                <TouchableOpacity style={buttons.homebuttons}>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                    <FontAwesome5 name={'walking'} size={20} color={'#6bb333'}/>
                  <Text style={{fontSize:17,color:'#6bb333'}}>  {health.steps}</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={buttons.homebuttons}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <MaterialCommunityIcons name={'power-sleep'} size={20}  color={'#6bb333'}/>
                  <Text style={{fontSize:17,color:'#6bb333'}}> {health.sleep} </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </LinearGradient>

            <View style={{marginTop:-40,zIndex:5,width:windowWidth,justifyContent:'center',borderTopLeftRadius:40,borderTopRightRadius:40,backgroundColor:'white',padding:10,paddingTop:15}}>
              {Habbits.map((item)=>
                  <TouchableOpacity key={item.id} 
                  style={{backgroundColor:'#6bb333',marginHorizontal:5,marginVertical:5,borderRadius:15,width:windowWidth-30,justifyContent:'space-between',alignSelf:'flex-start',alignItems:'center',flexDirection:'row',padding:12}} 
                  onPress={()=>{navigation.navigate(item.screen)}}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                  <Image source={item.png} style={{width:40,height:40,tintColor:'white',margin:5,resizeMode:'contain'}} />
                    <View style={{width:'70%'}}>
                    <Text style={{color:'white',paddingHorizontal:5,fontSize:17}}>{item.title}</Text>
                    <Text style={{color:'white',paddingHorizontal:5,fontSize:10}}>{item.desc}</Text>
                    </View>
                    </View>
                    <Ionicons 
                name="chevron-forward-circle" 
                size={30} 
                color="white" 
             /> 
                  </TouchableOpacity>
              )}
            </View>

     
          </View>
</ScrollView>
        {/* </Background> */}
        
      </View>
    );
  }