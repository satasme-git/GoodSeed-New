import React, {useRef, useState,useEffect,useContext} from 'react';
import { Dimensions , View , StatusBar , Text , Image , TouchableOpacity ,TouchableHighlight  , SafeAreaView , PermissionsAndroid , LogBox } from 'react-native';
import { useNavigation , DrawerActions } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { buttons, styles } from '../styles/Styles';
import { HealthContext } from '../context/Context';
import RBSheet from "react-native-raw-bottom-sheet";
import Contacts from "react-native-contacts";
import ResponseModal from '../components/ResponseModal';
import * as Animatable from 'react-native-animatable';

import { AvatarImages } from '../styles/AvatarImages';
import { Background } from '../styles/Background';
import {
   BallIndicator,
   BarIndicator,
   DotIndicator,
   MaterialIndicator,
   PacmanIndicator,
   PulseIndicator,
   SkypeIndicator,
   UIActivityIndicator,
   WaveIndicator,
 } from 'react-native-indicators';
 
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { ScrollView } from 'react-native-gesture-handler';
import { SwipeablePanel } from 'rn-swipeable-panel';

import {LevelData} from '../styles/LevelData'

LogBox.ignoreLogs(['Warning: Each child in a list should have a unique "key" prop.']);

export default function CreateChallenge() {

    const navigation = useNavigation();
    
    const health = useContext(HealthContext);
    
    const refRBSheet = useRef();

    const [contacts, setContacts] = useState([]);
    const [logins, setLogins] = useState([]);
    const [players, setPlayers] = useState([health.user.id]);
    const [not, setNot] = useState([]);
    const [loading, setLoading] = useState(true);

    const [group, setGroup] = useState(true);

    const [target, setTarget] = useState(1000);
    const [challengId, setChallengId] = useState(0);
    
    const [key, setKey] = useState(0);
    const [key2, setKey2] = useState(1000);

    const [modalView, setModelView] = useState(false);

    
    const [title, setTitle] = useState("");
    const [headerColor, setHeaderColor] = useState("");
    const [buttonText, setButtonText] = useState("");   
    const [subTitle, setSubTitle] = useState("");
    const [message, setMessage] = useState("");

    const BaseUrl = require('../styles/BaseUrl');

   useEffect(() => {
      // addContact()
      // getLogins()
      // setKey(1)
      generateChallengeId()
   },[]);   

  const [isPanelActive, setIsPanelActive] = useState(false);
  const openPanel = () => {
   setIsPanelActive(true);
 };

 const closePanel = () => {
   setIsPanelActive(false);
 }; 

 const [panelProps, setPanelProps] = useState({
   fullWidth: true,
   showCloseButton: true,
   noBackgroundOpacity:false,
   closeRootStyle:{backgroundColor:'gray',width: 20,height:20,},
   closeIconStyle:{width: 10},
   // noBar:true,
   onClose: () => closePanel(),
   onPressCloseButton: () => closePanel(),
   // ...or any prop you want
 });

   const generateChallengeId =()=>{
    var v = Date.now().toString();

    setChallengId(v.substring(v.length-6))
   }

   const arrayPush = (id)=>{
       
    var array = players
    var array2 = not
    array.push(id)
    array2.push(id)
    setPlayers(array)
    setNot(array2)
    console.log(array)
   }



   const createChallenge = () => {
      Message('Please wait','#fff','','','')
      setModelView(true)
      // var arr =JSON.stringify(players)
   //    let not  = players.filter(function(item) {
   //       return item !== health.user.id
   //   })
     console.log(not,players)
   //   var arr = ;
    const formData = new FormData()

    formData.append('host_id', health.user.id);
    formData.append('players', JSON.stringify(players));
    formData.append('challengId', challengId);
    formData.append('target', target);
    formData.append('not', JSON.stringify(not));

    if(group==true){
      players.length==1?
      Message('Error','#e25b5b','Add Atleast 1 Friend','Try Again','')
    :
    fetch(BaseUrl.BASE_URL+'/api/challenge/', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        // navigation.navigate('profile')
        console.log('Success:', data);
        Message('Nice','#6bb333','You Created Challenge Successfully','Start Walking','');
      })
      .catch(error => {
        console.log('Error:', formData);
        Message('Error','#e25b5b','Something went wrong','Try Again','')
      });
    }
    else{
      fetch(BaseUrl.BASE_URL+'/api/challenge/', {
         method: 'POST',
         body: formData,
       })
         .then(response => response.json())
         .then(data => {
           // navigation.navigate('profile')
           console.log('Success:', data);
           Message('Nice','#6bb333','You Created Challenge Successfully','Start Walking','');
            health.getGameData(health.user.id)
         })
         .catch(error => {
           console.log('Error:', formData);
           Message('Error','#e25b5b','Something went wrong','Try Again','')
         });
    }


  };

  const requestContactsPermission = async () => { 
   try {
     const granted = await PermissionsAndroid.request(
       PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      //  {
      //    title: "GoodSeed App Permission",
      //    message:
      //      "GoodSeed App needs access to your Contacts " ,
      //    buttonNeutral: "Ask Me Later",
      //    buttonNegative: "Cancel",
      //    buttonPositive: "OK"
      //  }
     );
     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
       console.log("You can use the camera");
       addContact()
     } else {
       console.log("Camera permission denied");
     }
   } catch (err) {
     console.warn(err);
   }
 };
   const getLogins =()=>{
      
      fetch(BaseUrl.BASE_URL+'/api/LoginController/')
      .then((response) => response.json())
      .then((json) => {
         setLogins(json)
         // health.setProPic(BaseUrl.BASE_URL+'/assets/profile_pics/'+json[1].image)
         // console.log(BaseUrl.BASE_URL+'/assets/profile_pics/'+json[1].image)
      })
      .catch((error) => {setLoading(false)})
      .finally(() => {setLoading(false)});

    }

    const Message =(ti,cl,ms,bt,st)=>{
      setTitle(ti)
      setHeaderColor(cl)
      setMessage(ms),
      setButtonText(bt)
      setSubTitle(st)
    }

   const addContact = () => {
      getLogins()
      var array =[]
      
      Contacts.getAll().then(contacts => {
         fetch(BaseUrl.BASE_URL+'/api/LoginController/'+health.user.level)
      .then((response) => response.json())
      .then((json) => {
         contacts.map((item)=>
            {item.phoneNumbers.map((ph)=>
               {json.map((log)=>
                  ph.number==log.contactNo || ph.number.replace("0", "+94")==log.contactNo ?array.push({rawContactId:item.rawContactId,displayName:item.displayName,avatar:log.avatar,id:log.id}):null
               )}
            )}
         )
      setContacts(array)
      })
      .catch((error) => console.error(error))
      .finally(() => {});
   })

    }

    const addTarget =()=>{
        if(target>0){
            setTarget(target+1000)
        }
    }
    const minusTarget =()=>{
        if(target>1000){
            setTarget(target-1000)
        }
    }
    return (
      <SafeAreaView  style={[styles.container,{backgroundColor:'#fff '}]} onLayout={()=>{requestContactsPermission()}}>
         <StatusBar backgroundColor={'#6bb333'} barStyle={'light-content'} />
         <View style={[styles.header,{backgroundColor:'#6bb333',padding:0,flexDirection:'column',height:185,borderBottomLeftRadius:25,borderBottomRightRadius:25,zIndex:1}]}>
             <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',alignSelf:'flex-start',width:windowWidth}}>
             <Ionicons 
                name="arrow-back" 
                size={30} 
                color="#FFF" 
                onPress={() => navigation.goBack()}
             /> 
             
                   <Text style={{fontSize:13,position:'absolute',right:25,backgroundColor:'white',paddingVertical:3,paddingHorizontal:7,borderRadius:10,color:'#6bb333'}}>Challenge Id  {challengId}</Text>
               
                  </View>
             {/* <Text style={{color:'black',fontSize:22,marginLeft:10}}>Challenge to Friends</Text> */}
             <View style={{alignItems:'center'}}>
                  {
                  AvatarImages.map((av)=>
                              av.id==health.user.avatar?
                              <View key={av.id} style={{alignItems:'center'}}>
                                 <Image source={av.png} style={{width:60,height: 60,borderRadius:50,marginTop:2.5,zIndex:5}} />
                                    <View style={{borderRadius:50,backgroundColor:'rgba(255,255,255,0.9)',width:65,height:65,position: 'absolute',top:0}} />
                              </View>
                              // <Image key={av.id} source={av.png} style={{width: 60,height:60,borderRadius:60}} />
                              :null
                           )
                  }
                  <View>
                     <Text style={{fontSize:17,color:'white'}}>{health.user.email}</Text>
                     {/* <Text>Level {health.user.level}</Text> */}
                     
                  </View>
                  <View style={{flexDirection:'row',backgroundColor:'white',marginVertical:12,width:windowWidth-30,borderRadius:15,padding:7,alignItems:'center',marginLeft:-10}}>
                
                <View style={{backgroundColor:'#5CA3FC',height:30,width:30,borderRadius:30,alignItems:'center',justifyContent:'center',marginRight:10}}>
              <Image source={require('../assets/crown.png')} style={{width:20,height:20,borderRadius:25}} />
              </View>

              <Text style={{fontSize:15,color:'rgb(107, 179, 51)'}}>Level {health.user.level}</Text>
              {
                     LevelData.map((lv)=>
                     lv.id==health.user.level?
                     <View key={lv.id} style={{padding:5,marginLeft:10}}>
                        <Text style={{fontSize:14,color:'rgb(107, 179, 51)',fontWeight:'bold'}}>Walk Around {lv.name}</Text>
                        
                     </View>
                     :
                     null
                     )
                  }
              </View>
               </View>


          </View>
          
          {/* <Background> */}
          {/* <ScrollView style={{flex:1}}> */}
            
{/* <ScrollView style={{marginHorizontal: 0}}
// contentContainerStyle={{flexGrow:1,alignItems:'center',justifyContent:'center'}}
> */}
   <View style={{flex:1,justifyContent:'space-between',backgroundColor:'white',zIndex:-1}}>
               <View style={{flex:1,alignItems:'center',justifyContent:'flex-start'}}>
               {/* <View style={{backgroundColor: 'rgba(255, 255, 255,0.7)',marginTop:70,paddingHorizontal:15,paddingVertical:10,width:'90%',borderRadius:10,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
               
               
                 
               </View> */}
               {/* <View style={{paddingVertical:50}}>
                   <Text style={{fontSize:17}}>Challenge Id  {challengId}</Text>
               </View> */}

               <View style={{flexDirection:'row',marginTop:180,justifyContent:'space-evenly',width:windowWidth,zIndex:1,backgroundColor:'white',padding:10,paddingTop:20}}>
                  
                  <TouchableOpacity onPress={()=>{setGroup(true);setKey2(key2+1)}} style={{backgroundColor:group?'#6bb333':'white',borderWidth:2,alignSelf:'flex-end',paddingVertical:5,paddingHorizontal:20,borderRadius:20,borderColor:'#6bb333'}}>
                     <View>
                        <Text style={{fontSize:16,color:!group?'black':'white'}}>Group</Text>
                     </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={()=>{setGroup(false);setKey2(key2+1)}} style={{backgroundColor:group?'white':'#6bb333',borderWidth:2,alignSelf:'flex-end',paddingVertical:5,paddingHorizontal:20,borderRadius:20,borderColor:'#6bb333'}}>
                     <View>
                        <Text style={{fontSize:16,color:!group?'white':'black'}}>Individual</Text>
                     </View>
                  </TouchableOpacity>

               </View>

               {
                  group?
                  <Animatable.View key={key2} animation={'fadeInDown'} duration={300} style={{flex:1,alignItems:'center',justifyContent:'flex-start',width:windowWidth,zIndex:1}}>
               <View style={{backgroundColor: '#6bb333',marginVertical:10,paddingHorizontal:15,paddingVertical:10,width:'90%',borderRadius:10,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
               <View>
                  <Text style={{fontSize:16,alignSelf:'center',color:'white'}}>Add Friends</Text>
                  <View style={{flexDirection:'row',alignSelf:'flex-start',paddingVertical:5}}>              
                  
                  {AvatarImages.map((av)=>
                      av.id<4?
                      <View key={av.id} style={{backgroundColor:'white',height:30,width:30,borderRadius:30,alignItems:'center',justifyContent:'center',marginRight:-7}}>
                      <Image source={av.png} style={{width:27,height:27,borderRadius:27}} />
                      </View>
                     :
                     null
                                          
                  )
                  }
                  </View> 
               </View>   
               <TouchableOpacity 
               // onPress={()=>refRBSheet.current.open()}
               onPress={()=>openPanel()} 
               style={{backgroundColor:'#fff',paddingHorizontal:20,paddingVertical:5,borderRadius:30,alignItems:'center',justifyContent:'center'}}>
                           <Text style={{fontSize:16,alignSelf:'center',color:'#6bb333'}}>Add</Text>
                </TouchableOpacity>
                 
               </View>

               <View style={{backgroundColor: '#6bb333',marginVertical:10,paddingHorizontal:15,paddingVertical:10,width:'90%',borderRadius:10,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
               
                  <Text style={{fontSize:16,alignSelf:'center',color:'#fff'}}>Target</Text>
                
                <View style={{flexDirection:'row',alignItems:'center'}}>  
               <TouchableOpacity onPress={()=>minusTarget()}  style={{backgroundColor:'#fff',paddingHorizontal:12,paddingVertical:1,borderRadius:30,alignItems:'center',justifyContent:'center',marginRight:5}}>
                           <Text style={{fontSize:25,alignSelf:'center',color:'#6bb333'}}>-</Text>
                </TouchableOpacity>

                <Text style={{fontSize:18,paddingVertical:5,paddingHorizontal:15,backgroundColor:'#fff',borderRadius:50,width:100,textAlign:'center',color:'#6bb333'}}>{target}</Text>

                <TouchableOpacity  onPress={()=>addTarget()} style={{backgroundColor:'#fff',paddingHorizontal:10,paddingVertical:5,borderRadius:30,alignItems:'center',justifyContent:'center',marginLeft:5}}>
                           <Text style={{fontSize:17,alignSelf:'center',color:'#6bb333'}}>+</Text>
                </TouchableOpacity>
                </View>

                </View>
                </Animatable.View>
                :
                null
                }


               </View>

                  <View style={{marginBottom:15,alignItems:'center'}}>
               <TouchableOpacity  onPress={()=>createChallenge()} style={{backgroundColor:'#6bb333',paddingHorizontal:10,paddingVertical:5,borderRadius:30,alignItems:'center',justifyContent:'center',marginLeft:5}}>
                           <Text style={{fontSize:17,alignSelf:'center',color:'#fff'}}>Create Challenge</Text>
                </TouchableOpacity>
                </View>

               {/* <Image source={require('../assets/run.png')} style={{height:160,resizeMode:'contain',margin:15}} /> */}
               
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
               // closeOnPressMask={true}
            >

               <Text style={{color:'black',fontSize:20,textAlign:'center'}}>Friends You Know</Text>
               <ScrollView style={{marginBottom:35}}>
               <View style={{backgroundColor:'white',width:'100%',paddingHorizontal:20,paddingVertical:20,borderTopLeftRadius:50,borderTopRightRadius:50,minHeight:200}}>
                  {/* <Text style={{width: '90%',paddingVertical:10,fontSize:20}}></Text> */}
                  
                  {
                  contacts == []?
                  <Text>No Friends Found </Text>
                  :
                  loading==true?
                  <View style={{flex:1}}>
                     <DotIndicator color={'rgb(107, 179, 51)'} size={7}/>
                  </View>
                  :
                     contacts.map((con)=>
                     <View key={con.rawContactId} style={{backgroundColor:'rgba(107, 179, 51,0.1)',width:'100%',padding:5,paddingVertical:10,margin:2,borderRadius:5,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                        {/* <Text>{con.avatar}</Text> */}
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                        {con.avatar==null?
                           <View key={1} style={{backgroundColor:'rgba(0,0,0,0.2)',width: 27,height:27,borderRadius:25,marginHorizontal:7}} />
                           :
                           AvatarImages.map((av)=>
                           
                              av.id==con.avatar?
                              <Image key={av.id} source={av.png} style={{width: 27,height:27,borderRadius:25,marginHorizontal:7}} />
                              :null
                           )
                        }
                        
                        <Text style={{fontSize:16}}>{con.displayName}</Text>
                        </View>
                            
                         {/* { 
                         players==[]?<TouchableOpacity onPress={()=>arrayPush(con.id)} style={{backgroundColor:'rgb(107, 179, 51)',paddingHorizontal:15,paddingVertical:5,marginRight:5,borderRadius:20}}>
                            <View>
                            <Text style={{color:'white'}}>Invite</Text>
                            </View>
                        </TouchableOpacity>
                        :
                         players.map((pl)=>
                         pl==con.id? */}
                         {
                            players.includes(con.id)?
                           //  <TouchableOpacity onPress={()=>arrayPush(con.id)}>
                              <View style={{backgroundColor:'gray',paddingHorizontal:15,paddingVertical:5,marginRight:5,borderRadius:20}}>
                                 <Text style={{color:'white'}}>Invite sent</Text>
                              </View>
                           // </TouchableOpacity>
                            :
                            <TouchableOpacity key={key} onPress={()=>{arrayPush(con.id),setKey(key+1)}} style={{backgroundColor:'rgb(107, 179, 51)',paddingHorizontal:15,paddingVertical:5,marginRight:5,borderRadius:20}}>
                              <View>
                                 <Text style={{color:'white'}}>Invite</Text>
                              </View>
                           </TouchableOpacity>
                         }
                         {/* <TouchableOpacity onPress={()=>arrayPush(con.id)} style={{backgroundColor:'rgb(107, 179, 51)',paddingHorizontal:15,paddingVertical:5,marginRight:5,borderRadius:20}}>
                            <View>
                            <Text style={{color:'white'}}>Invite</Text>
                            </View>
                        </TouchableOpacity> */}
                         {/* ) */}
                             
                             
                     {/* }     */}
                    
                       
                     </View>
                     )
                  }
                  
                  </View>
               </ScrollView>
            </RBSheet>



            <ResponseModal 
                view={modalView}
                title={title}
                message={message}
                headerColor={headerColor}
                buttonText={buttonText}
                RButton={()=>{
                //     return(
                //         title=='Error'?
                //       <TouchableHighlight style={{alignSelf:'flex-end',borderWidth:1,paddingHorizontal:15,paddingVertical:2,borderRadius:5}} onPress={()=>{setModelView(false)}}>
                //         <Text style={buttons.text}>{buttonText}</Text>
                //     </TouchableHighlight> :
                //     <TouchableHighlight style={{alignSelf:'flex-end',borderWidth:1,paddingHorizontal:15,paddingVertical:2,borderRadius:5}} onPress={()=>{setModelView(false);navigation.navigate('Login')}}>
                //     <Text style={buttons.text}>{buttonText}</Text>
                // </TouchableHighlight>  
                //     )}

                    
                        return(
                            title=='Error'?
    
                        <TouchableHighlight underlayColor={'#DDDDDD'} style={buttons.modalButton}
                        onPress={()=>{setModelView(false)}}>
    
                            <Text style={buttons.text}>{buttonText}</Text>
    
                        </TouchableHighlight> 
                        :
                        <TouchableHighlight underlayColor={'#DDDDDD'} style={buttons.modalButton} 
                       
                            onPress={()=>{setModelView(false);navigation.navigate('Home',{challengId:challengId})}}>
                            <Text style={buttons.text}>{buttonText}</Text>
                        </TouchableHighlight>  
                        )}
                    
                }
                />
              
                  </View>
                  {/* <View style={{zIndex:1}}> */}
<SwipeablePanel onClose={()=>{setIsPanelActive(false),setTimeout(() => {setIsPanelActive(true)}, 100)}} onlySmall={false}  smallPanelHeight={windowHeight/2} {...panelProps} isActive={isPanelActive} style={{zIndex:5,elevation:20,paddingHorizontal: 20,}}>
                  <Text style={{color:'black',fontSize:20,textAlign:'center'}}>Friends You Know</Text>
               <ScrollView style={{marginBottom:35}}>
               <View style={{backgroundColor:'white',width:'100%',paddingHorizontal:20,paddingVertical:20,borderTopLeftRadius:50,borderTopRightRadius:50,minHeight:200}}>
                  {/* <Text style={{width: '90%',paddingVertical:10,fontSize:20}}></Text> */}
                  
                  {
                  contacts == []?
                  <Text>No Friends Found </Text>
                  :
                  loading==true?
                  <View style={{flex:1}}>
                     <DotIndicator color={'rgb(107, 179, 51)'} size={7}/>
                  </View>
                  :
                     contacts.map((con,index)=>
                     <View key={index} style={{backgroundColor:'rgba(107, 179, 51,0.1)',width:'100%',padding:5,paddingVertical:10,margin:2,borderRadius:5,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                        {/* <Text>{con.avatar}</Text> */}
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                        {con.avatar==null?
                           <View key={1} style={{backgroundColor:'rgba(0,0,0,0.2)',width: 27,height:27,borderRadius:25,marginHorizontal:7}} />
                           :
                           AvatarImages.map((av)=>
                           
                              av.id==con.avatar?
                              <Image key={av.id} source={av.png} style={{width: 27,height:27,borderRadius:25,marginHorizontal:7}} />
                              :null
                           )
                        }
                        
                        <Text style={{fontSize:16}}>{con.displayName}</Text>
                        </View>
                            
                         {/* { 
                         players==[]?<TouchableOpacity onPress={()=>arrayPush(con.id)} style={{backgroundColor:'rgb(107, 179, 51)',paddingHorizontal:15,paddingVertical:5,marginRight:5,borderRadius:20}}>
                            <View>
                            <Text style={{color:'white'}}>Invite</Text>
                            </View>
                        </TouchableOpacity>
                        :
                         players.map((pl)=>
                         pl==con.id? */}
                         {
                            players.includes(con.id)?
                           //  <TouchableOpacity onPress={()=>arrayPush(con.id)}>
                              <View style={{backgroundColor:'gray',paddingHorizontal:15,paddingVertical:5,marginRight:5,borderRadius:20}}>
                                 <Text style={{color:'white'}}>Invite sent</Text>
                              </View>
                           // </TouchableOpacity>
                            :
                            <TouchableOpacity key={key} onPress={()=>{arrayPush(con.id),setKey(key+1)}} style={{backgroundColor:'rgb(107, 179, 51)',paddingHorizontal:15,paddingVertical:5,marginRight:5,borderRadius:20}}>
                              <View>
                                 <Text style={{color:'white'}}>Invite</Text>
                              </View>
                           </TouchableOpacity>
                         }
                         {/* <TouchableOpacity onPress={()=>arrayPush(con.id)} style={{backgroundColor:'rgb(107, 179, 51)',paddingHorizontal:15,paddingVertical:5,marginRight:5,borderRadius:20}}>
                            <View>
                            <Text style={{color:'white'}}>Invite</Text>
                            </View>
                        </TouchableOpacity> */}
                         {/* ) */}
                             
                             
                     {/* }     */}
                    
                       
                     </View>
                     )
                  }
                  
                  </View>
               </ScrollView>
     </SwipeablePanel>
     {/* </View> */}
                  
                  {/* </ScrollView> */}
                  
            {/* </ScrollView> */}
            
           
          {/* </Background> */}
        
      </SafeAreaView >
    );
  }