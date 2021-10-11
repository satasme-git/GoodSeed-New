import * as React from 'react';
import { Button, View , Text} from 'react-native';
import { useNavigation , DrawerActions } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { buttons, styles } from '../styles/Styles';

import ModelView from 'react-native-gl-model-view';

export default function Map() {

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
             <Text style={[{color:'black',fontFamily:'fonts/Ionicons',fontSize:17}]}>Map</Text>
          </View>
          
          {/* <View style={styles.innerContainer}> */}
 
            <ModelView
                model={{
                uri: 'map.obj',
                }}
                // texture={{
                // uri: 'texture.png',
                // }}
            
                scale={0.5}
            
                translateZ={-2}
                rotateZ={270}
            
                style={{flex: 1,backgroundColor: 'red'}}
            />
          </View>
        
    //   </View>
    );
  }