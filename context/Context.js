import React, { createContext, useState , useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { GoogleSignin , GoogleSigninButton , statusCodes, } from '@react-native-google-signin/google-signin';

import BackgroundJob from 'react-native-background-actions';
import { startCounter, stopCounter } from 'react-native-accurate-step-counter';

export const HealthContext = createContext();

export const HealthProvider = ({ children }) => {

  const [user, setUser] = useState([]);
  const [userSteps, setUserSteps] = useState([]);
  const [state, setState] = useState("home");
  const [complete, setComplete] = useState(0);
  const [userFull, setUserFull] = useState([]);
  const [steps, setSteps] = useState(0);
  const [sleep, setSleep] = useState('');
  const [userType, setUserType] = useState('');
  const [glasses, setGlasses] = useState(0);
  
  const [propic, setProPic] = useState(null);
  const [loading, setLoading] = useState(true);

  const BaseUrl = require('../styles/BaseUrl');

  const getData = async () => {
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
  const setStepCount = async (steps) => {

    const jsonValue = await AsyncStorage.getItem('user')

    // const jsonValue = await AsyncStorage.getItem('user')
    var id;

    if(jsonValue == null) {
      id = user.id
    }
    else{
      id = JSON.parse(jsonValue).id
    }

    // const id = JSON.parse(jsonValue).id

    const formData = new FormData()

    formData.append('member_id', id);
    formData.append('steps', steps);

    
    console.log(id)
    
    fetch(BaseUrl.BASE_URL+'/api/steps/', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        // navigation.navigate('profile')
        // console.log('Success:', data);
        setSteps(parseInt(data.steps))
        // Message('Nice','#6bb333','You Created Challenge Successfully','Start Walking','');
      })
      .catch(error => {
        // getAsyncSteps()
        // console.log('Error:', formData);
      });
    

  };

  const getSteps = async () => {
    const jsonValue = await AsyncStorage.getItem('user')
    var id;

    if(jsonValue == null) {
      id = user.id
    }
    else{
      id = JSON.parse(jsonValue).id
    }
    console.log(id)

    fetch(BaseUrl.BASE_URL+'/api/steps/'+id)
        .then((response) => response.json())
        .then((json) => {
        // setRequests(json)
        setSteps(json.steps)

        const config = {
          default_threshold: 20.0,
          default_delay: 150000000,
          cheatInterval: 3000,
          onStepCountChange: (stepCount) => {backgroundtimer(parseInt(json.steps)+stepCount) },
          onCheat: () => { }
        }
        startCounter(config);
        // return () => { stopCounter() }

        // console.log(json.steps)
        })
        .catch((error) => console.error(error))
        .finally(() => {});
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
       setProPic(BaseUrl.BASE_URL+'/assets/profile_pics/'+json[1].image)
       // console.log(BaseUrl.BASE_URL+'/assets/profile_pics/'+json[1].image)
    })
    .catch((error) => console.error(error))
    .finally(() => {});

  }


  useEffect(() => {
    getData()
    getImages()
    getSteps()
    // getStepData()
    // getSteps()
  }, []);
  
  

 
  const backgroundtimer = (step) =>{
    // console.log(steps)
    
    // await BackgroundJob.updateNotification({ taskDesc: step });
    setStepCount(step)
    storeData(step.toString())
    setSteps(step)
    // storeSteps(step.toString())
    
  }

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
        setUserType
      }}
    >
      {children}
    </HealthContext.Provider>
  );
};