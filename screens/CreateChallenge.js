import React, {useRef, useState,useEffect,useContext} from 'react';
import { Dimensions , View , StatusBar , Text , Image , TouchableOpacity ,TouchableHighlight  , SafeAreaView  } from 'react-native';
import { useNavigation , DrawerActions } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { buttons, styles } from '../styles/Styles';
import { HealthContext } from '../context/Context';
import RBSheet from "react-native-raw-bottom-sheet";
import Contacts from "react-native-contacts";
import ResponseModal from '../components/ResponseModal';


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

import {LevelData} from '../styles/LevelData'
export default function CreateChallenge() {

    const navigation = useNavigation();
    
    const health = useContext(HealthContext);
    
    const refRBSheet = useRef();

    const [contacts, setContacts] = useState([]);
    const [logins, setLogins] = useState([]);
    const [players, setPlayers] = useState([health.user.id]);
    const [loading, setLoading] = useState(true);

    const [target, setTarget] = useState(1000);
    const [challengId, setChallengId] = useState(0);
    
    const [key, setKey] = useState(0);

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

   

   const generateChallengeId =()=>{
    var v = Date.now().toString();

    setChallengId(v.substring(v.length-6))
   }

   const arrayPush = (id)=>{
       
    var array = players
    
    array.push(id)
    setPlayers(array)
    console.log(array)
   }



   const createChallenge = () => {
    const formData = new FormData()

    formData.append('host_id', health.user.id);
    formData.append('players', JSON.stringify(players));
    formData.append('challengId', challengId);
    formData.append('target', target);

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
      });

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
      setModelView(true)
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
      <SafeAreaView  style={[styles.container,{backgroundColor:'#f4f4f4 '}]} onLayout={()=>{addContact()}}>
         <StatusBar backgroundColor={'#6bb333'} barStyle={'dark-content'} />
         <View style={[styles.header,{backgroundColor:'transparent',padding:0}]}>
             <Ionicons 
                name="arrow-back" 
                size={30} 
                color="black" 
                onPress={() => navigation.goBack()}
             /> 
             {
                     LevelData.map((lv)=>
                     lv.id==health.user.level?
                     <View key={lv.id} style={{padding:5,marginLeft:10,backgroundColor:'rgba(255, 255, 255,0.7)',paddingHorizontal:10,marginVertical:10,borderRadius:15}}>
                        <Text style={{fontSize:17,color:'#000'}}>Walk Around {lv.name}</Text>
                        
                     </View>
                     :
                     null
                     )
                  }
             {/* <Text style={{color:'black',fontSize:22,marginLeft:10}}>Challenge to Friends</Text> */}
          </View>
          
          {/* <Background> */}
          {/* <ScrollView style={{flex:1}}> */}
            
{/* <ScrollView style={{marginHorizontal: 0}}
// contentContainerStyle={{flexGrow:1,alignItems:'center',justifyContent:'center'}}
> */}
   <View style={{flex:1,justifyContent:'space-between'}}>
               <View style={{flex:1,alignItems:'center',justifyContent:'flex-start'}}>
               <View style={{backgroundColor: 'rgba(255, 255, 255,0.7)',marginTop:70,paddingHorizontal:15,paddingVertical:10,width:'90%',borderRadius:10,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
               
               <View style={{flexDirection:'row'}}>
                  {
                  AvatarImages.map((av)=>
                              av.id==health.user.avatar?
                              <Image key={av.id} source={av.png} style={{width: 35,height:35,borderRadius:25,marginRight:10}} />
                              :null
                           )
                  }
                  <View>
                     <Text style={{fontSize:17}}>{health.user.email}</Text>
                     <Text>Level {health.user.level}</Text>
                  </View>
               </View>
                 
               </View>
               <View style={{paddingVertical:50}}>
                   <Text style={{fontSize:17}}>Challenge Id  {challengId}</Text>
               </View>

               <View style={{backgroundColor: 'rgba(255, 255, 255,0.7)',marginVertical:10,paddingHorizontal:15,paddingVertical:10,width:'90%',borderRadius:10,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
               
                  <Text style={{fontSize:16,alignSelf:'center'}}>Add Friends</Text>
                  
               <TouchableOpacity onPress={()=>refRBSheet.current.open()} style={{backgroundColor:'#6bb333',paddingHorizontal:10,paddingVertical:5,borderRadius:30,alignItems:'center',justifyContent:'center'}}>
                           <Text style={{fontSize:16,alignSelf:'center'}}>Add</Text>
                </TouchableOpacity>
                 
               </View>

               <View style={{backgroundColor: 'rgba(255, 255, 255,0.7)',marginVertical:10,paddingHorizontal:15,paddingVertical:10,width:'90%',borderRadius:10,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
               
                  <Text style={{fontSize:16,alignSelf:'center'}}>Target</Text>
                
                <View style={{flexDirection:'row',alignItems:'center'}}>  
               <TouchableOpacity onPress={()=>minusTarget()}  style={{backgroundColor:'#6bb333',paddingHorizontal:12,paddingVertical:1,borderRadius:30,alignItems:'center',justifyContent:'center',marginRight:5}}>
                           <Text style={{fontSize:25,alignSelf:'center'}}>-</Text>
                </TouchableOpacity>

                <Text style={{fontSize:18,paddingVertical:5,paddingHorizontal:15,backgroundColor:'#e0e0e0',borderRadius:50,width:100,textAlign:'center'}}>{target}</Text>

                <TouchableOpacity  onPress={()=>addTarget()} style={{backgroundColor:'#6bb333',paddingHorizontal:10,paddingVertical:5,borderRadius:30,alignItems:'center',justifyContent:'center',marginLeft:5}}>
                           <Text style={{fontSize:17,alignSelf:'center'}}>+</Text>
                </TouchableOpacity>
                </View>

                </View>
               </View>

                  <View style={{marginBottom:15,alignItems:'center'}}>
               <TouchableOpacity  onPress={()=>createChallenge()} style={{backgroundColor:'#6bb333',paddingHorizontal:10,paddingVertical:5,borderRadius:30,alignItems:'center',justifyContent:'center',marginLeft:5}}>
                           <Text style={{fontSize:17,alignSelf:'center'}}>Create Challenge</Text>
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
               closeOnPressMask={true}
            >

               <Text style={{color:'black',fontSize:20,textAlign:'center'}}>Friends You Know</Text>
               
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


                  {/* </ScrollView> */}
                  
            {/* </ScrollView> */}
            
           
          {/* </Background> */}
        
      </SafeAreaView >
    );
  }