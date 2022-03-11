import React, { useEffect, useState ,useContext} from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
  DrawerItem
} from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { TouchableHighlight, View , Text,Image,StatusBar} from 'react-native';

import Tabs from '../tabs/HomeTabs'
import About from '../screens/About'
import LoginStack from '../stacks/LoginStack'
import Login from '../screens/Login'
import Contact from '../screens/Contact'
import SelectStack from '../stacks/SelectStack'
import BMIStack from '../stacks/BMIStack'
import MainProfile from '../screens/MainProfile'
import Summary from '../screens/Summary'
import Achivements from '../screens/Achivements'
import Avatar from '../screens/Avatar'
import Select from '../screens/Select'

import Welcome from '../screens/Welcome'
// import Pedometer from '../screens/Pedometer'

import { AvatarImages } from '../styles/AvatarImages';
import { buttons, styles } from '../styles/Styles';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { HealthProvider, HealthContext } from '../context/Context';
import { NavigationContainer } from '@react-navigation/native';

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

import SplashScreen from 'react-native-splash-screen'

import { DrawerItems } from "../styles/DrawerItems";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {

  const health = useContext(HealthContext);
  const BaseUrl = require('../styles/BaseUrl');

  const [screen, setScreen] = useState('Tabs');

  // const getUser = () => {
  //   var array =[]
  //   fetch(BaseUrl.BASE_URL+'/api/Login/'+health.user.id)
  //   .then((response) => response.json())
  //   .then((json) => {
  //     console.log(json)
  //   //   health.setUser(json)
  //   })
  //   .catch((error) => console.error(error))
  //   .finally(() => {});
    
  // }
  const storeUserData = async (value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('user', jsonValue)
    } catch (e) {
        // saving error
    }
    }

    const logout =()=>{
      storeUserData([])
      props.navigation.navigate('Welcome')
      health.setUser([])
    }
  // const getImages =()=>{
      
  //   fetch(BaseUrl.BASE_URL+'/api/imageUpload/'+health.user.id)
  //   .then((response) => response.json())
  //   .then((json) => {
  //      health.setProPic(BaseUrl.BASE_URL+'/assets/profile_pics/'+json[1].image)
  //      // console.log(BaseUrl.BASE_URL+'/assets/profile_pics/'+json[1].image)
  //   })
  //   .catch((error) => console.error(error))
  //   .finally(() => {});

  // }
  const getName =async()=>{
      const jsonValue = await AsyncStorage.getItem('user')
      // var id = 0;
      // if(health.user==null){
      //   id=jsonValue.member_id
      // }
      // else{
      //   id=health.user.member_id
      // }
      // console.log(health.user)
    fetch(BaseUrl.BASE_URL+'/api/ContactDetails/'+health.user.member_id)
    .then((response) => response.json())
    .then((json) => {
       console.log(json.name)
        health.setName(json.name)
        health.setId(health.user.id)
    })
    .catch((error) => console.error(error))
    .finally(() => {});
  
  }
  useEffect(() => {
    getName()
  });

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{flex:1,justifyContent:'space-between'}}>
      <View style={{flex:1}}>
        <View style={{height:160,justifyContent:'flex-start',padding:10,alignItems:'center',flexDirection:'row'}}>
        {
          health.propic==null?
              <Image
                           source={require('../assets/propic.jpg')} 
                           style={styles.profilePic}
                        />
               :
                <Image
                  // source={{uri:filePath}}
                  source={{uri:health.propic}} 
                  style={styles.profilePic}
                />
          
        }
        
        <View style={{marginLeft:15}}>
          {
            health.name==null?
            <View onLayout={()=>getName()}></View>
            :
            <Text style={{color:'#6bb333',fontSize:18,fontWeight:'bold'}}>{health.name}</Text>
          }
         
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <AntDesign color={'gray'} size={10} name={'mail'} style={{marginRight:3}}/>
         <Text style={{color:'gray',fontSize:10}}>{health.user.email}</Text>  
        </View>
        
        </View>
        
        {/* <Text  style={{color:'black',fontSize:17}}>{health.user.avatar}</Text> */}
      </View>
        
          
      {
        DrawerItems.map((item)=>
        <View>
          {item.id<6?
          <TouchableHighlight underlayColor={"rgba(107, 179, 51,0.3)"} style={{marginVertical:5,marginHorizontal:15,backgroundColor:item.screen==screen?"rgba(107, 179, 51,0.15)":'white',borderRadius:5}} onPress={()=>{props.navigation.navigate(item.screen);setScreen(item.screen)}}>
          <View style={{flexDirection:'row',alignItems:'center',padding:13}}>
            <AntDesign color={item.screen==screen?"rgb(107, 179, 51)":'rgba(0,0,0,0.75)'} size={22} name={item.icon} />
            <Text style={{marginLeft:15,fontSize:15,color:item.screen==screen?"rgb(0,0,0)":'rgba(0,0,0,0.75)'}}>{item.title}</Text>
          </View>
        </TouchableHighlight>
        :
        null
        
        }
        </View>
        )
      }
      {/* <View style={{height:0.8,backgroundColor:'black',width:'90%',alignSelf:'center'}} /> */}
      {/* {
        DrawerItems.map((item)=>
        <View>
          {item.id>3?
          <TouchableHighlight underlayColor={"rgba(107, 179, 51,0.3)"} style={{marginVertical:5,marginHorizontal:15,backgroundColor:item.screen==screen?"rgba(107, 179, 51,0.2)":'white'}} onPress={()=>{props.navigation.navigate(item.screen);setScreen(item.screen)}}>
          <View style={{flexDirection:'row',alignItems:'center',padding:13}}>
            <AntDesign color={item.screen==screen?"rgb(107, 179, 51)":'black'} size={22} name={item.icon} />
            <Text style={{marginLeft:15,fontSize:16}}>{item.title}</Text>
          </View>
        </TouchableHighlight>
        :
        null
        
        }
        </View>
        )
      } */}
      {/* <View style={{height:0.8,backgroundColor:'black',width:'90%',alignSelf:'center'}} /> */}
      </View>

      <View>
        {
        health.user==[]?
        <TouchableHighlight  underlayColor={"rgba(107, 179, 51,0.3)"} style={{marginVertical:5,marginHorizontal:15}} onPress={()=>props.navigation.navigate('Login')}>
          <View style={{flexDirection:'row',alignItems:'center',padding:13}}>
            <AntDesign color={'black'} size={22} name={'login'} />
            <Text style={{marginLeft:15,fontSize:16}}>Login</Text>
          </View>
        </TouchableHighlight>
        :
        <TouchableHighlight  underlayColor={"rgba(107, 179, 51,0.3)"} style={{marginVertical:5,marginHorizontal:15}} onPress={()=>logout()}>
          <View style={{flexDirection:'row',alignItems:'center',padding:13}}>
            <AntDesign color={'rgba(0,0,0,0.75)'} size={22} name={'login'} />
            <Text style={{marginLeft:15,fontSize:16,color:'rgba(0,0,0,0.75)'}}>Sign Out</Text>
          </View>
        </TouchableHighlight>
      }
      
      </View>

        {/* <View
          style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          marginHorizontal:10
        }}/>

      <DrawerItem
        label="Login"
        icon={({ focused, color, size }) => <AntDesign color={color} size={20} name={'login'} />}
        onPress={() => props.navigation.navigate('Login')}
      /> */}
    </DrawerContentScrollView>
  );
}

export default function MyDrawer() {

  const [data, setData] = useState({});
  const [screen, setScreen] = useState(<Loading/>);
  const health = useContext(HealthContext);
  
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user')
      
        return jsonValue != null ?
        JSON.parse(jsonValue).position==4?
        setScreen(<LoggedDrawer/>):
        setScreen(<UnLoggedDrawer/>)
        // var value = JSON.stringify(jsonValue)
        // console.log("json value "+JSON.parse(jsonValue).position)
      
        :
        setScreen(<UnLoggedDrawer/>)
        
        ;

    } catch(e) {
      console.log(e)
      // error reading value
    }
    finally{
      SplashScreen.hide();
    }
  }
  
  useEffect(() =>   {
    getData()
  }, [])

  
  return (
    <NavigationContainer independent={true}>
      {screen}
    </NavigationContainer>
  );
}

function Loading(){
  return (
    <View style={{justifyContent:'center',alignItems:'center',flex:1,backgroundColor:'white'}}>
      <StatusBar backgroundColor={'#6bb333'} />
      {/* <Image source={require('../assets/launch_screen.png')} style={{width:'100%',height:'100%'}} /> */}
      <MaterialIndicator color={'#fff'} style={{position:'absolute',top:900,zIndex:7,elevation:7}} />
    </View>
  )
}

function LoggedDrawer() {
  
  return (

    <Drawer.Navigator 
    drawerContent={props => <CustomDrawerContent {...props} />}
    drawerContentOptions={{
      activeTintColor: '#6bb333',
      itemStyle: { paddingVertical: 10 },
      activeBackgroundColor:'white',
      
    }}
    drawerType='slide'
    initialRouteName={'Tabs'}
    
    >
    
      <Drawer.Screen 
        name="Tabs" 
        component={Tabs}  
        options={{ drawerLabel: 'Home' ,
        drawerIcon: ({ focused, color, size }) => <AntDesign color={color} size={20} name={'home'} />
      }}
      />

      {/* <Drawer.Screen 
        name="Avatar" 
        component={Avatar}  
        options={{ drawerLabel: 'Avatar' ,
        drawerIcon: ({ focused, color, size }) => <AntDesign color={color} size={20} name={'home'} />
      }}
      />

      <Drawer.Screen 
        name="Select" 
        component={Select}  
        options={{ drawerLabel: 'Select' ,
        drawerIcon: ({ focused, color, size }) => <AntDesign color={color} size={20} name={'home'} />
      }}
      /> */}
      <Drawer.Screen 
        name="Profile" 
        component={MainProfile}   
        options={{ drawerLabel: 'Profile' ,
        drawerIcon: ({ focused, color, size }) => <AntDesign color={color} size={20} name={'user'} />
      }}
      />
      
      <Drawer.Screen 
        name="BMIStack" 
        component={BMIStack}    
        options={{ drawerLabel: 'BMI Chart' ,
        drawerIcon: ({ focused, color, size }) => <AntDesign color={color} size={20} name={'linechart'} />
      }}
      />

      {/* <Drawer.Screen 
        name="Achivements" 
        component={Achivements}    
        options={{ drawerLabel: 'Achivements' ,
        drawerIcon: ({ focused, color, size }) => <AntDesign color={color} size={20} name={'heart'} />
      }}
      />

      <Drawer.Screen 
        name="Summary" 
        component={Summary}   
        options={{ drawerLabel: 'Summary' ,
        drawerIcon: ({ focused, color, size }) => <AntDesign color={color} size={20} name={'bars'} />
      }} 
      /> */}


      {/* <Drawer.Screen 
        name="Pedometer" 
        component={Pedometer}   
        options={{ drawerLabel: 'Pedometer' ,
        drawerIcon: ({ focused, color, size }) => <AntDesign color={color} size={20} name={'bars'} />
      }} 
      />  */}

      <Drawer.Screen 
        name="Contact" 
        component={Contact}   
        options={{ drawerLabel: 'Contact us' ,
        drawerIcon: ({ focused, color, size }) => <AntDesign color={color} size={20} name={'contacts'} />
      }} 
      />
 
      <Drawer.Screen 
        name="About" 
        component={About}   
        options={{ drawerLabel: 'About' ,
        drawerIcon: ({ focused, color, size }) => <AntDesign color={color} size={20} name={'infocirlceo'} />
      }} 
      />

    <Drawer.Screen 
        name="Login" 
        component={LoginStack}    
        options={{ drawerLabel: 'Login' ,
        drawerIcon: ({ focused, color, size }) => <AntDesign color={color} size={20} name={'login'} />
      }}
      />
    <Drawer.Screen 
        name="Welcome" 
        component={Welcome}    
        options={{ drawerLabel: 'Welcome' ,
        drawerIcon: ({ focused, color, size }) => <AntDesign color={color} size={20} name={'login'} />
      }}
      />
    </Drawer.Navigator>

  );
}
function UnLoggedDrawer() {
  
  return (

    <Drawer.Navigator 
    drawerContent={props => <CustomDrawerContent {...props} />}
    drawerContentOptions={{
      activeTintColor: '#6bb333',
      itemStyle: { paddingVertical: 10 },
      activeBackgroundColor:'white',
      
    }}
    
    drawerType='slide'
    initialRouteName={'Login'}
    
    >
    
      <Drawer.Screen 
        name="Tabs" 
        component={Tabs}  
        options={{ drawerLabel: 'Home' ,
        drawerIcon: ({ focused, color, size }) => <AntDesign color={color} size={20} name={'home'} />
      }}
      />

      <Drawer.Screen 
        name="Profile" 
        component={MainProfile}   
        options={{ drawerLabel: 'Profile' ,
        drawerIcon: ({ focused, color, size }) => <AntDesign color={color} size={20} name={'user'} />
      }}
      />
      
      <Drawer.Screen 
        name="BMIStack" 
        component={BMIStack}    
        options={{ drawerLabel: 'BMI Chart' ,
        drawerIcon: ({ focused, color, size }) => <AntDesign color={color} size={20} name={'linechart'} />
      }}
      />

      {/* <Drawer.Screen 
        name="Achivements" 
        component={Achivements}    
        options={{ drawerLabel: 'Achivements' ,
        drawerIcon: ({ focused, color, size }) => <AntDesign color={color} size={20} name={'heart'} />
      }}
      />

      <Drawer.Screen 
        name="Summary" 
        component={Summary}   
        options={{ drawerLabel: 'Summary' ,
        drawerIcon: ({ focused, color, size }) => <AntDesign color={color} size={20} name={'bars'} />
      }} 
      /> */}

      {/* <Drawer.Screen 
        name="Pedometer" 
        component={Pedometer}   
        options={{ drawerLabel: 'Pedometer' ,
        drawerIcon: ({ focused, color, size }) => <AntDesign color={color} size={20} name={'bars'} />
      }} 
      /> */}

      <Drawer.Screen 
        name="Contact" 
        component={Contact}   
        options={{ drawerLabel: 'Contact us' ,
        drawerIcon: ({ focused, color, size }) => <AntDesign color={color} size={20} name={'contacts'} />
      }} 
      />
 
      <Drawer.Screen 
        name="About" 
        component={About}   
        options={{ drawerLabel: 'About' ,
        drawerIcon: ({ focused, color, size }) => <AntDesign color={color} size={20} name={'infocirlceo'} />
      }} 
      />

    <Drawer.Screen 
        name="Login" 
        component={LoginStack}    
        options={{ drawerLabel: 'Login' ,
        drawerIcon: ({ focused, color, size }) => <AntDesign color={color} size={20} name={'login'} />
      }}
      />
      
    <Drawer.Screen 
        name="Welcome" 
        component={Welcome}    
        options={{ drawerLabel: 'Welcome' ,
        drawerIcon: ({ focused, color, size }) => <AntDesign color={color} size={20} name={'login'} />
      }}
      />
    </Drawer.Navigator>

  );
}
