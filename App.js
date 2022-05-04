import 'react-native-gesture-handler';
import React, { useEffect, useState ,useContext } from "react";
import HomeDrawer from './drawer/HomeDrawer'
// import { StatusBar ,LogBox} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { HealthProvider, HealthContext } from './context/Context';
import SplashScreen from 'react-native-splash-screen'
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
  LogBox
} from 'react-native';
import Background from './context/BackgroundJob'
LogBox.ignoreAllLogs();


//  import { Header, Colors } from 'react-native/Libraries/NewAppScreen';
import { startCounter, stopCounter } from 'react-native-accurate-step-counter';
import AsyncStorage from '@react-native-async-storage/async-storage';

 import BackgroundJob from 'react-native-background-actions';
import MyStack from './stacks/Stack';


export default function App() {

  const health = useContext(HealthContext);
  const BaseUrl = require('./styles/BaseUrl');

  const [data, setData] = useState([]);
  const [steps, setSteps] = useState(0);

  useEffect(() => {
    // SplashScreen.hide();

// Must be outside of any component LifeCycle (such as `componentDidMount`).


  }, []);



  return (
    <SafeAreaProvider>
    <HealthProvider>
      <StatusBar backgroundColor={'#6bb333'} barStyle={'light-content'} />
        <HomeDrawer/>
        {/* <Background/> */}
        {/* <MyStack /> */}
    </HealthProvider>
    </SafeAreaProvider>
  );
}