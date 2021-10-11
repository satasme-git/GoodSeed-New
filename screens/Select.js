import React, { useState , useEffect , useContext, useRef  } from 'react';
import { StatusBar, View , Text,Image,ImageBackground, TouchableOpacity} from 'react-native';
import { useNavigation , DrawerActions } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { buttons, styles } from '../styles/Styles';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

import { BlurView } from "@react-native-community/blur";

import { Background } from '../styles/Background';

export default function Select() {
    useEffect(() => {
        if (Platform.OS === 'android') {
            // StatusBar.setBackgroundColor('rgba(0,0,0,0)');
            StatusBar.setTranslucent(false);
          }
      }, []);

    const navigation = useNavigation();

    const [img, setImg] = useState( "");
    const [name, setName] = useState( "");
    return (

        <View style={styles.container} >

<Background>
            <Animatable.Text style={{color:'black',fontSize:25,padding:5,textAlign:'center',fontWeight:'bold'}} delay={300} animation={'bounceIn'}>
                Select Your Path
            </Animatable.Text>

            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:50}}>
                <Animatable.View animation={'bounceIn'} delay={300}>
                <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.navigate('Avatar',{item:'Sculpt yourself',img:require('../assets/sculpt.jpg')})}>
                <ImageBackground source={require('../assets/sculpt.jpg')} style={styles.giantView} imageStyle={{borderRadius:5,borderWidth:2,borderColor:'white'}}>
                    {/* <View style={styles.textStyleBlur}>
                        <Text style={styles.textStyle}>Sculpt yourself</Text>
                    </View> */}
                <LinearGradient
                    colors={[ 'transparent','rgba(255,255,255,1)']}
                    style={{height: 60,borderRadius:5,justifyContent:'flex-end'}}
                    >
                        <Text style={[styles.textStyle2,{color:'black',paddingBottom:15}]}>Sculpt yourself</Text>
                </LinearGradient> 
                </ImageBackground>
                </TouchableOpacity>
                </Animatable.View>

                <Animatable.View animation={'bounceIn'} delay={300}>
                <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.navigate('Avatar',{item:'Slaying the giant',img:require('../assets/giant.jpg')})}>
                <ImageBackground source={require('../assets/giant.jpg')}  style={styles.giantView} imageStyle={{borderRadius:5,borderWidth:2,borderColor:'white'}}>
                <LinearGradient
                    colors={[ 'transparent','rgba(255,255,255,1)']}
                    style={{height: 60,borderRadius:5,justifyContent:'flex-end'}}
                    
                    >
                        <Text style={[styles.textStyle2,{color:'black',paddingBottom:15}]}>Slaying the giant</Text>
                </LinearGradient>
                </ImageBackground>
                </TouchableOpacity>
                </Animatable.View>
                    {/* <View style={styles.textStyleBlur}>
                        <Text style={styles.textStyle}>Slaying the giant</Text>
                    </View> */}

            </View>
            </Background>
        </View>

    );

}