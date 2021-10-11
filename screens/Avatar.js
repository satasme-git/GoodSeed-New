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

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function Avatar() {
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

    const [image, setImg] = useState();   

    const renderItem = ({ item }) => (
      <TouchableOpacity onPress={()=>{
        navigation.navigate('Home');
        // setImg(item.png);toggleModal()
        }}>
        <Animatable.Image style={styles.avatar} source={item.png}
         delay={item.delay} animation={'bounceIn'}
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
            <StatusBar barStyle={'dark-content'} />
            <Image style={styles.absolute} blurRadius={20} source={img}/>

            <Modal 
            isVisible={isModalVisible}
            onBackButtonPress={toggleModal}
            animationIn={'zoomIn'}
            animationOut={'zoomOut'}
            >
              <View style={{flex: 1,justifyContent:'center'}}>
              <Animatable.Image style={styles.avatar2} source={image}
                 animation={'bounceIn'}
                />

                <Emitter
                  autoStart={true}
                  numberOfParticles={20}
                  interval={100}
                  emissionRate={5}
                  particleLife={3000}
                  direction={-90}
                  spread={360}
                  speed={8}
                  segments={20}
                  width={windowWidth/2}
                  height={windowHeight/2}
                  fromPosition={{ x: windowWidth / 2, y: windowHeight / 2 }}
                  infiniteLoop ={true}
                  gravity={0.2}
                >
                  <View style={{backgroundColor:'white',height:7,width:7,borderRadius:10}} />
                
              </Emitter>

              <Emitter
                  autoStart={true}
                  numberOfParticles={10}
                  interval={160}
                  emissionRate={5}
                  particleLife={3000}
                  direction={-90}
                  spread={360}
                  speed={9}
                  segments={10}
                  width={windowWidth/2}
                  height={windowHeight/2}
                  fromPosition={{ x: windowWidth / 2, y: windowHeight / 2 }}
                  infiniteLoop ={true}
                  gravity={0.2}
                >
                  <View style={{backgroundColor:'white',height:7,width:7,borderRadius:10}} />
                
              </Emitter>

              <Emitter
                  autoStart={true}
                  numberOfParticles={20}
                  interval={200}
                  emissionRate={5}
                  particleLife={3000}
                  direction={-90}
                  spread={360}
                  speed={8}
                  segments={20}
                  width={windowWidth/2}
                  height={windowHeight/2}
                  fromPosition={{ x: (windowWidth / 2)-40, y: (windowHeight / 2 )-40}}
                  infiniteLoop ={true}
                  gravity={0.2}
                >
                  <View style={{backgroundColor:'red',height:7,width:7,borderRadius:10}} />
                
              </Emitter>

              <Emitter
                  autoStart={true}
                  numberOfParticles={20}
                  interval={120}
                  emissionRate={5}
                  particleLife={3000}
                  direction={-90}
                  spread={360}
                  speed={5}
                  segments={20}
                  width={windowWidth/2}
                  height={windowHeight/2}
                  fromPosition={{ x: (windowWidth / 2)-40, y: (windowHeight / 2 )-40}}
                  infiniteLoop ={true}
                  gravity={0.2}
                >
                  <View style={{backgroundColor:'yellow',height:7,width:7,borderRadius:10}} />
                
              </Emitter>
              <Emitter
                  autoStart={true}
                  numberOfParticles={20}
                  interval={150}
                  emissionRate={5}
                  particleLife={3000}
                  direction={-90}
                  spread={360}
                  speed={5}
                  segments={20}
                  width={windowWidth/2}
                  height={windowHeight/2}
                  fromPosition={{ x: (windowWidth / 2)-40, y: (windowHeight / 2 )-40}}
                  infiniteLoop ={true}
                  gravity={0.2}
                >
                  <View style={{backgroundColor:'blue',height:7,width:7,borderRadius:10}} />
                
              </Emitter>

              {/* <ImageBackground source={require('../assets/start.png')} imageStyle={{resizeMode:'contain'}} style={{width:200,height:80,marginTop:10,paddingTop:-10,alignSelf:'center',alignItems:'center',justifyContent:'center'}} >
                <Text>Start</Text>
              </ImageBackground> */}

              <TouchableHighlight onPress={()=>navigation.navigate('HomeDrawer')} style={{backgroundColor:'#4b937c',paddingHorizontal:20,alignSelf:'center',marginTop:20,borderRadius:50,paddingVertical:5}}>
                <Text style={{color:'white',fontSize:20}}>Start</Text>
              </TouchableHighlight>
              </View>
            </Modal>

            <View  style={[styles.absolute,{backgroundColor:'rgba(255,255,255,0.6)'}]} />

            <Animatable.Text style={{color:'black',fontSize:20,paddingTop:40,textAlign:'center'}} delay={300} duration={500} animation={'bounceIn'}>
               {item}
            </Animatable.Text>
            <Animatable.Text style={{color:'black',fontSize:25,paddingTop:0,textAlign:'center',fontWeight:'bold'}} duration={1000} delay={300} animation={'bounceInLeft'}>
               Create Your Avatar
            </Animatable.Text>
               
               <View style={{alignSelf:'center',marginTop:20}}>
               <FlatList
                data={AvatarImages}
                renderItem={renderItem}
                horizontal={false}
                initialNumToRender={12}
                numColumns={3}
                keyExtractor={item => item.id}
              />
              </View>

               {/* <TouchableOpacity
                style={{backgroundColor:'black',padding:5}}
                onPress={takeScreenShot}>
                <Text style={{backgroundColor:'white',padding:5}}>
                  Take Screenshot
                </Text>
              </TouchableOpacity> */}

            {/* </Animatable.View> */}

            

            {/* <Image
              source={{uri: imageURI}}
              style={{
                width: 200,
                height: 300,
                resizeMode: 'contain',
                marginTop: 5
              }}
            /> */}
        
            {/* <TouchableOpacity
              style={{backgroundColor:'black',padding:5}}
              onPress={takeScreenShot}>
              <Text style={{backgroundColor:'white',padding:5}}>
                Take Screenshot
              </Text>
            </TouchableOpacity> */}

            {/* <View style={styles.pallet}>
                <View style={styles.pallet2}>

                </View>
            </View> */}
            
      </View>
    );
  }