import * as React from 'react';
import { Button, View , Text} from 'react-native';
import { useNavigation , DrawerActions } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { buttons, styles } from '../styles/Styles';

export default function Illumination() {

    const navigation = useNavigation();

    return (
      <View style={styles.container}>
          <View style={styles.header}>
             <Ionicons 
                name="arrow-back" 
                size={30} 
                color="black" 
                onPress={() => navigation.goBack()}
             /> 
             <Text>Elimination</Text>
          </View>
          
          <View style={styles.innerContainer}>
             
          </View>
        
      </View>
    );
  }