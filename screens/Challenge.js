import React, {useRef, useState,useEffect,useContext} from 'react';
import { Dimensions , View , StatusBar , Text , Image , TouchableOpacity , TouchableHighlight  , SafeAreaView  , RefreshControl} from 'react-native';
import { useNavigation , DrawerActions } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { buttons, styles } from '../styles/Styles';
import { HealthContext } from '../context/Context';
import RBSheet from "react-native-raw-bottom-sheet";
import Contacts from "react-native-contacts";

import { AvatarImages } from '../styles/AvatarImages';
import ResponseModal from '../components/ResponseModal';
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
export default function Challenge() {

    const navigation = useNavigation();
    
    const health = useContext(HealthContext);
    
    const refRBSheet = useRef();

    const [contacts, setContacts] = useState([]);
    const [requests, setRequests] = useState([]);
    const [logins, setLogins] = useState([]);
    const [offset, setOffset] = useState(0);
    const [scroll, setScroll] = useState(true);
    const [loading, setLoading] = useState(true);
    const [code, setCode] = useState();
    
    const [key, setKey] = useState(0);

    const BaseUrl = require('../styles/BaseUrl');

    const [modalView, setModelView] = useState(false);

    
    const [title, setTitle] = useState("");
    const [headerColor, setHeaderColor] = useState("");
    const [buttonText, setButtonText] = useState("");   
    const [subTitle, setSubTitle] = useState("");
    const [message, setMessage] = useState("");

    const [refreshing, setRefreshing] = useState(false);

   useEffect(() => {
      getData()
   },[]);
   // const wait = (timeout) => {
   //    return new Promise(resolve => setTimeout(resolve, timeout));
   //  }
    

   // const onRefresh = React.useCallback(() => {
   //   setRefreshing(true);
   //   wait(2000).then(() => setRefreshing(false));
   // }, []);
   const confirmChallenge = (challengeId,response) => {
      setCode(challengeId)
      const formData = new FormData()
  
      formData.append('id', health.user.id);
      formData.append('challengId', challengeId);
      formData.append('join', response);
  
      
      fetch(BaseUrl.BASE_URL+'/api/games/', {
        method: 'POST',
        body: formData,
      })
        .then(response => response.json())
        .then(data => {
          // navigation.navigate('profile')
          console.log('Success:', data);
          getData()
         //  setRequests(data)
         if(response=='yes'){
            Message('Nice','#6bb333','You Join game '+challengeId,'Start Walking','');
         }
          
        })
        .catch(error => {
          console.log('Error:', formData);
        });
  
    };

    const Message =(ti,cl,ms,bt,st)=>{
      setTitle(ti)
      setHeaderColor(cl)
      setMessage(ms),
      setButtonText(bt)
      setSubTitle(st)
      setModelView(true)
    }
   const getData = () => {
      var array =[]
      setRefreshing(true)
      fetch(BaseUrl.BASE_URL+'/api/challenge/'+health.user.id)
      .then((response) => response.json())
      .then((json) => {
      //    contacts.map((item)=>
      //       {item.phoneNumbers.map((ph)=>
      //          {json.map((log)=>
      //             ph.number==log.contactNo || ph.number.replace("0", "+94")==log.contactNo?array.push({rawContactId:item.rawContactId,displayName:item.displayName,avatar:log.avatar,id:log.id}):null
      //          )}
      //       )}
      //    )
      // setContacts(array)
      setRequests(json)
      // console.log(json)
      })
      .catch((error) => console.error(error))
      .finally(() => {setRefreshing(false)});
   
    }


    return (
      <SafeAreaView  style={[styles.container,{backgroundColor:'#f4f4f4'}]}>
         <StatusBar backgroundColor={'#6bb333'} barStyle={'light-content'} />
          <View style={[styles.header,{backgroundColor:'#f4f4f4',padding:0}]}>
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
            
<ScrollView 
horizontal={false}
// refreshControl={
//    <RefreshControl
//      refreshing={refreshing}
//      onRefresh={onRefresh}
//    />
//  }
// contentContainerStyle={{flexGrow:1,alignItems:'center',justifyContent:'center'}}
                  onScroll={(event)=>{
                        var currentOffset = event.nativeEvent.contentOffset.y;
                        var direction = currentOffset > offset ? 'down' : 'up';
                        // offset = currentOffset;
                        setOffset(currentOffset)
                        if (direction=='down'){
                           setScroll(false)
                        }
                        else if(direction=='up'){
                           setScroll(true)
                        }
                        // console.log(direction);
                      }
                  }
>
   <View style={{flex:1,alignItems:'center',justifyContent:'center',paddingBottom:60}}>
               
               <View style={{backgroundColor: 'rgba(255, 255, 255,0.5)',marginTop:70,paddingHorizontal:15,paddingVertical:10,width:'90%',borderRadius:10,flexDirection:'row',alignItems:'center',justifyContent:'space-between',borderWidth:1,borderColor:'white'}}>
               
               <View style={{flexDirection:'row',alignItems:'center'}}>
                  {
                  AvatarImages.map((av)=>
                              av.id==health.user.avatar?
                              <Image key={av.id} source={av.png} style={{width: 40,height:40,borderRadius:25,marginRight:10}} />
                              :null
                           )
                  }
                  <View>
                     <Text style={{fontSize:18}}>{health.user.email}</Text>
                     <Text>Level {health.user.level}</Text>
                  </View>
               </View>
                 
               </View>

                  
               {/* <Image source={require('../assets/run.png')} style={{height:160,resizeMode:'contain',margin:15}} /> */}
               {
                     LevelData.map((lv)=>
                     lv.id==health.user.level?
                     <View key={lv.id} style={{justifyContent:'center',alignItems:'center',marginTop:15}}>
                        <Image source={lv.png} style={{width: 200,height:200,resizeMode:'contain',tintColor:'#6bb333'}} />
                     {/* <View style={{padding:5,backgroundColor:'rgba(255, 255, 255,0.7)',paddingHorizontal:10,marginVertical:10,borderRadius:15}}>
                        <Text style={{fontSize:17,color:'#377006'}}>Walk Around {lv.name}</Text>
                        
                     </View> */}
                     </View>
                     :
                     null
                     )
                  }
                  <View style={{paddingHorizontal:15,paddingVertical:10,width:'90%'}}>
                     {/* <Text style={{fontSize:17}}>Create </Text> */}
                     </View>
                     


                     <View style={{paddingHorizontal:15,paddingVertical:10,width:'90%'}}>
                     {/* <Text style={{fontSize:17}}>Join </Text> */}
                     </View>
                     {requests.length==0?
                     null:
                        requests.map((rq)=>
                        
                      <View key={rq.id} style={{backgroundColor: 'rgba(255, 255, 255,0.5)',paddingHorizontal:15,paddingVertical:10,width:'90%',borderRadius:10,flexDirection:'row',alignItems:'center',justifyContent:'space-between',borderWidth:1,borderColor:'white',marginBottom:10}}>
                     
                     <View style={{width: '100%',}}>
                        
                     <Text style={{fontSize:16,fontWeight:'bold'}}>{rq.host}</Text>
                        <Text style={{fontSize:15,color:'gray',paddingBottom:5}}>sent you a request for walk challenge</Text>
                     
                     <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                        <Text style={{fontSize:22,fontWeight:'bold'}}>{rq.challengId}</Text>
                     <View style={{flexDirection:'row',alignItems:'center'}}>
                        <TouchableOpacity onPress={()=>confirmChallenge(rq.challengId,'yes')} style={{backgroundColor:'rgba(107, 179, 51,0.5)',paddingVertical:5,paddingHorizontal:10,borderRadius:15,marginLeft:10}}>
                           <Text style={{fontSize:16}}>Join</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>confirmChallenge(rq.challengId,'no')} style={{backgroundColor:'rgba(107, 179, 51,0.5)',marginLeft:10,paddingVertical:5,paddingHorizontal:10,borderRadius:15}}>
                           <Text style={{fontSize:16}}>Reject</Text>
                        </TouchableOpacity>
                        </View>
                     </View>
                     </View>
                     </View>
                     )  
                     }
                     

                     
                  </View>



                  
                  </ScrollView>

                  <TouchableOpacity onPress={()=>navigation.navigate('CreateChallenge')} style={{backgroundColor: '#6bb333',paddingHorizontal:5,paddingVertical:7,borderRadius:50,flexDirection:'row',alignItems:'center',justifyContent:'space-between',position:'absolute',bottom:20,right:20}}>
                     <View>
                        <Text style={{fontSize:17}}>{scroll?'    Create Challenge':''} </Text>
                     </View>
                        <TouchableOpacity onPress={()=>navigation.navigate('CreateChallenge')} style={{backgroundColor:'#6bb333',width:30,height:30,borderRadius:30,alignItems:'center',justifyContent:'center'}}>
                           <Text style={{fontSize:25,fontWeight:'bold',alignSelf:'center',marginLeft:-3}}>+</Text>
                        </TouchableOpacity>
                 
                     </TouchableOpacity>

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
                       
                            onPress={()=>{setModelView(false);navigation.navigate('Home',{challengId:code})}}>
                            <Text style={buttons.text}>{buttonText}</Text>
                        </TouchableHighlight>  
                        )}
                    
                }
                />
            {/* </ScrollView> */}
            
           
          {/* </Background> */}
        
      </SafeAreaView >
    );
  }