import React, { useState, useEffect } from 'react'
import { Button, View ,Text, StatusBar, TouchableHighlight, TextInput, Image} from 'react-native'
import {buttons, styles} from '../styles/Styles'
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation , DrawerActions } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from '@react-native-google-signin/google-signin';

import {
    LoginButton,
    AccessToken,
    GraphRequest,
    GraphRequestManager,
} from 'react-native-fbsdk';

import { Background , WelcomeBackground } from '../styles/Background';

export default function Login() {
  
  const navigation = useNavigation();

    const [name, setName] = useState( "");  
    const [pw, setPw] = useState( ""); 
    const [userInfo, setUserInfo] = useState([]);
    const [user, setUser] = useState({})
    
    const login = (em,key) =>{

      const data = { email: em,password: key};
      fetch("https://health.bestceylonhotels.com/api/login", {
        method: 'POST', // or 'PUT'
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        navigation.navigate('SelectStack')
      })
      .catch((error) => {
        
        console.error('Error:', error);
        
      })
      // console.log(em+key)
    }


    const getInfoFromToken = token => {
        const PROFILE_REQUEST_PARAMS = {
          fields: {
            string: 'id, name,  first_name, last_name',
          },
        };
        const profileRequest = new GraphRequest(
          '/me',
          {token, parameters: PROFILE_REQUEST_PARAMS},
          (error, result) => {
            if (error) {
              console.log('login info has error: ' + error);
            } else {
              setUserInfo(result);
              console.log('result:', result);
            }
          },
        );
        new GraphRequestManager().addRequest(profileRequest).start();
    };

    useEffect(() => {
        GoogleSignin.configure({
          webClientId: '1096883138091-4sk5e1iqngedcdec8kn6606obev8m77f.apps.googleusercontent.com',
          offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
          forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
          iosClientId: '', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
        });
        isSignedIn()
      }, [])


    const signIn = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          console.log(userInfo)
          setUser(userInfo)
        } catch (error) {
          console.log('Message', error.message);
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            console.log('User Cancelled the Login Flow');
          } else if (error.code === statusCodes.IN_PROGRESS) {
            console.log('Signing In');
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            console.log('Play Services Not Available or Outdated');
          } else {
            console.log('Some Other Error Happened');
          }
        }
      };
    const isSignedIn = async () => {
        const isSignedIn = await GoogleSignin.isSignedIn();
        if (!!isSignedIn) {
          getCurrentUserInfo()
        } else {
          // console.log('Please Login')
        }
      };
    const getCurrentUserInfo = async () => {
        try {
          const userInfo = await GoogleSignin.signInSilently();
          setUser(userInfo);
        } catch (error) {
          if (error.code === statusCodes.SIGN_IN_REQUIRED) {
            // alert('User has not signed in yet');
            console.log('User has not signed in yet');
          } else {
            // alert("Something went wrong. Unable to get user's info");
            console.log("Something went wrong. Unable to get user's info");
          }
        }
      };
    const signOut = async () => {
        try {
          await GoogleSignin.revokeAccess();
          await GoogleSignin.signOut();
          setUser({}); // Remember to remove the user from your app's state as well
        } catch (error) {
          console.error(error);
        }
      };


    return (
        <View style={[styles.container]}>
            
            <WelcomeBackground>
              <View style={{position:'absolute',top:50}}>
               <Animatable.Text style={{color:'white',fontSize:30,textAlign:'center',paddingBottom:50}} delay={300} animation={'bounceIn'}>
                        Welcome
              </Animatable.Text>
              <Animatable.Image delay={300} animation={'zoomIn'} source={require('../assets/logo.png')} style={{width:150,height:120,resizeMode:'cover'}} />
              
              </View>
                 
                <Animatable.View animation={'slideInUp'} style={styles.loginBoard2}>
                    
                    <Animatable.Text style={{color:'#6bb333',fontSize:25,paddingBottom:10,textAlign:'center',fontWeight:'bold'}} delay={300} animation={'bounceIn'}>
                        Health App
                    </Animatable.Text>

                    <TouchableHighlight underlayColor={'#104c2e'} style={[buttons.login,{backgroundColor: '#6bb333',borderColor:'#6bb333',}]} onPress={()=>navigation.navigate('Login')}>
                      <View style={{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
                        <Ionicons 
                          name="log-in" 
                          size={22} 
                          color="white" 
                          style={{paddingRight:10}}
                        /> 
                        <Text style={[buttons.text,{color:'#fff'}]}>Login</Text>
                      </View>
                        
                    </TouchableHighlight>

                    <TouchableHighlight underlayColor={'rgba(107,179,51,0.2)'} style={buttons.login} onPress={()=>{}}>
                      <View style={{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
                        <Ionicons 
                          name="ios-logo-facebook" 
                          size={20} 
                          color="#1773ea" 
                          style={{paddingRight:10}}
                        /> 
                        <Text style={buttons.text}>Login with Facebook</Text>
                      </View>
                        
                    </TouchableHighlight>



                    {/* <View style={{alignSelf:'center'}}>
                      <LoginButton
                        onLoginFinished={(error, result) => {
                            if (error) {
                            console.log('login has error: ' + result.error);
                            } else if (result.isCancelled) {
                            console.log('login is cancelled.');
                            } else {
                            AccessToken.getCurrentAccessToken().then(data => {
                                const accessToken = data.accessToken.toString();
                                getInfoFromToken(accessToken);
                            });
                            }
                        }}
                        onLogoutFinished={() => setUserInfo([])}
                        style={{ width: 192, height: 35 }}

                    />  
                    </View> */}
                    
                    <View style={{alignSelf:'center'}}>
                    {!user.idToken ? 
                      <TouchableHighlight underlayColor={'rgba(107,179,51,0.2)'} style={buttons.login} onPress={signIn}>
                      <View style={{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
                        {/* <Ionicons 
                          name="ios-logo-google" 
                          size={20} 
                          color="black" 
                          style={{paddingRight:10}}
                        />  */}
                        <Image source={require('../assets/google.png')} style={{width:20,height:20,marginRight:10}} />
                        <Text style={buttons.text}>Login with Gmail</Text>
                      </View>
                        
                    </TouchableHighlight>
                    :
                    <TouchableHighlight underlayColor={'rgba(107,179,51,0.2)'} style={buttons.login} onPress={signOut}>
                    <View style={{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
                      {/* <Ionicons 
                        name="ios-logo-google" 
                        size={20} 
                        color="black" 
                        style={{paddingRight:10}}
                      />  */}
                      <Image source={require('../assets/google.png')} style={{width:20,height:20,marginRight:10}} />
                      <Text style={buttons.text}>Logout</Text>
                    </View>
                      
                  </TouchableHighlight>
                        }
                        </View>
                    
                    <View style={{flexDirection:'row',alignItems:'center',alignSelf:'center',paddingTop:10,justifyContent:'space-around'}}>
                        <Text>Dont't have an account?   </Text>
                        <TouchableHighlight underlayColor={'#DDDDDD'} onPress={()=>navigation.navigate('SignUp')}>
                            <Text style={{color:'red',textDecorationLine:'underline'}}>Register Now</Text>
                        </TouchableHighlight>
                    </View>

                    </Animatable.View> 
            </WelcomeBackground> 
        </View>
    )
}
