import React, { useEffect , useRef,useContext, useState } from 'react';
import { Button , View , Text , TouchableOpacity, Animated, Image} from 'react-native';
import { useNavigation , DrawerActions } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { buttons, styles } from '../styles/Styles';
import { ScrollView } from 'react-native-gesture-handler';
import StickyParallaxHeader from 'react-native-sticky-parallax-header'
import { HealthContext } from '../context/Context';
import { AvatarImages } from '../styles/AvatarImages';
import { LevelData } from '../styles/LevelData';
export default function LoadingScreen () {

    const navigation = useNavigation();

    const [image,setImage] = useState(null)
    const [refreshing, setRefreshing] = useState(false);
    const [requests, setRequests] = useState([]);

    const BaseUrl = require('../styles/BaseUrl');
    // const [contacts, setContacts] = useState([]);
    useEffect(() => {
    AvatarImages.map((av)=>
        {if (av.id==health.user.avatar){
            setImage(av.png)
        }}
                             
    )
    getData()         
    },[]);
    const scroll = useRef(new Animated.Value(0)).current;

    const health = useContext(HealthContext);

    const getData = () => {
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
        setRequests(json)
        // console.log(json)
        })
        .catch((error) => console.error(error))
        .finally(() => {setRefreshing(false)});
     
      }

      
    const renderContent = (label) => (
        <View>
          <Text>{label}</Text>
        </View>
      )
    
      const renderForeground = () => {
        const titleOpacity = scroll.interpolate({
          inputRange: [0, 106, 154],
          outputRange: [1, 0.5, 0],
          extrapolate: 'clamp'
        })
    
        return (
          <View style={{paddingLeft:10}}>
              {/* <Text>{'\n'}</Text> */}
            <Animated.View style={{ opacity: titleOpacity , flexDirection:'row',alignItems:'center',padding:10,backgroundColor:'rgb(107, 179, 51)',borderRadius:15,width: '97.5%',}}>
                
                <Image source={image} style={{width:50,height: 50,borderRadius:50,marginRight:10,}} />
              <View>
              <Text style={{fontSize:22,color:'white',fontWeight:'bold'}}>{health.user.email}</Text>
              <Text style={{fontSize:17,color:'white'}}>Level {health.user.level}</Text>
              </View>
            </Animated.View>
          </View>
        )
      }
    
      const renderHeader = () => {
        const opacity = scroll.interpolate({
          inputRange: [0, 100, 160],
          outputRange: [0,1, 1],
          extrapolate: 'clamp'
        })
    
        return (
          <View style={{backgroundColor:'transparent'}}>
            <Animated.View style={{ opacity ,flexDirection:'row',alignItems:'center',padding:10}}>
                <Ionicons 
                name="menu-outline" 
                size={30} 
                color="black" 
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
                color="black" 
                onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
             />   
            {/* </View> */}
            
        
          </View>
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
        headerHeight={60}
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
            <View style={{marginTop:75,padding:10}}>
                {/* <Text>xxx</Text> */}

                <TouchableOpacity style={{padding:10,margin:10,backgroundColor: 'rgba(107, 179, 51,0.2)',borderRadius:15}} onPress={()=>navigation.navigate('LevelScreen')}>
                  <Text style={{fontSize:17,fontWeight:'bold'}}>Current Level</Text>
                  {
                     LevelData.map((lv)=>
                     lv.id==health.user.level?
                     <View key={lv.id} style={{padding:5,backgroundColor:'rgba(255, 255, 255,0.7)',paddingHorizontal:10,marginVertical:10,borderRadius:15}}>
                        <Text style={{fontSize:15,color:'#000'}}>Walk Around {lv.name}</Text>
                        
                     </View>
                     :
                     null
                     )
                  }
                </TouchableOpacity>
                <TouchableOpacity style={{padding:10,margin:10,backgroundColor: 'rgba(107, 179, 51,0.2)',borderRadius:15,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}} onPress={()=>navigation.navigate('CreateChallenge')}>
                     <Text style={{fontSize:17,fontWeight:'bold'}}>Create Challenge</Text>
                     <Image source={require('../assets/run.png')} style={{width:100,height:100,alignSelf:'flex-end'}} />
                   </TouchableOpacity>
                {requests.length==0?
                     null
                     
                     :
                        requests.map((rq)=>
                        
                      <TouchableOpacity onPress={()=>navigation.navigate('Home',{challengId:rq.challengId})} key={rq.id} style={{backgroundColor: 'rgba(107, 179, 51,0.2)',paddingHorizontal:15,paddingVertical:10,width:'95%',borderRadius:10,flexDirection:'row',alignItems:'center',justifyContent:'space-between',borderWidth:1,borderColor:'white',marginBottom:10,marginLeft:10}}>
                     
                     <View style={{width: '100%',}}>
                        
                     {/* <Text style={{fontSize:16,fontWeight:'bold'}}>{rq.host}</Text> */}
                        <Text style={{fontSize:15,color:'gray',paddingBottom:5}}>Current Challenge</Text>
                     
                     <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                        <Text style={{fontSize:22,fontWeight:'bold'}}>{rq.challengId}</Text>
                     
                     
                     </View>
                     </View>
                     </TouchableOpacity>
                     )  
                     }

            </View>
      </StickyParallaxHeader>

        </View>
    );
    
}
