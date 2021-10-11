import * as React from 'react';
import { TouchableHighlight, View , Text} from 'react-native';
import { useNavigation , DrawerActions } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { buttons, styles } from '../styles/Styles';

import { Background } from '../styles/Background';
export default function Challenge() {

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
             <Text style={{color:'black',fontSize:22,marginLeft:10}}>Challenge to Friends</Text>
          </View>
          
          <Background>
          
             <TouchableHighlight onPress={()=>{navigation.navigate('Select')}} style={{backgroundColor: 'red',padding:5,paddingHorizontal:15,borderRadius:25}}>
               <View>
                  <Text style={{color:'white',fontSize:17}}>Start the Game</Text>
               </View>
             </TouchableHighlight>

          </Background>
        
      </View>
    );
  }