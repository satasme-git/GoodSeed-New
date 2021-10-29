import 'react-native-gesture-handler';
import React, { useEffect, useState ,useContext} from "react";
import { NavigationContainer } from '@react-navigation/native';
import HomeDrawer from './drawer/HomeDrawer'
import { StatusBar } from 'react-native';

import { HealthProvider, HealthContext } from './context/Context';

import SelectStack from './stacks/SelectStack'
import LoginStack from './stacks/LoginStack'

import Eveluation from './screens/Eveluation'

import AsyncStorage from '@react-native-async-storage/async-storage';

// import PushNotificationIOS from "@react-native-community/push-notification-ios";
// import PushNotification from "react-native-push-notification";
import PushNotification, {Importance} from 'react-native-push-notification';

import SplashScreen from 'react-native-splash-screen'

import BackgroundFetch from 'react-native-background-fetch';

import BackgroundTimer from 'react-native-background-timer';

import { startCounter, stopCounter } from 'react-native-accurate-step-counter';
export default function App() {

  const health = useContext(HealthContext);
  
  const [data, setData] = useState([]);
  const [steps, setSteps] = useState(0);
  
  // const BaseUrl = require('./styles/BaseUrl');

  // const getImages =()=>{
      
  //   fetch(BaseUrl.BASE_URL+'/api/imageUpload/'+health.user.id)
  //   .then((response) => response.json())
  //   .then((json) => {
  //      health.setProPic(BaseUrl.BASE_URL+'/assets/profile_pics/'+json[1].image)
  //      // console.log(BaseUrl.BASE_URL+'/assets/profile_pics/'+json[1].image)
  //   })
  //   .catch((error) => console.error(error))
  //   .finally(() => {});

  // }

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user')
      return jsonValue != null ?[ 
      setData(JSON.parse(jsonValue)), 
      // console.log(jsonValue)
    ]
      
      : 
      setData(jsonValue);
    } catch(e) {
      console.log(e)
      // error reading value
    }
  }
  // useEffect(() =>   {
  //   // console.log(health.user)
  //   SplashScreen.hide();
  //   PushNotification.configure({
  //     // (optional) Called when Token is generated (iOS and Android)
  //     onRegister: function (token) {
  //       console.log("TOKEN:", token);
  //     },
    
  //     // (required) Called when a remote is received or opened, or local notification is opened
  //     onNotification: function (notification) {
  //       console.log("NOTIFICATION:", notification);
        
  //       // console.log(notification.id)
  //       // process the notification
    
  //       // (required) Called when a remote is received or opened, or local notification is opened
  //       // notification.finish(PushNotificationIOS.FetchResult.NoData);
  //     },
    
  //     // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
  //     onAction: function (notification) {
  //       console.log("ACTION:", notification.action);
  //       console.log("NOTIFICATION:", notification);
    
  //       // process the action
  //     },
    
  //     // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
  //     onRegistrationError: function(err) {
  //       console.error(err.message, err);
  //     },
    
  //     // IOS ONLY (optional): default: all - Permissions to register.
  //     permissions: {
  //       alert: true,
  //       badge: true,
  //       sound: true,
  //     },
    
  //     // Should the initial notification be popped automatically
  //     // default: true
  //     popInitialNotification: true,
    
  //     /**
  //      * (optional) default: true
  //      * - Specified if permissions (ios) and token (android and ios) will requested or not,
  //      * - if not, you must call PushNotificationsHandler.requestPermissions() later
  //      * - if you are not using remote notification or do not have Firebase installed, use this:
  //      *     requestPermissions: Platform.OS === 'ios'
  //      */
  //     requestPermissions: true,
  //   });
  //   PushNotification.createChannel(
  //     {
  //       channelId: "123", // (required)
  //       channelName: "goodseed", // (required)
  //       channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
  //       playSound: false, // (optional) default: true
  //       soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
  //       importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
  //       vibrate: false, // (optional) default: true. Creates the default vibration patten if true.
  //     },
  //     (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
  //   );
  //   getData()
  // }, [])

  useEffect(() => {
    // SplashScreen.hide();
    // Push notifications setup (recommend extracting into separate file)
  //   PushNotification.configure({
  //     // onNotification is called when a notification is to be emitted
  //     onNotification: notification => console.log(notification),

  //     // Permissions to register for iOS
  //     permissions: {
  //       alert: true,
  //       badge: true,
  //       sound: true,
  //     },
  //     popInitialNotification: true,
  //   });
  //   BackgroundTimer.runBackgroundTimer(() => { 
  //     const config = {
  //       default_threshold: 15.0,
  //       default_delay: 150000000,
  //       cheatInterval: 3000,
  //       onStepCountChange: (stepCount) => {setSteps(stepCount);health.setSteps(stepCount) },
  //       onCheat: () => { }
  //     }
  //     startCounter(config);
  //     },

  //     1000);

  // PushNotification.createChannel(
  //     {
  //       channelId: "123", // (required)
  //       channelName: "goodseed", // (required)
  //       channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
  //       playSound: false, // (optional) default: true
  //       soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
  //       importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
  //       vibrate: false, // (optional) default: true. Creates the default vibration patten if true.
  //     },
  //     (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
  //   );

  //   PushNotification.localNotification({
  //     channelId: '123', // (optional) Valid unique 32 bit integer specified as string. default: Autogenerated Unique ID
  //     title: " Steps", // (optional)
  //     message: `It's ${steps} steps.`, // (required)
  //     playSound: false, // (optional) default: true
  //     soundName: "default",
  //     ongoing:true,
  //     autoCancel:false,
  //     vibrate:false,
  //     // ticker: "My Notification Ticker",
  //     // data: {steps}
      
  //   })
   
// getImages()

  }, []);



  return (
    <HealthProvider>
      {/* <NavigationContainer> */}
      <StatusBar backgroundColor={'#6bb333'} barStyle={'light-content'} />
        <HomeDrawer/>
        {/* <SelectStack/> */}
        {/* <LoginStack/> */}
        {/* <Eveluation/> */}
        {/* </NavigationContainer> */}
    </HealthProvider>
  );
}