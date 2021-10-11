import * as React from 'react';
import { Button, View , Text} from 'react-native';
import { useNavigation , DrawerActions } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { buttons, styles } from '../styles/Styles';

import { Background } from '../styles/Background';
export default function Habbits() {

    const navigation = useNavigation();

    return (
      <View style={styles.container}>
          <View style={styles.header}>
             <Ionicons 
                name="menu-outline" 
                size={30} 
                color="black" 
                onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
             /> 
          </View>
          
          <Background>
             
          </Background>
        
      </View>
    );
  }