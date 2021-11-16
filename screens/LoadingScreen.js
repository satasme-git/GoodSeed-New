import React, { useEffect , useRef,useContext, useState } from 'react';
import { Button , View , Text , TouchableOpacity, Animated, Image,TouchableHighlight} from 'react-native';
import { useNavigation , DrawerActions } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { buttons, styles } from '../styles/Styles';
import { ScrollView } from 'react-native-gesture-handler';
import StickyParallaxHeader from 'react-native-sticky-parallax-header'
import { HealthContext } from '../context/Context';
import { AvatarImages } from '../styles/AvatarImages';
import { LevelData } from '../styles/LevelData';
import { SwipeablePanel } from 'rn-swipeable-panel';
import ResponseModal from '../components/ResponseModal';
export default function LoadingScreen () {

    const navigation = useNavigation();

    const [image,setImage] = useState(null)
    const [refreshing, setRefreshing] = useState(false);
    const [requests, setRequests] = useState([]);
    const [games, setGames] = useState([]);

    const BaseUrl = require('../styles/BaseUrl');

    const [modalView, setModelView] = useState(false);

    
    const [title, setTitle] = useState("");
    const [headerColor, setHeaderColor] = useState("");
    const [buttonText, setButtonText] = useState("");   
    const [subTitle, setSubTitle] = useState("");
    const [message, setMessage] = useState("");
    const [code, setCode] = useState();

    // const [refreshing, setRefreshing] = useState(false);

    // const [contacts, setContacts] = useState([]);
    useEffect(() => {
    AvatarImages.map((av)=>
        {if (av.id==health.user.avatar){
            setImage(av.png)
        }}
                             
    )
    getData()   
    getGameData()      
    },[]);
    const scroll = useRef(new Animated.Value(0)).current;

    const health = useContext(HealthContext);
    const [panelProps, setPanelProps] = useState({
      fullWidth: true,
      showCloseButton: true,
      noBackgroundOpacity:true,
      closeRootStyle:{backgroundColor:'gray',width: 20,height:20,},
      closeIconStyle:{width: 10},
      // noBar:true,
      onClose: () => closePanel(),
      onPressCloseButton: () => closePanel(),
      // ...or any prop you want
    });
    const [isPanelActive, setIsPanelActive] = useState(false);
  
    const openPanel = () => {
      setIsPanelActive(true);
    };
  
    const closePanel = () => {
      setIsPanelActive(false);
    };
    
    const getGameData = () => {
        var array =[]
        setRefreshing(true)
        fetch(BaseUrl.BASE_URL+'/api/games/'+health.user.id)
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
        setGames(json)
        console.log(json)
        })
        .catch((error) => console.error(error))
        .finally(() => {setRefreshing(false)});
     
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
      
    const renderContent = (label) => (
        <View>
          <Text>{label}</Text>
        </View>
      )
    
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
                
                <Image source={image} style={{width:60,height: 60,borderRadius:50,marginTop:2.5,zIndex:5}} />
                <View style={{borderRadius:50,backgroundColor:'rgba(255,255,255,0.9)',width:65,height:65,position: 'absolute',top:0}} />
              {/* <View> */}
              <Text style={{fontSize:17,color:'white',marginTop:5}}>{health.user.email}</Text>
              
              <View style={{flexDirection:'row',backgroundColor:'white',margin:12,width: '95%',borderRadius:15,padding:7,alignItems:'center'}}>
                
                <View style={{backgroundColor:'#5CA3FC',height:30,width:30,borderRadius:30,alignItems:'center',justifyContent:'center',marginRight:10}}>
              <Image source={require('../assets/crown.png')} style={{width:20,height:20,borderRadius:25}} />
              </View>

              <Text style={{fontSize:15,color:'rgb(107, 179, 51)'}}>Level {health.user.level}</Text>
              </View>

            </Animated.View>
          </View>
        )
      }
    
      const renderHeader = () => {
        const opacity = scroll.interpolate({
          inputRange: [0, 100, 160],
          outputRange: [0,0, 1],
          extrapolate: 'clamp'
        })
    
        return (
          <View style={{backgroundColor:'rgb(107, 179, 51)'}}>
            <Animated.View style={{ opacity ,flexDirection:'row',alignItems:'center',padding:10}}>
                <Ionicons 
                name="menu-outline" 
                size={30} 
                color="#fff" 
                onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                /> 
                <Image source={image} style={{width:25,height: 25,borderRadius:50,marginLeft:10,}} />
              <Text style={{paddingLeft:10,fontSize:17}}>{health.user.email}</Text>
            </Animated.View>
          </View>
        )
      }
    return (
        <View style={styles.container}>
             
            {/* <View style={styles.header,{backgroundColor:'transparent'}}> */}
            <View style={{position:'absolute',zIndex:3,top:10,left: 10,}}>
              <Ionicons 
                name="menu-outline" 
                size={30} 
                color="#fff" 
                onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
             />   
            {/* </View> */}
            
        
          </View>
          <TouchableOpacity  onPress={() => openPanel()} style={{position:'absolute',zIndex:3,top:10,right: 10,alignItems:'flex-end'}}>
              {/* <Ionicons 
                name="menu-outline" 
                size={30} 
                color="black" 
              
             />    */}
             <Text style={{backgroundColor:'red',color:'white',width:17,height:17,borderRadius:25,textAlignVertical:'center',textAlign:'center',fontSize:12,marginBottom:-10,zIndex:6}}>{requests.length}</Text>
             <Text style={{color:"#6bb333",backgroundColor:"rgba(255,255,255,0.8)",padding:5,paddingHorizontal:10,borderRadius:20}}>Requests</Text>
            {/* </View> */}
            
        
          </TouchableOpacity>
{/*
          <ScrollView style={{marginTop:70,flex:1}}>


              <Text>Today Challenges</Text>
              <TouchableOpacity style={{padding:10,margin:10,backgroundColor: 'red',}} onPress={()=>navigation.navigate('LevelScreen')}>
                  <Text>Select Levels</Text>
              </TouchableOpacity>
          </ScrollView> */}
          <StickyParallaxHeader
        //   headerType={'AvatarHeader'}
          backgroundColor={'transparent'}
          bounces={true}
        foreground={renderForeground()}
        header={renderHeader()}
        parallaxHeight={10}
        // image={null}
        headerHeight={50}
        headerSize={() => {}}
        onEndReached={() => {}}
        scrollEvent={Animated.event([{ nativeEvent: { contentOffset: { y: scroll } } }])}
        leftTopIcon={require('../assets/menu.png')}
        leftTopIconOnPress={()=>navigation.dispatch(DrawerActions.toggleDrawer())}
        image={image}
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
            <View style={{marginTop:140,padding:10}}>
                {/* <Text>xxx</Text> */}

                <TouchableOpacity style={{margin:10,backgroundColor: 'rgb(107, 179, 51)',borderRadius:15,elevation:5}} onPress={()=>navigation.navigate('LevelScreen')}>
                  <Text style={{fontSize:18,color:'white',paddingVertical:5,paddingHorizontal:10}}>Current {<Text style={{fontWeight:'bold'}}>Level</Text>} </Text>
                  {
                     LevelData.map((lv)=>
                     lv.id==health.user.level?
                     <View key={lv.id} style={{paddingHorizontal:10,width:'50%'}}>
                        <Text style={{fontSize:14,color:'#fff'}}>Walk Around {lv.name}</Text>
                        
                     </View>
                     :
                     null
                     )
                  }
              
              <View style={{flexDirection:'row',alignSelf:'flex-start',padding:10}}>
              <View style={{backgroundColor:'#5CA3FC',height:30,width:30,borderRadius:30,alignItems:'center',justifyContent:'center',marginRight:-7}}>
              <Image source={require('../assets/crown.png')} style={{width:20,height:20,borderRadius:25}} />
              </View>
              <View style={{backgroundColor:'#BC75CC',height:30,width:30,borderRadius:30,alignItems:'center',justifyContent:'center',marginRight:-7}}>
              <Image source={require('../assets/crown.png')} style={{width:20,height:20,borderRadius:25}} />
              </View>
              <View style={{backgroundColor:'#FBDF00',height:30,width:30,borderRadius:30,alignItems:'center',justifyContent:'center',marginRight:-7}}>
              <Image source={require('../assets/crown.png')} style={{width:20,height:20,borderRadius:25}} />
              </View>

              </View>

                  <View style={{backgroundColor:'#fff',paddingHorizontal:10,paddingVertical:7,borderBottomLeftRadius:15,borderBottomRightRadius:15,alignItems:'center'}}>
                    <Text style={{fontSize:17,color:'#6bb333'}}>View</Text>
                  </View>
                </TouchableOpacity>

                
                <TouchableOpacity style={{margin:10,backgroundColor: 'rgb(107, 179, 51)',borderRadius:15,elevation:5}} 
                onPress={()=>navigation.navigate('CreateChallenge')}>
                      <Text style={{fontSize:18,color:'white',paddingVertical:5,paddingHorizontal:10}}>Create {<Text style={{fontWeight:'bold'}}>Challenge</Text>} </Text>
                     {/* <Image source={require('../assets/run.png')} style={{width:100,height:100,alignSelf:'flex-end'}} /> */}
                     
                     
                     <Image source={require('../assets/crown.png')} style={{width:20,height:20,borderRadius:25,marginHorizontal:15,marginBottom:-5}} />
                  <View style={{flexDirection:'row',alignSelf:'flex-start',paddingHorizontal:10,marginBottom:10}}>
                  
                  
                  
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

                  <View style={{backgroundColor:'#fff',paddingHorizontal:10,paddingVertical:7,borderBottomLeftRadius:15,borderBottomRightRadius:15,alignItems:'center'}}>
                    <Text style={{fontSize:17,color:'#6bb333'}}>Challenge Now</Text>
                  </View>
                   
                   </TouchableOpacity>
                  <Text style={{paddingHorizontal:10,paddingVertical:5,fontSize:17,paddingTop:20}}>Current Challenges</Text>
                {
                refreshing==true?
                null
                :
                games.length==0?
                     null
                     
                     :
                     games.map((rq)=>
                        
                      <TouchableOpacity onPress={()=>navigation.navigate('Home',{challengId:rq.challengId})} key={rq.id} style={{backgroundColor: 'white',paddingHorizontal:15,paddingVertical:10,borderRadius:10,flexDirection:'row',alignItems:'center',justifyContent:'space-between',borderWidth:1,borderColor:'white',margin:10,elevation:3}}>
                     
                     <View style={{width: '100%',}}>
                        
                     <Text style={{fontSize:17,color:'black'}}>Created by {<Text style={{fontWeight:'bold'}}>{rq.host==health.user.email?"Me":rq.host}</Text>} </Text>
                        <Text style={{fontSize:15,color:'gray',paddingTop:5}}>Challenge</Text>
                     
                     <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                        <Text style={{fontSize:22,fontWeight:'bold'}}>{rq.challengId}</Text>
                     
                        <Ionicons 
                            name="chevron-forward-circle" 
                            size={30} 
                            color="#6bb333" 
                        /> 
                     </View>
                     </View>
                     </TouchableOpacity>
                     )  
                     }

            </View>

      </StickyParallaxHeader>
      
<SwipeablePanel {...panelProps} isActive={isPanelActive} style={{zIndex:3,elevation:20,padding: 20,}}>
                  <View>
                  {requests.length==0?
                  <View style={{alignItems:'center'}}>
                    <MaterialIcons 
                            name="error-outline" 
                            size={40} 
                            color="#e25b5b" 
                        /> 
                     <Text style={{fontSize:17,color:'#e25b5b',textAlign:'center'}}>No Challenges Found</Text>
                     </View>
                     :
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
               </SwipeablePanel>
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
        </View>
    );
    
}
