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

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {

  const health = useContext(HealthContext);
  const BaseUrl = require('../styles/BaseUrl');
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

  // useEffect(() => {
  //   getImages()
  // }, []);

  return (
    <DrawerContentScrollView {...props}>
      <View style={{height:150,justifyContent:'space-evenly',padding:10,alignItems:'center'}}>
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
        

        {/* <Text style={{color:'gray'}}>{health.user.email}</Text> */}
        <Text style={{color:'black',fontSize:17}}>{health.user.email}</Text>
        {/* <Text  style={{color:'black',fontSize:17}}>{health.user.avatar}</Text> */}
      </View>
      <DrawerItemList {...props} itemStyle={{marginLeft:25}} labelStyle={{fontSize:16}}
      onPress = {()=>console.log('pressed')}
      />
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
        JSON.parse(jsonValue).position==3?
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
    <NavigationContainer>
      {screen}
    </NavigationContainer>
  );
}

function Loading(){
  return (
    <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
      <StatusBar backgroundColor={'#6bb333'} />
      <Image source={require('../assets/launch_screen.png')} style={{width:'100%',height:'100%'}} />
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

      <Drawer.Screen 
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
      />

      <Drawer.Screen 
        name="Contact us" 
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

      <Drawer.Screen 
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
      />

      <Drawer.Screen 
        name="Contact us" 
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
    </Drawer.Navigator>

  );
}
