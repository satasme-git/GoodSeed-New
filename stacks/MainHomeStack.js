import * as React from 'react';
import { createStackNavigator , CardStyleInterpolators } from '@react-navigation/stack';

import MainHome from '../screens/MainHome'
import Eat from '../screens/Eat'
import Sleeping from '../screens/Sleeping'
import Illumination from '../screens/Illumination'
import Meditation from '../screens/Meditation'
import Step from '../screens/Step'


const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator
    screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}

    initialRouteName={'Home'}
    >
        
      <Stack.Screen 
        name="MainHome" component={MainHome}         
        options={{
          headerShown: false,
        }} 

      />
      <Stack.Screen 
        name="Step" component={Step}         
        options={{
          headerShown: false,
        }} 
      />
      <Stack.Screen 
        name="Eat" 
        component={Eat}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="Sleeping" 
        component={Sleeping}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="Illumination" 
        component={Illumination}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="Meditation" 
        component={Meditation}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}