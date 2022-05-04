import React, { useEffect, useState ,useContext} from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../screens/Home'
import Form from '../screens/Form'
import Avatar from '../screens/Avatar'
import Select from '../screens/Select'
import Challenge from '../screens/Challenge'
import Step from '../screens/Step'
import LevelScreen from '../screens/LevelScreen';
import CreateChallenge from '../screens/CreateChallenge';
import LoadingScreen from '../screens/LoadingScreen';
import LeaderBoard from '../screens/LeaderBoard'
import BMIChart from '../screens/BMIChart';
import HomeDrawer from '../drawer/HomeDrawer'
import MainProfile from '../screens/MainProfile';
import MainHome from '../screens/MainHome'
import BMI from '../screens/BMI';
import Evaluate2 from '../screens/Evaluate2';
import Evaluvate from '../screens/Evaluate';
import SignUp from '../screens/SignUp';
import ContactNumber from '../screens/ContactNumber';
import Login from '../screens/Login';
import UserType from '../screens/UserType';
import Welcome from '../screens/Welcome'
import Meditation from '../screens/Meditation';
import Illumination from '../screens/Illumination';
import Sleeping from '../screens/Sleeping';
import Eat from '../screens/Eat';
import Tabs from '../tabs/HomeTabs'

const Stack = createStackNavigator();

function MyStack() {

    const [screen, setScreen] = useState('Welcome');
    const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('user')
          
            return jsonValue != null ?
            JSON.parse(jsonValue).position==4?
            setScreen('MainHome'):
            setScreen('Welcome')
            // var value = JSON.stringify(jsonValue)
            // console.log("json value "+JSON.parse(jsonValue).position)
          
            :
            setScreen('Welcome')
            
            ;
    
        } catch(e) {
          console.log(e)
          // error reading value
        }
        finally{
          SplashScreen.hide();
        }
      }
      
      useEffect(() =>   {
        getData()
      }, [])
      
    // useEffect(() => {
    //     getName()
    //   });

  return (
    <Stack.Navigator 
    initialRouteName={screen} 
    screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CreateChallenge" component={CreateChallenge}/>
      <Stack.Screen name="LoadingScreen" component={LoadingScreen}/>
      <Stack.Screen name="Challenge" component={Challenge}/>
      <Stack.Screen name="LevelScreen" component={LevelScreen}/>
      <Stack.Screen name="Select"component={Select}/>
      <Stack.Screen name="Form" component={Evaluvate} />
      <Stack.Screen name="LeaderBoard" component={LeaderBoard}/>
      <Stack.Screen name="Avatar" component={Avatar}/>

      {/* <Stack.Screen name="Form" component={Form}/> */}
      <Stack.Screen name="Form2" component={Evaluate2}/>
      {/* <Stack.Screen name="Step" component={Step}/> */}
      <Stack.Screen name="BMI"component={BMI}/>
      {/* <Stack.Screen name="Main" component={MainHome}/> */}
      {/* <Stack.Screen name="Select"component={Select}/> */}
      {/* <Stack.Screen name="Avatar" component={Avatar}/> */}
      <Stack.Screen name="profile" component={MainProfile}/>
      <Stack.Screen name="HomeDrawer" component={HomeDrawer}/>
      <Stack.Screen name="BMIChart" component={BMIChart}/>

      <Stack.Screen name="Welcome" component={Welcome}/>
      <Stack.Screen name="UserType" component={UserType}/>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="ContactNumber" component={ContactNumber}/>
      <Stack.Screen name="SignUp" component={SignUp}/>
      {/* <Stack.Screen 
        name="Profile2" component={SelectStack}         
        options={{
          headerShown: false,
        }} 
      /> */}


      <Stack.Screen name="MainHome" component={MainHome}/>
      <Stack.Screen name="Step" component={Step} />
      <Stack.Screen name="Eat" component={Eat}/>
      <Stack.Screen name="Sleeping" component={Sleeping}/>
      <Stack.Screen name="Illumination" component={Illumination}/>
      <Stack.Screen name="Meditation" component={Meditation}/>
      <Stack.Screen name="Tabs" component={Tabs}/>
    </Stack.Navigator>
  );
}

export default function MyStackNavigator() {
  
    
    return (
      <NavigationContainer independent={true}>
        <MyStack/>
      </NavigationContainer>
    );
  }