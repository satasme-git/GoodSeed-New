import * as React from 'react';
import { ScrollView, View , Text,Dimensions} from 'react-native';
import { useNavigation , DrawerActions } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { buttons, styles } from '../styles/Styles';

import { ChartData } from '../styles/ChartData';
import { HeightData } from '../styles/HeightData';
import { HeightDataCm } from '../styles/HeightDataCm';

import { WeightKg } from '../styles/WeightKg';
import { WeightLbs } from '../styles/WeightLbs';

import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';
import ZoomView from 'react-native-border-zoom-view';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function BMIChart() {

    const navigation = useNavigation();

    return (
      <View style={styles.container}>

          <View style={{position:'absolute',top:10,left:10,zIndex:2}}>
             <Ionicons 
                name="arrow-back" 
                size={30} 
                color="black" 
                onPress={() => navigation.goBack()}
             /> 
          </View>

{/* <ZoomView 
            style={{height: '100%', width: '100%'}} //default height is '100%', but you can configure it
            minZoom={1}   //1 is minimum
            maxZoom={3}
            zoomLevels={2} //count of double tap zoom levels. 2 is default, 0 disables double tap
        > */}


          <ScrollView 
          style={{marginTop:50}}
          contentContainerStyle={{height:windowHeight*1.5}}
          >

        

              
              <ScrollView
                horizontal
                >

{/* <ReactNativeZoomableView
   maxZoom={1}
   minZoom={0.1}
   zoomStep={0.5}
   initialZoom={1}
   bindToBorders={true}
   doubleTapZoomToCenter={true}
> */}
        
                    <View>
                    <View style={{flexDirection:'row'}}>

                        <Text style={{fontWeight:'bold',marginRight:5,paddingLeft:5,width:70}}>WEIGHT</Text>
                        
                        <View>
                            <View  style={{margin:1,padding:0,flexDirection:'row'}}>
                                <Text style={{color:'black',textAlign:'center',fontSize:12,fontWeight:'bold',width:30}}>KG</Text>
                                {WeightLbs.map((h)=>        
                                    <Text key={h.id} style={{color:'black',textAlign:'center',fontSize:10,paddingHorizontal:1,width:70}}>{h.title}</Text>
                                )}
                            </View>
                            <View  style={{margin:1,padding:0,flexDirection:'row'}}>
                                <Text style={{color:'black',textAlign:'center',fontSize:12,fontWeight:'bold',width:30}}>Lbs</Text>
                                {WeightKg.map((h)=>        
                                    <Text key={h.id} style={{color:'black',textAlign:'center',fontSize:10,paddingHorizontal:1,width:70}}>{h.title}</Text>
                                )}
                            </View>
                            
                        </View>
                    </View>

        <View style={{flexDirection:'row',marginTop:0}}>
            <View style={{width:100}}>
                <Text style={{marginLeft:5,fontWeight:'bold'}}>HEIGHT</Text>
                <View style={{flexDirection:'row'}}>

                    <View  style={{width:50,margin:1,padding:6}}>
                        <Text style={{color:'black',textAlign:'center',fontSize:12,fontWeight:'bold',height:25}}>ft/in</Text>
                {HeightData.map((h)=>        
                    <Text key={h.id} style={{color:'black',textAlign:'center',fontSize:10,height:27}}>{h.title}</Text>
                )}

                    </View>
                
                    

                    <View  style={{width:50,margin:1,padding:6}}>
                        <Text style={{color:'black',textAlign:'center',fontSize:12,fontWeight:'bold',height:25}}>cm</Text>
                {HeightDataCm.map((h)=>        
                    <Text key={h.id} style={{color:'black',textAlign:'center',fontSize:10,height:27}}>{h.title}</Text>
                )}
                    </View>  
                </View>
                
            </View>

              <View style={{
        width: 1520, 
        flexDirection: 'row', 
        flexWrap: 'wrap',
        marginTop:43
        }}>
            
            
        {ChartData.map((data)=>
            <View key={data.id} style={{width:69,backgroundColor:data.color,margin:1,height:25,justifyContent:'center'}}>
                <Text style={{color:'white',textAlign:'center',fontSize:10}}>{data.id}</Text>
            </View>
            )}
        </View>
        </View>
        </View>
        

        {/* </ReactNativeZoomableView> */}

        </ScrollView>
          </ScrollView>
          {/* </ZoomView> */}
          {/* <Text>This is the content</Text> */}
      </View>
    );
  }