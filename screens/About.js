import * as React from 'react';
import { Button, View , Text, ScrollView} from 'react-native';
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
        <Text style={{paddingHorizontal:15,paddingTop:10,fontSize:16,textAlign:'justify'}}>
          “Then you will know the truth, and the truth will set you free ” _ John 8:32 {'\n'}
          “GOOD SEEDS” {'\n'}
          “Good seeds” is a lifestyle solutions provider for modern humanitarian problems. The main focus of GOOD SEEDS is to sow good habits, into the hearts of people from a young age to change lifestyles and build healthy, wealthy, joyful lives and create a new generation with good habits. Therefore, we have identified a few modern problems and have initiated prevention steps to STOP or MINIMIZE the suffering been the victims of them. {'\n'}
          AREA WE LOOK IN {'\n'}
          Since it’s the initial stages, we have only a selected area and this will develop with the company growth.{'\n'}
          1.	Human Health. {'\n'}
          2.	Wealth management. {'\n'}
          3.	Poverty. {'\n'}
          4.	Environment. {'\n'}
        </Text>
        </ScrollView>
      </View>
    );
  }