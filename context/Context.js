import React, { createContext, useState , useEffect , useRef } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { GoogleSignin , GoogleSigninButton , statusCodes, } from '@react-native-google-signin/google-signin';

import BackgroundJob from 'react-native-background-actions';
import { startCounter, stopCounter } from 'react-native-accurate-step-counter';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Platform,
  Linking,
  AppState,
  Dimensions
} from 'react-native';
// import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification from "react-native-push-notification";


export const HealthContext = createContext();

import moment from 'moment';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const HealthProvider = ({ children }) => {

  const [user, setUser] = useState([]);
  const [userSteps, setUserSteps] = useState([]);
  const [state, setState] = useState("home");
  const [complete, setComplete] = useState(0);
  const [userFull, setUserFull] = useState([]);
  const [steps, setSteps] = useState(0);
  const [sleep, setSleep] = useState('');
  const [userType, setUserType] = useState('');
  const [name, setName] = useState('');
  const [glasses, setGlasses] = useState(0);
  const [id, setId] = useState(0);
  
  const [propic, setProPic] = useState(null);
  const [percentage, setPercentage] = useState(0);
  const [height, setHeight] = useState(0);
  const [loading, setLoading] = useState(true);
  const [requests, setRequests] = useState([]);

  const BaseUrl = require('../styles/BaseUrl');

  const [bmi, setBmi] = useState('');
  const [bmilevel, setBmilevel] = useState('');
  const [token, setToken] = useState('');
  
  const [color, setColor] = useState('black');
  const [color2, setColor2] = useState('#fff');
  const [games, setGames] = useState([]);

  const getData = async () => {
    setLoading(true)
    try {
      const jsonValue = await AsyncStorage.getItem('user')
      return jsonValue != null ?[ 
      setUser(JSON.parse(jsonValue)), 
      // getSteps(JSON.parse(jsonValue).id),


      console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> context users = '+jsonValue)]
      
      : 
      console.log(jsonValue);
    } catch(e) {
      console.log(e)
      // error reading value
    }
  }
  const getAsyncSteps = async () => {
    try {
      const value = await AsyncStorage.getItem('steps')
      if(value !== null) {
        setSteps(parseInt(value))
        console.log(value)
        // value previously stored
      }
    } catch(e) {
      // error reading value
    }
  }
  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('steps', value)
    } catch (e) {
      // saving error
    }
  }
  const setStepCount = async (steps,ids) => {

    const jsonValue = await AsyncStorage.getItem('user')

    const formData = new FormData()

    formData.append('member_id', ids);
    formData.append('steps', steps);

    
    // console.log('id = '+ids)
    
    fetch(BaseUrl.BASE_URL+'/api/steps/', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => { 
        console.log(data)
      })
      .catch(error => { });
    

  };
  const getElimination =()=>{

    fetch(BaseUrl.BASE_URL+'/api/Elimination/'+user.id)
    .then((response) => response.json())
    .then((json) => {
       // health.setProPic(BaseUrl.BASE_URL+'/assets/profile_pics/'+json[1].image)
       console.log(json)
       setGlasses(parseInt(json.glasses))
       // console.log(BaseUrl.BASE_URL+'/assets/profile_pics/'+json[1].image)
    })
    .catch((error) => console.error(error))
    .finally(() => {});

  }

  const getSleptData =()=>{
      
    fetch(BaseUrl.BASE_URL+'/api/sleepData/'+user.id)
    .then((response) => response.json())
    .then((json) => {
      
      console.log(json)
      const current = moment().format('YYYY-MM-DD')

      if (json!='no Item Found'){
        const added2 = moment(json.date).format('YYYY-MM-DD')
        if(added2==current){
          setSleep(json.duration + ' Hours')
        }
        else{
          setSleep('0 Hours')
        }
        

      }
      else{
        setSleep('0 Hours')
      }
     })
    .catch((error) => console.error(error))
    .finally(() => {});

  }
  // const getName =()=>{
      
  //   fetch(BaseUrl.BASE_URL+'/api/ContactDetails/'+user.member_id)
  //   .then((response) => response.json())
  //   .then((json) => {
  //      console.log(json.name)
  //       setName(json.name)
  //   })
  //   .catch((error) => console.error(error))
  //   .finally(() => {});
  
  // }

  const getName =async()=>{
    const jsonValue = await AsyncStorage.getItem('user')
  fetch(BaseUrl.BASE_URL+'/api/ContactDetails/'+user.member_id)
  .then((response) => response.json())
  .then((json) => {
     console.log(json.name)
      setName(json.name)
      setId(user.id)
  })
  .catch((error) => console.error(error))
  .finally(() => {});

}


  const getPersentage = () =>{
    var heartHeight = (windowWidth/2.5)-7
    var now =((steps*100)/6000).toFixed(1)
    setPercentage(((steps*100)/6000).toFixed(1))
    // setKey(key+1)

    setHeight((now/100)*heartHeight)
  }

  const getImages = async () => {
    const jsonValue = await AsyncStorage.getItem('user')
    var id;

    if(jsonValue == null) {
      id = user.id
    }
    else{
      id = JSON.parse(jsonValue).id
    }

    fetch(BaseUrl.BASE_URL+'/api/imageUpload/'+id)
    .then((response) => response.json())
    .then((json) => {
      json[1].image==null?
      setProPic(null):
       setProPic(BaseUrl.BASE_URL+'/assets/profile_pics/'+json[1].image)
      //  console.log(json)
    })
    .catch((error) => console.error(error))
    .finally(() => {});

  }

  const getBMI = async ()=>{

    const jsonValue = await AsyncStorage.getItem('user')
    var member_id;

    if(jsonValue == null) {
      member_id = user.member_id
    }
    else{
       console.log(jsonValue)
      member_id = JSON.parse(jsonValue).member_id
    

    fetch(BaseUrl.BASE_URL+'/api/bmi/'+member_id)
    .then((response) => response.json())
    .then((json) => {
       setBmi(parseFloat(json.bmi).toFixed(1))
       // health.setProPic(BaseUrl.BASE_URL+'/assets/profile_pics/'+json[1].image)
       // console.log(BaseUrl.BASE_URL+'/assets/profile_pics/'+json[1].image)
 
       json.bmi < 18.5?(
       setBmilevel('UNDERWEIGHT'),setColor('#26abe4'),setColor2('#5ac9f4'))
       :
       json.bmi < 24.9?(
       setBmilevel('NORMAL'),setColor('#6b7f38'),setColor2('#9eb33a'))
       :
       json.bmi < 29.9?(
       setBmilevel('OVERWEIGHT'),setColor('#eeab2a'),setColor2('#f9c90d'))
       :
       json.bmi < 34.9?(
       setBmilevel('OBESE'),setColor('#e9752c'),setColor2('#f38a2f'))
       :
       (setBmilevel('EXTREMELY OBESE'),setColor('#ec1f26'),setColor2('#f85e63'))
 
       // console.log(json.toF.bmiixed(1)+'0')
    })
    .catch((error) => console.error(error))
    .finally(() => {setLoading(false)});
 
  }}

  const getChallengeData = () => {
    var array =[]
    fetch(BaseUrl.BASE_URL+'/api/challenge/'+user.id)
    .then((response) => response.json())
    .then((json) => {
    setRequests(json)
    console.log('challenges == '+json)
    })
    .catch((error) => console.error(error))
    .finally(() => {});
 
  }

  const getGameData =async (id) => {
    const jsonValue = await AsyncStorage.getItem('user')
    var array =[]
    // setRefreshing(true)
    var member_id;

    if (id !==undefined){
      member_id=id
    }
    else {
      member_id = JSON.parse(jsonValue).id
    }
    fetch(BaseUrl.BASE_URL+'/api/games/'+member_id)
    .then((response) => response.json())
    .then((json) => {
    setGames(json)
    console.log(json)
    })
    .catch((error) => console.error(error))
    .finally(() => {});
  }

  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  
  useEffect(() => {
    setLoading(true)
    getData()
    getImages()
    getElimination()
    getSleptData()
    getName()
    getBMI()
    getChallengeData()
    getGameData()
    // setLoading(false)
    // getSteps()
    // backgroundStart()
    // getStepData()
    // getSteps()

    const subscription = AppState.addEventListener("change", nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === "active"
      ) {
        console.log("App has come to the foreground!");
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      console.log("AppState", appState.current);
    });

    // return () => {
    //   subscription.remove();
    // };
    notificationConfig()

  }, []);
 
  const notificationConfig = (id) =>{
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function (token) {
        console.log("TOKEN:", token.token);
        setToken(token.token);
        UpdateToken(token.token,id);
      },
    
      // (required) Called when a remote is received or opened, or local notification is opened
      onNotification: function (notification) {
        console.log("NOTIFICATION:", notification);
        getChallengeData()
        // process the notification
    
        // (required) Called when a remote is received or opened, or local notification is opened
        // notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
    
      // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
      onAction: function (notification) {
        console.log("ACTION:", notification.action);
        console.log("NOTIFICATION:", notification);
    
        // process the action
      },
    
      // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
      onRegistrationError: function(err) {
        console.error(err.message, err);
      },
    
      // IOS ONLY (optional): default: all - Permissions to register.
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
    
      // Should the initial notification be popped automatically
      // default: true
      popInitialNotification: true,
    
      /**
       * (optional) default: true
       * - Specified if permissions (ios) and token (android and ios) will requested or not,
       * - if not, you must call PushNotificationsHandler.requestPermissions() later
       * - if you are not using remote notification or do not have Firebase installed, use this:
       *     requestPermissions: Platform.OS === 'ios'
       */
      requestPermissions: true,
    });
  }

  const UpdateToken = async (token,id) =>{
    const jsonValue = await AsyncStorage.getItem('user')
    var member_id;

    if (id !==undefined){
      member_id=id
    }
    else {
      // member_id = user.member_id
    
      member_id = JSON.parse(jsonValue).id
    }
      const formData = new FormData()

      formData.append('token', token);
      
      console.log('formData',id)

      fetch(BaseUrl.BASE_URL+'/api/token/'+member_id, {
        method: 'POST',
        body: formData,
      })
        .then(response => response.json())
        .then(data => { 
          console.log('response            +',data)
        })
        .catch(error => {console.log(error) });


  }


  // background actions
  const sleep2 = (time) => new Promise((resolve) => setTimeout(() => resolve(), time));
//  const BaseUrl = require('./styles/BaseUrl');

 BackgroundJob.on('expiration', () => {
     console.log('iOS: I am being closed!');
 });
 

 const taskRandom = async (taskData) => {

  
     if (Platform.OS === 'ios') {
         console.warn(
             'This task will not keep your app alive in the background by itself, use other library like react-native-track-player that use audio,',
             'geolocalization, etc. to keep your app alive in the background while you excute the JS from this library.'
         );
     }
    //  console.log(taskData)



     await new Promise(async (resolve) => {
         // For loop with a delay

         
     const jsonValue = await AsyncStorage.getItem('user')
      
      var ids;
      var step2 =0;
      var step =0;
      // var member =0;

     if(id == 0) {
       ids = JSON.parse(jsonValue).id
     }
     else{
       ids = user.id
     }
     console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>  "+ids+" <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
 
        fetch(BaseUrl.BASE_URL+'/api/steps/'+ids)
         .then((response) => response.json())
         .then((json) => {

           step2 = parseInt(json.steps)
           step = parseInt(json.steps)
          console.log(json)
          setSteps(json.steps)
         })
         .catch((error) => console.error(error))
         .finally(() => {});


         const { delay } = taskData;
         

         const config = {
            default_threshold: 15.0,
            default_delay: 150000000,
            cheatInterval: 3000,
            onStepCountChange: (stepCount) => {
              step=(stepCount+step2) 
              setStepCount(stepCount+step2,ids)
            },
            onCheat: () => { }
          }
          startCounter(config);

         console.log(BackgroundJob.isRunning(), delay)

         for (let i = 0; BackgroundJob.isRunning(); i++) {
     
            //  console.log('Runned -> ', step);
            //  setStepCount(step,ids)
            //  storeData(step.toString())
            //  setSteps(step)
            //  await BackgroundJob.updateNotification({ taskDesc: step+ ' / 6000 Steps' ,progressBar:{max:6000,value:step} });
            //  await sleep2(delay);

            // setStepCount(step,ids)
              storeData(step.toString())
              setSteps(step)
              await BackgroundJob.updateNotification({ taskDesc: step+ ' / 6000 Steps' ,progressBar:{max:6000,value:step} });
              await sleep2(delay);

         }

     });
 };
 
 const options = {
     taskName: 'Example',
     taskTitle: 'Keep Going!',
     taskDesc: 'ExampleTask desc',
     taskIcon: {
         name: 'ic_notification',
         type: 'mipmap',
     },
     color: '#6bb333',
     linkingURI: 'goodseed://screens/Step',
     parameters: {
         delay: 1000,
     },
     progressBar: {
         max: 6000,
         value:0
     },
 };
 
 function handleOpenURL(evt) {
     console.log(evt.url);
    //  Linking.openURL(evt.url)
     // do something with the url
 }
 
 Linking.addEventListener('url', handleOpenURL);

  const backgroundStart = async () => {
    await BackgroundJob.start(taskRandom, options);
  };

  const backgroundStop = async () => {
    await BackgroundJob.stop();
  };


  return (
    <HealthContext.Provider
      value={{
        state,
        setState,
        user,
        setUser,
        complete,
        setComplete,
        userFull,
        setUserFull,
        steps,
        setSteps,
        propic,
        setProPic,
        sleep,
        setSleep,
        userSteps,
        setUserSteps,
        loading,
        setLoading,
        glasses,
        setGlasses,
        userType,
        setUserType,
        name,
        setName,
        id,
        setId,
        height,
        setHeight,
        percentage,
        setPercentage,
        bmi, 
        setBmi,
        bmilevel, 
        setBmilevel,
        color, 
        setColor,
        color2, 
        setColor2,
        requests,
        setRequests,
        token,
        setToken,
        games,
        setGames,

        getPersentage,
        backgroundStart,
        backgroundStop,
        getElimination,
        getSleptData,
        getName,
        getImages,
        getBMI,
        notificationConfig,
        getGameData
      }}
    >
      {children}
    </HealthContext.Provider>
  );
};