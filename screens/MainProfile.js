import React, {useRef, useState,useEffect,useContext} from 'react';
import { ActivityIndicator, View ,Animated, Text,Dimensions,ScrollView, ImageBackground,Image,TouchableHighlight,TouchableOpacity} from 'react-native';
import { useNavigation , DrawerActions } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { buttons, styles } from '../styles/Styles';
import RBSheet from "react-native-raw-bottom-sheet";
import { RiskData } from '../styles/RiskData';

import Speedometer from 'react-native-speedometer-chart';

import * as Animatable from 'react-native-animatable';

// import RNSpeedometer from 'react-native-speedometer';

import { HealthContext } from '../context/Context';

import RNFetchBlob from 'rn-fetch-blob'

import LinearGradient from 'react-native-linear-gradient';


import StickyParallaxHeader from 'react-native-sticky-parallax-header'

// import * as ImagePicker from "react-native-image-picker"
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import ImagePicker from 'react-native-image-picker';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default function MainProfile() {

   
   const health = useContext(HealthContext);
    const navigation = useNavigation();
    const refRBSheet = useRef();

    const [refreshing, setRefreshing] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const [level, setLevel] = useState(210);

    const [bmi, setBmi] = useState('');
    const [bmilevel, setBmilevel] = useState('');

    const [show, setShow] = useState(null);

    const [filePath, setFilePath] = useState({});

    const [singleFile, setSingleFile] = useState('');

    const [percentage, setPercentage] = useState(0);

    const BaseUrl = require('../styles/BaseUrl');

    const getImages =()=>{
      
      fetch(BaseUrl.BASE_URL+'/api/imageUpload/'+health.user.id)
      .then((response) => response.json())
      .then((json) => {
         setData(json)
         json[1].image==null?
      health.setProPic(null):
         health.setProPic(BaseUrl.BASE_URL+'/assets/profile_pics/'+json[1].image)
         // console.log(BaseUrl.BASE_URL+'/assets/profile_pics/'+json[1].image)
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));

    }
    const options2 = {
      title: 'Select Avatar',
      customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    const onCameraPress =()=>{
      ImagePicker.launchCamera(options2, (response) =>  {
         // console.log('Response = ', response);
        
         if (response.didCancel) {
           console.log('User cancelled image picker');
         } else if (response.error) {
           console.log('ImagePicker Error: ', 'response.error');
         } else if (response.customButton) {
           console.log('User tapped custom button: ', 'response.customButton');
         } else {
            const source = { uri: response.uri };
            const imdata = response.data;
 
            setFilePath(source)
            console.log(response)
            uploadPhoto(response)
         }
       });
    }

    const onGalleryPress =()=>{
      const options = {
         quality: 1.0,
         maxWidth: 500,
         maxHeight: 500,
         storageOptions: {
           skipBackup: true
         }
       }

      ImagePicker.launchImageLibrary(options, (response) => {
         // console.log('Response = ', response);
        
         if (response.didCancel) {
           console.log('User cancelled image picker');
         } else if (response.error) {
           console.log('ImagePicker Error: ', response.error);
         } else if (response.customButton) {
           console.log('User tapped custom button: ', response.customButton);
         } else {
           const source = { uri: response.uri };
           const imdata = response.data;

           setFilePath(source)
            // console.log(health.user)
            uploadPhoto(response)
         }
       });
    }

    const uploadPhoto=(photo)=>{
      setLoading(true);
      RNFetchBlob.fetch('POST', BaseUrl.BASE_URL+'/api/imageUpload/'+health.user.id, {
          Authorization: "Bearer access-token",
         //  otherHeader: "foo",
          'Content-Type': 'multipart/form-data',
      }, [
         { name: 'profile_pics', filename: photo.fileName, type: photo.type, data: photo.data },
      ]).then((resp) => {
         // getImages()
         setData(resp.json())
          console.log(BaseUrl.BASE_URL+'/assets/profile_pics/'+resp.json()[1].image);
          
         health.setProPic(BaseUrl.BASE_URL+'/assets/profile_pics/'+resp.json()[1].image)

      }).catch((err) => {
          console.log(err);
      }).finally(() => setLoading(false));
  }


  const getBMI =()=>{
      
   fetch(BaseUrl.BASE_URL+'/api/BasicDetails/'+health.user.member_id)
   .then((response) => response.json())
   .then((json) => {
      console.log(json.bmi)
      setBmi(json.bmi.toFixed(1)+'0')
      // health.setProPic(BaseUrl.BASE_URL+'/assets/profile_pics/'+json[1].image)
      // console.log(BaseUrl.BASE_URL+'/assets/profile_pics/'+json[1].image)

      json.bmi < 18.5?
      setBmilevel('UNDERWEIGHT'):
      json.bmi < 24.9?
      setBmilevel('NORMAL'):
      json.bmi < 29.9?
      setBmilevel('OVERWEIGHT'):
      json.bmi < 34.9?
      setBmilevel('OBESE')
      :
      setBmilevel('EXTREMELY OBESE')

      // console.log(json.toF.bmiixed(1)+'0')
   })
   .catch((error) => console.error(error))
   .finally(() => setLoading(false));

 }
 const getPersentage = () =>{
   setPercentage(((health.steps*100)/6000).toFixed(1))
 }

    useEffect(() => {
      getImages()
      getBMI()
      getPersentage()
    }, []);
    
    const scroll = useRef(new Animated.Value(0)).current;

    const renderHeader = () => {
      const opacity = scroll.interpolate({
        inputRange: [0, 100, 160],
        outputRange: [0,0, 1],
        extrapolate: 'clamp'
      })
  
      return (
        <View style={{backgroundColor:'rgb(107, 179, 51)',height: windowHeight/10}}>
          <Animated.View style={{ opacity ,flexDirection:'row',alignItems:'center',padding:10}}>
              <Ionicons 
              name="menu-outline" 
              size={35} 
              color="rgb(107, 179, 51)" 
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
              /> 
            <Text style={{paddingLeft:10,color:'white',fontSize:20}}>{health.user.email}</Text>
          </Animated.View>
        </View>
      )
    }

    const renderForeground = () => {
      const titleOpacity = scroll.interpolate({
        inputRange: [0, 106, 154],
        outputRange: [1, 1, 0],
        extrapolate: 'clamp'
      })
  
      return (
        <View style={{paddingLeft:0}}>
            {/* <Text>{'\n'}</Text> */}
          <Animated.View style={{ opacity: titleOpacity ,alignItems:'center',backgroundColor:'rgb(107, 179, 51)',borderBottomLeftRadius:20,borderBottomRightRadius:20,width: '100%',}}>
              
          <View style={styles.profileHeader}>
               <ImageBackground 
                  source={require('../assets/cover.jpg')}
                  style={styles.imageBg}
                  imageStyle={styles.imageBgInner}
               >
                  <View>
                     <TouchableHighlight underlayColor={'#DDDDDD'} onPress={()=>refRBSheet.current.open()} style={styles.profilPicBack}>
                     <View>
                     {data.map((item,index)=>
               index==1?  
                        
                     isLoading==true?
                     <View key={index} style={[styles.profilePicBig2,{justifyContent:'center'}]}>
                     <ActivityIndicator size="large" color="#4b937c" />
                     </View>
                     :
                     item.image==null?
                     <Image key={item.id}
                           source={require('../assets/propic.jpg')} 
                           style={styles.profilePic}
                        />
               :
                     <Image key={item.id}
                        // source={{uri:filePath}}
                        source={{uri:BaseUrl.BASE_URL+'/assets/profile_pics/'+item.image}} 
                        style={styles.profilePic}
                     />
                  :
                  null)}
                  </View>
                     </TouchableHighlight>

                     <View style={styles.profilHeader}>
                        <Text style={{fontSize:17}}>{health.user.email}</Text>
                        <View style={{flexDirection:'row',backgroundColor:'white',borderRadius:5,padding:6,justifyContent:'space-evenly',width:windowWidth-30}}>
                           <View style={{alignItems:'center'}}>
                             <Text style={{fontSize:17,fontWeight:'700'}}>{health.user.risk_point}</Text> 
                             <Text style={{fontSize:11,color:'gray'}}>Risk Points</Text> 
                           </View>
                           <View style={{alignItems:'center'}}>
                             <Text style={{fontSize:17,fontWeight:'700'}}>{bmi}</Text> 
                             <Text style={{fontSize:11,color:'gray'}}>BMI</Text> 
                           </View>
                           <View style={{alignItems:'center'}}>
                             <Text style={{fontSize:17,fontWeight:'700'}}>{percentage}%</Text> 
                             <Text style={{fontSize:11,color:'gray'}}>Daily Task</Text> 
                           </View>
                           
                        </View>
                     </View>

                  </View>
               </ImageBackground>

            </View>
          </Animated.View>
        </View>
      )
    }
    const titleOpacity = scroll.interpolate({
      inputRange: [0, 106, 154],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp'
    })

    return (
      <View style={styles.container}>
         <View style={[styles.header,{backgroundColor: 'transparent',}]}>
             <Ionicons 
                name="menu-outline" 
                size={30} 
                color="white" 
                style={{zIndex:2}}
                onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
             /> 
             <Animated.Text  style={{opacity:titleOpacity,color:'white',fontSize:22,marginLeft:10}}>Profile</Animated.Text>
          </View>

<StickyParallaxHeader
        //   headerType={'AvatarHeader'}
          backgroundColor={'transparent'}
          bounces={true}
        foreground={renderForeground()}
        header={renderHeader()}
        parallaxHeight={windowHeight/2.5}
        // image={null}
        headerHeight={50}
        headerSize={() => {}}
        onEndReached={() => {}}
        scrollEvent={Animated.event([{ nativeEvent: { contentOffset: { y: scroll } } }])}
        leftTopIcon={require('../assets/menu.png')}
        leftTopIconOnPress={()=>navigation.dispatch(DrawerActions.toggleDrawer())}
      //   image={image}
        rightTopIcon={null}
        // tabTextStyle={styles.tabText}
        // tabTextContainerStyle={styles.tabTextContainerStyle}
        // tabTextContainerActiveStyle={styles.tabTextContainerActiveStyle}
        // tabsContainerBackgroundColor={'#6bb333'}
        // title={health.user.email}
        // snapValue={0}
        // subtitle={''}
        // subtitle={'Level '+health.user.level}
        // tabsWrapperStyle={styles.tabsWrapper}
      >
         {/* </StickyParallaxHeader> */}


         


         {/* <ScrollView contentContainerStyle={{ flexGrow: 1 }}>  */}
          {/* <View style={[styles.innerContainer,{backgroundColor: '#6bb333',flex:1}]}> */}

            
            
            <View>
            
               <LinearGradient 
              colors={['#6bb333', '#366011']} 
              style={{borderRadius:20,marginTop:10,padding:10,marginHorizontal:10}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
               <Text style={{color:'#dfd',fontSize:17}}>Your BMI  Index {<Text style={{color:'#fff',fontSize:19,fontWeight:'bold'}}>{bmi}</Text>}</Text>
               
               <Text style={{color:'#6bb333',backgroundColor:'#fff',fontSize:17,paddingHorizontal:10,borderRadius:50}}>{bmilevel}</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-evenly',backgroundColor:'rgba(255,255,255,0.5)',padding:5,marginTop:10,borderRadius:10}}>
               <View>
                 <Text style={{fontSize:11,color:'black'}}>{`<`}18.5 {<Text style={{color:'#000',fontSize:13,fontWeight:'bold'}}> UNDERWEIGHT</Text>} </Text>
                  <Text style={{fontSize:11,color:'black'}}>18.6 - 24.9 {<Text style={{color:'#000',fontSize:13,fontWeight:'bold'}}> NORMAL</Text>}  </Text>
                  <Text style={{fontSize:12,color:'black'}}>25 - 29.9 {<Text style={{color:'#000',fontSize:13,fontWeight:'bold'}}> OVERWEIGHT</Text>} </Text> 
               </View>
               <View style={{borderLeftWidth:1,borderColor:'gray',paddingLeft:20}}>
                  <Text style={{fontSize:11,color:'black'}}>30 - 34.9 {<Text style={{color:'#000',fontSize:13,fontWeight:'bold'}}> OBESE</Text>} </Text> 
                  <Text style={{fontSize:11,color:'black'}}>35{`<`} {<Text style={{color:'#000',fontSize:13,fontWeight:'bold'}}> EXTREMELY OBESE</Text>}  </Text>                  
               </View>
               

              
            </View>
            </LinearGradient>

            <View style={{backgroundColor: 'white',marginTop:0,padding:10,borderTopRightRadius:10,borderTopLeftRadius:10}}>
            
            
            
            <LinearGradient 
              colors={['#6bb333', '#366011']} 
              style={{borderRadius:20}}>
            <View style={{marginVertical:0,padding:0,flexDirection:'row',alignItems:'center',justifyContent:'space-between',borderRadius:20}}>
                  <Text style={{fontSize:19,textAlign:'center',color:'white',marginLeft:25}}>Your Risk {'\n'}Level</Text>
                  <View style={{alignItems:'center',backgroundColor: 'rgba(255,255,255,0.4)',margin:10,padding:10,borderRadius:20,alignSelf:'flex-end'}}>
                  <View style={{backgroundColor: 'white',padding:5,paddingHorizontal:30,borderRadius:15}}>
                  <Speedometer 
                  // value={level} 
                  value={parseInt(health.user.risk_point)}
                  size={90}
                  totalValue={570} 
                  showIndicator
                  outerColor="#d3d3d3"
                  showLabels
                  labelStyle={{ color: 'blue', fontSize:10 }}
                  internalColor={parseInt(health.user.risk_point)<=200?"#00ab4d":parseInt(health.user.risk_point)>=201 && parseInt(health.user.risk_point)<=325?"#ecc724":'#d71e25'}
                  style={{marginBottom:-5}}
                  />
                  <Text style={{fontSize:14,textAlign:'center',marginTop:-5,marginBottom:0,color:parseInt(health.user.risk_point)<=200?"#00ab4d":parseInt(health.user.risk_point)>=201 && parseInt(health.user.risk_point)<=325?"#ecc724":'#d71e25'}}>
                     {parseInt(health.user.risk_point)}{'\n'}
                     {parseInt(health.user.risk_point)<=200?"Normal":parseInt(health.user.risk_point)>=201 && parseInt(health.user.risk_point)<=325?"Border Line":'High Risk'}</Text>
                     </View>
                  </View>

               </View>
            </LinearGradient>

               {RiskData.map((item)=>
                  <View key={item.id} style={{backgroundColor:item.fontColor,marginTop:6,padding:10,borderRadius:10,flexDirection:'row',justifyContent:'space-between'}}>
                     <Text style={{fontSize:16,color:'white'}}>
                        {item.title}
                     </Text>
                     <View style={{backgroundColor:'white',paddingVertical:5,paddingHorizontal:15,borderRadius:10}}>
                     <Text style={{color:item.fontColor}}>{item.points}</Text>
                     </View>
                  </View>
               )}
               </View>
            </View>
            
            <RBSheet
               ref={refRBSheet}
               closeOnDragDown={true}
               closeOnPressMask={false}
               customStyles={{
                  wrapper: {
                     backgroundColor: "rgba(0,0,0,0.15)",
                     zIndex:1
                  },
                  draggableIcon: {
                     backgroundColor: "#000"
                  },
                  container:styles.bottomSheet
               }}
               closeOnPressBack={true}
               animationType={'slide'}
            >

               <Text style={{color:'black',fontSize:20,textAlign:'center'}}>Transformation Progress</Text>
               
               <View style={{flexDirection:'row',justifyContent: 'space-evenly',margin:10}}>
               {data.map((item,index)=>
               index==0?
               <View key={index} style={[styles.profilePicBig,{backgroundColor: 'rgba(107,179,51,0.2)',}]}>
                {
                     item.image==null?
                     <Image 
                     key={index}
                        source={require('../assets/profile.png')} 
                        style={styles.profilePicBig}
                     />
               :
                     <Image 
                        // source={{uri:filePath}}
                        key={index}
                        source={{uri:BaseUrl.BASE_URL+'/assets/profile_pics/'+item.image}}
                        style={styles.profilePicBig2}
                     />
                  }
               <Text style={{textAlign:'center',backgroundColor:'rgba(107,179,51,0.4)',padding:2,borderBottomLeftRadius:10,borderBottomRightRadius:10}}>{item.month}</Text>  
               </View>
               :
               <TouchableHighlight  key={index}  onPress={()=>{
                  setShow(true)
                  setTimeout(() => {
                     setShow(null)
                  }, 5000);
               }} 
               underlayColor={'#DDDDDD'}
               style={[styles.profilePicBig,{backgroundColor: 'rgba(107,179,51,0.2)',}]}>
                <View>
                   
                   {show==true?
                   <Animatable.View animation={show==true?'fadeIn':'fadeOut'} style={[styles.profilePicBig,{position:'absolute',top:0,zIndex:3,justifyContent: 'space-evenly',alignItems:'center',backgroundColor:'rgba(107,107,107,0.4)'}]}>
                        <TouchableHighlight 
                        // onPress={()=>openPicker()}
                        onPress={()=>onCameraPress()} 
 
                        style={{alignSelf:'center',backgroundColor:'rgba(255,255,255,0.5)',padding:10,borderRadius:50}}>
                           <Ionicons 
                              name="camera" 
                              size={30} 
                              color="white" 
                              style={{zIndex:2}}
                              // onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                           />
                        </TouchableHighlight>
                        
                        <TouchableHighlight 
                        // onPress={()=>selectFile()}
                        onPress={()=>onGalleryPress()}
                        style={{alignSelf:'center',backgroundColor:'rgba(255,255,255,0.5)',padding:10,borderRadius:50}}>
                           <Ionicons 
                              name="image-sharp" 
                              size={30} 
                              color="white" 
                              style={{zIndex:2}}
                              // onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                           />
                        </TouchableHighlight>
                   </Animatable.View>
                   :
                   null
                  }

                  {
                     isLoading==true?
                     <View style={[styles.profilePicBig2,{justifyContent:'center'}]}>
                     <ActivityIndicator size="large" color="#4b937c" />
                     </View>
                     :
                     item.image==null?
                     <Image 
                        source={require('../assets/profile.png')} 
                        style={styles.profilePicBig}
                     />
               :
                     <Image 
                        source={{uri:BaseUrl.BASE_URL+'/assets/profile_pics/'+item.image}} 
                        style={styles.profilePicBig2}
                     />
                  }
                 
               <Text style={{textAlign:'center',backgroundColor:'rgba(107,179,51,0.4)',padding:2,borderBottomLeftRadius:10,borderBottomRightRadius:10}}>{item.month}</Text>   
               </View>
               </TouchableHighlight>
               )}
               
               

               </View>

            </RBSheet>


          {/* </View> */}


          {/* </ScrollView> */}

          </StickyParallaxHeader>
      </View>
    );
  }