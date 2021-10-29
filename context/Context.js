import React, { createContext, useState , useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { GoogleSignin , GoogleSigninButton , statusCodes, } from '@react-native-google-signin/google-signin';


export const HealthContext = createContext();

export const HealthProvider = ({ children }) => {

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user')
      return jsonValue != null ?[ 
      setUser(JSON.parse(jsonValue)), 
      console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>'+jsonValue)]
      
      : 
      console.log(jsonValue);
    } catch(e) {
      console.log(e)
      // error reading value
    }
  }
  const getStepData = async () => {
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
  const [user, setUser] = useState([]);
  const [userSteps, setUserSteps] = useState([]);
  const [state, setState] = useState("home");
  const [complete, setComplete] = useState(0);
  const [userFull, setUserFull] = useState([]);
  const [steps, setSteps] = useState(0);
  const [sleep, setSleep] = useState('');
  
  const [propic, setProPic] = useState(null);
  const [loading, setLoading] = useState(true);

  const BaseUrl = require('../styles/BaseUrl');
  // const getData = async () => {
  //   try {
  //     const jsonValue = await AsyncStorage.getItem('user')
  //     return jsonValue != null ? 
  //     setUser(JSON.parse(jsonValue))
  //     // console.log(jsonValue) 
  //     : null;
  //   } catch(e) {
  //     // error reading value
  //   }
  // }
  
  const getImages =()=>{
      
    fetch(BaseUrl.BASE_URL+'/api/imageUpload/'+user.id)
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
    getStepData()
  }, []);

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
        setLoading
      }}
    >
      {children}
    </HealthContext.Provider>
  );
};