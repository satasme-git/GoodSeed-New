import React, { useState , useEffect , useContext, useRef  } from 'react';
import { Dimensions, View , StatusBar,Image,FlatList,TouchableOpacity,Text, ScrollView,Linking} from 'react-native';
import { useNavigation , DrawerActions } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { buttons, styles } from '../styles/Styles';

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

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function Details() {
  
  const health = useContext(HealthContext);

  const sleep = (time) => new Promise((resolve) => setTimeout(() => resolve(), time));

  const taskRandom = async (taskData) => {
    if (Platform.OS === 'ios') {
        console.warn(
            'This task will not keep your app alive in the background by itself, use other library like react-native-track-player that use audio,',
            'geolocalization, etc. to keep your app alive in the background while you excute the JS from this library.'
        );
    }
    await new Promise(async (resolve) => {
        // For loop with a delay
        const { delay } = taskData;
        console.log(BackgroundJob.isRunning(), delay)
        for (let i = 0; BackgroundJob.isRunning(); i++) {
            // console.log('Runned -> ', i);
            
            const config = {
              default_threshold: 15.0,
              default_delay: 150000000,
              cheatInterval: 3000,
              onStepCountChange: (stepCount) => {task(stepCount) },
              onCheat: () => { console.log("User is Cheating")}
            }
            startCounter(config);
            
            const task = async (step)=>{
              await BackgroundJob.updateNotification({ taskTitle: step +' Steps',progressBar:{max:6000,value:step},taskDesc:step+'/6000'})
              health.setSteps(step)
            }
            
            await sleep(delay);
        }
    });
    };

    const options = {
        taskName: 'Example',
        taskTitle: 'Step Forward',
        taskDesc:'0/6000',
        taskIcon: {
            name: 'ic_launcher',
            type: 'mipmap',
        },
        color: '#6bb333',
        linkingURI: 'exampleScheme://chat/jane',
        parameters: {
            delay: 1000,
        },
        progressBar:{
          max:6000,
          value:0,
        }
    };

    function handleOpenURL(evt) {
        console.log(evt.url);
        // do something with the url
    }

    Linking.addEventListener('url', handleOpenURL);

    BackgroundJob.on('expiration', () => {
        console.log('iOS: I am being closed!');
    });

    const playing = BackgroundJob.isRunning();
    /**
     * Toggles the background task
     */
    const toggleBackground = async () => {
        var play = !playing;
        // if (play) {
            try {
                console.log('Trying to start background service');
                await BackgroundJob.start(taskRandom, options);
                console.log('Successful start!');
                // await BackgroundJob.stop();
            } catch (e) {
                console.log('Error', e);
            }
        // } 
        // else {
        //     console.log('Stop background service');
        //     await BackgroundJob.stop();
        // }
    };

    useEffect(() => {
      toggleBackground()
    }, []);

    const navigation = useNavigation();
    const renderItem = ({ item }) => (
      <TouchableOpacity style={{backgroundColor:item.color,margin:10,paddingVertical:10,paddingHorizontal:20,borderRadius:10}} onPress={()=>{navigation.navigate(item.screen)}}>
        <Text style={{color:item.fontColor,fontSize:20}}>{item.title}</Text>
      </TouchableOpacity>
    );

    return (
      <View style={styles.container}>
        <Background>
        <View style={[styles.header,{backgroundColor: 'transparent',}]}>
             <Ionicons 
                name="menu-outline" 
                size={30} 
                color="black" 
                onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
             /> 
          </View>
        <ScrollView contentContainerStyle={{alignItems:'center'}}>
          
          
          <View animation="pulse" easing="ease-out" iterationCount="infinite" style={styles.heart} >
          <Image source={require('../assets/heart1.png')} style={styles.heart} />
          
          <MaskedView
        // style={{marginTop:}}
        maskElement={
          <View
            style={{
              backgroundColor: 'transparent',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Image source={require('../assets/heartBg1.png')} style={styles.heartBg} />
          </View>
        }
      >
          <View style={[styles.fill,{backgroundColor:'red',marginTop:0}]} />
          <View style={[styles.fill,{backgroundColor:'#3b1568'}]} />
          <View style={[styles.fill,{backgroundColor:'#f5ac4e'}]} />
          <View style={[styles.fill,{backgroundColor:'#dd4224'}]} />
          <View style={[styles.fill,{backgroundColor:'#bb280f'}]} />
          <View style={[styles.fill,{backgroundColor:'#940700'}]} />
        
      </MaskedView>
          {/* <Image source={require('../assets/heartBg1.png')} style={styles.heartBg} /> */}

          {/* <Image source={require('../assets/heartBg1.png')} style={styles.heartBg} /> */}
          </View>

          
      <View style={styles.stepCounterView}>
          <TouchableOpacity  
            style={{backgroundColor:'white',margin:5,marginLeft:0,paddingVertical:0,paddingHorizontal:0,borderRadius:5,width:(windowWidth/2.2),padding:10,justifyContent:'space-between',alignSelf:'flex-start'}} 
            onPress={()=>{}}>
              <Text style={{color:'#222b31',padding:10,fontSize:16,width:(windowWidth/2.2)}}>Steps : {health.steps}</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity  
            style={{backgroundColor:'white',margin:5,marginLeft:0,paddingVertical:0,paddingHorizontal:0,borderRadius:5,width:(windowWidth/2.2),padding:10,justifyContent:'space-between',alignSelf:'flex-start'}} 
            onPress={()=>{}}>
              <Text style={{color:'#222b31',padding:10,fontSize:16,width:(windowWidth/2.2)}}>Steps : </Text>
          </TouchableOpacity> */}
      </View>

{/* </View> */}
{/* <View style={{backgroundColor:'white',width:windowWidth-10,height:170,left:15,borderRadius:5,marginBottom:10,position: 'absolute',top:50}} /> */}
      <View style={{marginTop:225,flexDirection:'row',width:windowWidth,flexWrap:'wrap',alignItems:'center',justifyContent:'center'}}>
        {/* <FlatList
          data={Habbits}
          renderItem={renderItem}
          horizontal={false}
          keyExtractor={item => item.id}
          contentContainerStyle={{alignItems:'center'}}
          
        /> */}

        {Habbits.map((item)=>
            <TouchableOpacity key={item.id} 
            style={{backgroundColor:'white',margin:5,paddingVertical:0,paddingHorizontal:0,borderRadius:5,height:item.height,justifyContent:'space-between',alignSelf:'flex-start'}} 
            onPress={()=>{navigation.navigate(item.screen)}}>
              <Text style={{color:'#222b31',paddingHorizontal:5,fontSize:16,width:(windowWidth/2.2),marginTop:5}}>{item.title}</Text>
              <Image source={item.png} style={{width:50,height:50,tintColor:item.color,alignSelf:'flex-end',marginBottom:0,resizeMode:'contain'}} />
            </TouchableOpacity>
        )}
      </View>

     
      </ScrollView>

        </Background>
        
      </View>
    );
  }