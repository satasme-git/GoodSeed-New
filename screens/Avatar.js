import React, { useState , useEffect , useContext, useRef  } from 'react';
import { StatusBar, View , Dimensions, Image, FlatList,TouchableOpacity, TouchableHighlight, Text} from 'react-native';
import { useNavigation , DrawerActions ,useRoute } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { buttons, styles } from '../styles/Styles';
import * as Animatable from 'react-native-animatable';
import {captureScreen} from 'react-native-view-shot';
import ViewShot from "react-native-view-shot";

import { Emitter } from 'react-native-particles';

import Modal from 'react-native-modal';

import { AvatarImages } from '../styles/AvatarImages';

import { Vector } from 'react-native-particles/';
import { BurstAndMoveEmitter } from 'react-native-particles';
import { ScrollView } from 'react-native-gesture-handler';
import { HealthProvider, HealthContext } from '../context/Context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function Avatar() {
  const storeUserData = async (value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('user', jsonValue)
    } catch (e) {
        // saving error
    }
    }
  const health = useContext(HealthContext);

    useEffect(() => {
        // if (Platform.OS === 'android') {
        //     StatusBar.setBackgroundColor('rgba(0,0,0,0)');
        //     StatusBar.setTranslucent(true);
        //   }
      }, []);

    //   const [imageURI, setImageURI] = useState(
    //     'https://raw.githubusercontent.com/AboutReact/sampleresource/master/sample_img.png',
    //   );
    const navigation = useNavigation();
    const route = useRoute();
    const {item} = route.params;
    const {img} = route.params;

    
    const BaseUrl = require('../styles/BaseUrl');

      const avatarUpdate = (img) => {
        // var image = img.toString()
        const formData = new FormData()
    
        formData.append('id', health.user.id);
        formData.append('avatar', img);
        console.log(img)
    
        fetch(BaseUrl.BASE_URL+'/api/avatar/', {
          method: 'POST',
          body: formData,
        })
          .then(response => response.json())
          .then(data => {
            health.setUser(data)
            storeUserData(data)
            navigation.navigate('profile')
            health.getName()
            health.getBMI()
            // console.log('Success:', data);
          })
          .catch(error => {
            console.log('Error:', error);
          });
      };

    // const [savedImagePath, setSavedImagePath] = useState('');
    // const takeScreenShot = () => {
    //   // To capture Screenshot
    //   captureScreen({
    //     // Either png or jpg (or webm Android Only), Defaults: png
    //     format: 'jpg',
    //     // Quality 0.0 - 1.0 (only available for jpg)
    //     quality: 0.8, 
    //   }).then(
    //     //callback function to get the result URL of the screnshot
    //     (uri) => {
    //       setSavedImagePath(uri);
    //       setImageURI(uri);
    //       console.log(uri)
    //     },
    //     (error) => console.error('Oops, Something Went Wrong', error),
    //   );
    // };

    const [image, setImg] = useState(null);
    const [imageID, setImgID] = useState(null);   

    const renderItem = ({ item }) => (
      <TouchableOpacity onPress={()=>{
        // navigation.navigate('Home');
        setImg(item.png)
        // ;toggleModal()
        }}>
        <Image style={[styles.avatar,{borderWidth:image==item.png?5:0,borderColor:'#6bb333'}]} source={item.png}
        //  delay={item.delay} 
        //  animation={'bounceIn'}
         />
      </TouchableOpacity>
    );

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };
    const inputEl = useRef(null);
    return (
      <View style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            {/* <Image style={styles.absolute} blurRadius={20} source={img}/> */}

            <View  style={[styles.absolute,{backgroundColor:'rgba(255,255,255,0.6)'}]} />

            <Animatable.Text style={{color:'black',fontSize:20,paddingTop:40,textAlign:'center'}} delay={300} duration={500} animation={'bounceIn'}>
               {item}
            </Animatable.Text>
            <Animatable.Text style={{color:'black',fontSize:25,paddingTop:0,textAlign:'center',fontWeight:'bold'}} duration={1000} delay={300} animation={'bounceInLeft'}>
               Select Your Avatar
            </Animatable.Text>
               
               <View style={{alignSelf:'center',marginTop:20,height: '70%'}}>
               <ScrollView horizontal style={{flexGrow: 1 }}>
                 {/* <View style={{height:10,flexDirection:'row'}}> */}
               {
                 AvatarImages.map((item)=>
                 <TouchableOpacity key={item.id} onPress={()=>{
                  // navigation.navigate('Home');
                  setImg(item.png);setImgID(item.id)
                  // ;toggleModal()
                  }}>
                  <Image style={[styles.avatar,{borderWidth:image==item.png?5:0,borderColor:'#6bb333'}]} source={item.png}
                  //  delay={item.delay} 
                  //  animation={'bounceIn'}
                   />
                </TouchableOpacity>
                 )
               }
               {/* </View> */}
               </ScrollView >
               <View style={{padding:15,paddingHorizontal:50}}>
                 <Text style={{textAlign:'center',fontSize:16}}>Select an Avatar for continue to the app. Your selected avatar will save as your profile picture.</Text>
               </View>
               
               <View style={{padding:20,alignItems:'center'}}>
                 {image==null?
                 <View style={{width:120,height:120,borderRadius:60,backgroundColor:'rgba(107, 179, 51,0.5)'}}></View> 
                 :
                 <Image style={{width:120,height:120,borderRadius:60}} source={image}></Image> 
                }

                {
                  image==null?
                  <TouchableHighlight underlayColor={'rgba(0, 0, 0,0.7)'} style={{backgroundColor:"rgba(0, 0, 0,0.2)",paddingHorizontal:15,paddingVertical:5,marginTop:25,borderRadius:25}}>
                  <View>
                    <Text style={{fontSize:17}}>Continue</Text>
                  </View>
                </TouchableHighlight>
                :
                <TouchableHighlight onPress={()=>{avatarUpdate(imageID)}} underlayColor={'rgba(107, 179, 51,0.7)'} style={buttons.continuebtn}>
                  <View>
                    <Text style={{fontSize:17}}>Continue</Text>
                  </View>
                </TouchableHighlight>
                }
                
               </View>
               
              </View>
            
      </View>
    );
  }