import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

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

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator initialRouteName={'LoadingScreen'}>
      <Stack.Screen 
        name="Home" component={Home}         
        options={{
          headerShown: false,
        }} 
      />
      <Stack.Screen 
        name="CreateChallenge" component={CreateChallenge}         
        options={{
          headerShown: false,
        }} 
      />
      <Stack.Screen 
        name="LoadingScreen" component={LoadingScreen}         
        options={{
          headerShown: false,
        }} 
      />
      <Stack.Screen 
        name="Challenge" component={Challenge}         
        options={{
          headerShown: false,
        }} 
      />
      <Stack.Screen 
        name="LevelScreen" component={LevelScreen}         
        options={{
          headerShown: false,
        }} 
      />
      <Stack.Screen 
        name="Select" 
        component={Select}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="Form" 
        component={Form}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="LeaderBoard" 
        component={LeaderBoard}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="Avatar" 
        component={Avatar}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}