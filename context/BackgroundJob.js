/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React from 'react';
 import {
     SafeAreaView,
     StyleSheet,
     ScrollView,
     View,
     Text,
     StatusBar,
     TouchableOpacity,
     Platform,
     Linking,
 } from 'react-native';
//  import { Header, Colors } from 'react-native/Libraries/NewAppScreen';
import { startCounter, stopCounter } from 'react-native-accurate-step-counter';
import AsyncStorage from '@react-native-async-storage/async-storage';

 import BackgroundJob from 'react-native-background-actions';
 
 const sleep = (time) => new Promise((resolve) => setTimeout(() => resolve(), time));
 const BaseUrl = require('../styles/BaseUrl');

 BackgroundJob.on('expiration', () => {
     console.log('iOS: I am being closed!');
 });
 
 const getSteps = async () => {
    const jsonValue = await AsyncStorage.getItem('user')
    var ids =57;

    // if(id == 0) {
    //   ids = JSON.parse(jsonValue).id
    // }
    // else{
    //   ids = user.id
    // }
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>  "+ids+" <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")

    fetch(BaseUrl.BASE_URL+'/api/steps/'+ids)
        .then((response) => response.json())
        .then((json) => {
        // setRequests(json)
        // setSteps(json.steps)

        const config = {
          default_threshold: 15.0,
          default_delay: 150000000,
          cheatInterval: 3000,
          onStepCountChange: (stepCount) => {taskRandom(parseInt(json.steps)+stepCount) },
          onCheat: () => { }
        }
        startCounter(config);
        // return () => { stopCounter() }

        console.log(json.steps)
        })
        .catch((error) => console.error(error))
        .finally(() => {});
  }

 const taskRandom = async (taskData) => {
     if (Platform.OS === 'ios') {
         console.warn(
             'This task will not keep your app alive in the background by itself, use other library like react-native-track-player that use audio,',
             'geolocalization, etc. to keep your app alive in the background while you excute the JS from this library.'
         );
     }
     console.log(taskData)
     await new Promise(async (resolve) => {
         // For loop with a delay
         const { delay } = taskData;
         var  steps = 0;

         const config = {
            default_threshold: 15.0,
            default_delay: 150000000,
            cheatInterval: 3000,
            onStepCountChange: (stepCount) => {steps=stepCount },
            onCheat: () => { }
          }
          startCounter(config);

         console.log(BackgroundJob.isRunning(), delay)

         for (let i = 0; BackgroundJob.isRunning(); i++) {
     
             console.log('Runned -> ', steps);

             await BackgroundJob.updateNotification({ taskDesc: steps+ ' Steps' ,progressBar:{max:6000,value:steps} });
             await sleep(delay);
         }

     });
 };
 
 const options = {
     taskName: 'Example',
     taskTitle: 'Keep Going!',
     taskDesc: 'ExampleTask desc',
     taskIcon: {
         name: 'ic_launcher_foreground',
         type: 'mipmap',
     },
     color: '#6bb333',
     linkingURI: 'goodseed://screens/Step',
     parameters: {
         delay: 1000,
     },
     progressBar: {
         max: 6000,
         value:0
     },
 };
 
 function handleOpenURL(evt) {
     console.log(evt.url);
     // do something with the url
 }
 
 Linking.addEventListener('url', handleOpenURL);
 
 class Background extends React.Component {
     playing = BackgroundJob.isRunning();
 
     /**
      * Toggles the background task
      */


     toggleBackground = async () => {
         this.playing = !this.playing;
         if (this.playing) {
             try {
                 console.log('Trying to start background service');
                 await BackgroundJob.start(taskRandom, options);
                 console.log('Successful start!');
             } catch (e) {
                 console.log('Error', e);
             }
         } else {
             console.log('Stop background service');
             await BackgroundJob.stop();
         }
     };
     render() {
         return (
             <>
                 <StatusBar barStyle="dark-content" />
                 <SafeAreaView>
                     <ScrollView
                         contentInsetAdjustmentBehavior="automatic"
                         style={styles.scrollView}>
                         {/* <Header /> */}
                         {/* {global.HermesInternal == null ? null : (
                             <View style={styles.engine}>
                                 <Text style={styles.footer}>Engine: Hermes</Text>
                             </View>
                         )} */}
                         <View style={styles.body}>
                             <TouchableOpacity
                                 style={{ height: 100, width: 100, backgroundColor: 'red' }}
                                 onPress={this.toggleBackground}></TouchableOpacity>
                         </View>
                     </ScrollView>
                 </SafeAreaView>
             </>
         );
     }
 }
 
 const styles = StyleSheet.create({
     scrollView: {
         backgroundColor:'white',
     },
     engine: {
         position: 'absolute',
         right: 0,
     },
     body: {
         backgroundColor: 'white',
     },
     footer: {
         color: 'black',
         fontSize: 12,
         fontWeight: '600',
         padding: 4,
         paddingRight: 12,
         textAlign: 'right',
     },
 });
 
 export default Background;