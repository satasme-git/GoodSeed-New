import * as React from 'react';
import { Image, View , Text, ScrollView} from 'react-native';
import { useNavigation , DrawerActions } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { buttons, styles } from '../styles/Styles';
import {  } from 'react-native-gesture-handler';

export default function About() {

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
            <Text style={{color:'black',fontSize:22,marginLeft:10}}>About Us</Text>
        </View>
        <ScrollView style={styles.viewContainer}>

        <View style={{alignItems:'center',backgroundColor:'rgba(107, 179, 51,0.07)',margin: 15,borderRadius:10}}>
          <Image source={require('../assets/logoicon.png')} style={{width:100,height:100,tintColor:'#6bb333',margin:10}} />

        <Text style={{paddingHorizontal:15,paddingTop:10,fontSize:16,textAlign:'justify'}}>
         
          “{<Text style={{fontWeight:'bold'}}>Good seeds</Text>}” is a lifestyle solutions provider for modern humanitarian problems. The main focus of {<Text style={{fontWeight:'bold'}}>GOOD SEEDS</Text>} is to sow good habits, into the hearts of people from a young age to change lifestyles and build healthy, wealthy, joyful lives and create a new generation with good habits. Therefore, we have identified a few modern problems and have initiated prevention steps to {<Text style={{fontWeight:'bold'}}>STOP</Text>} or {<Text style={{fontWeight:'bold'}}>MINIMIZE</Text>} the suffering been the victims of them. {'\n'}
          AREA WE LOOK IN {'\n'}{'\n'}
          Since it’s the initial stages, we have only a selected area and this will develop with the company growth.{'\n'}{'\n'}
          {<Text style={{fontWeight:'bold',color:'black'}}>1. </Text>}	Human Health. {'\n'}
          {<Text style={{fontWeight:'bold'}}>2. </Text>}	Wealth management. {'\n'}
          {<Text style={{fontWeight:'bold'}}>3. </Text>}	Poverty. {'\n'}
          {<Text style={{fontWeight:'bold'}}>4. </Text>}	Environment. {'\n'}
        </Text>
        </View>
        </ScrollView>
      </View>
    );
  }