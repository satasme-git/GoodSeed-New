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

  const [user, setUser] = useState([]);
  const [state, setState] = useState("home");
  const [complete, setComplete] = useState(0);
  const [userFull, setUserFull] = useState([]);
  const [steps, setSteps] = useState(0);

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
  

  useEffect(() => {
    getData()
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
        setSteps
      }}
    >
      {children}
    </HealthContext.Provider>
  );
};