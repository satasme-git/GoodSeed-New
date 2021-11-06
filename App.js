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

  useEffect(() => {

  }, []);



  return (
    <HealthProvider>
      <StatusBar backgroundColor={'#6bb333'} barStyle={'light-content'} />
        <HomeDrawer/>
    </HealthProvider>
  );
}