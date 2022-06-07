import React, { useEffect, useState ,useRef} from "react";
import {TouchableHighlight, Text, View, Dimensions, ActivityIndicator,TouchableWithoutFeedback} from 'react-native';
import Modal from 'react-native-modal';
import {buttons, styles} from '../styles/Styles'
import moment from 'moment';

import Ionicons from 'react-native-vector-icons/Ionicons';

import GifImage from '@lowkey/react-native-gif';
import * as Animatable from 'react-native-animatable';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import Svg, { G, Rect } from "react-native-svg";

const BarChart = ({
  data,
  color,
  barWidth,
  height,
  width,
  fontSize,
  thickness,
  margin
}) => {

    const [steps, setSteps] = useState(0);

    const roundedHeight = (h)=>{
        var arr =[]
        data.map((item)=>
            arr.push(item.height)
        )
        // var max = arr.reduce(function (p, v) {
        //     return ( p > v ? p : v );
        //   });
        var max = Math.max(...arr)
        max = max==0?100:(Math.ceil((max/100)))*100
        var fullHeight = (height-60).toFixed()
        var bar = ((h/max)*fullHeight).toFixed(0)
        
        return parseInt(bar);
    }    
    const remainHeight = (h)=>{
        var arr =[]
        data.map((item)=>
            arr.push(item.height)
        )
        // var max = arr.reduce(function (p, v) {
        //     return ( p > v ? p : v );
        //   });
          var max = Math.max(...arr)
        max = max==0?100:(Math.ceil((max/100)))*100
        var fullHeight = (height-60).toFixed()
        var bar = ((h/max)*fullHeight).toFixed(0)
        var remain = fullHeight-parseInt(bar)+15
        // console.log(max)
        return remain;
    }

    const horizontalData =()=>{
        var arr =[]
        data.map((item)=>
            arr.push(item.height)
        )
        // var max = arr.reduce(function (p, v) {
        //     return ( p > v ? p : v );
        //   });
        var max = Math.max(...arr)
        var bar =max==0?100:(Math.ceil((max/100)))*100
          var interval = parseInt(bar/4)

          var filtedarr =[]
          for(var i=bar; i>=0; i-=interval)
          {
            filtedarr.push(i)
          }
          
        return filtedarr;
    }
    
    const changeSteps =(value)=>{
        setSteps(value)
        // setTimeout(() => {
        //     setSteps(0)
        // }, 3000);
    }

    
    const getMargin =()=>{
        var length = data.length
        var margin = ((width-15)-(length*barWidth))/(length==24?length/2.5:length-1)

        return parseInt(margin)
    }

    const spacing = 10;
  
    const dashes = new Array(Math.floor(width / spacing)).fill(null);
  return (
      <TouchableWithoutFeedback onPress={()=>{setSteps(0)}} >
    <View style={{width:width,height:height,flexDirection:'row',alignItems:'flex-end',paddingLeft:30}}>
        {
            data.map((item,index)=>
                <View key={index} style={{width:getMargin(),alignItems:'center'}}>
                    

                    <TouchableHighlight underlayColor={'rgba(0,0,0,0.1)'}  style={{height:height-60,justifyContent:'flex-end'}} onPress={()=>{changeSteps(index+1)}}>
                    <View style={{alignItems:'center'}}>
                       
                    {
                        steps==index+1?
                    <Animatable.View animation={'fadeIn'} style={{position:'absolute',width:100,top:-remainHeight(item.height)-25,alignItems:'center'}}>
                        <View>
                        <Text style={{fontSize:25,color:'black',marginTop:-17}}>{item.height} {<Text style={{fontSize:17,color:'rgba(0,0,0,0.5)'}}>steps</Text>}</Text>
                        <Text style={{fontSize:11,color:'rgba(0,0,0,0.5)',textAlign:'left'}}>{item.date==undefined?item.x+(data.length==24?'H Today':' '+moment().format('MMM YYYY')):item.date}</Text>                            
                        </View>

                        <View style={{height:remainHeight(item.height),width:0.7,backgroundColor:'rgba(0,0,0,0.2)'}} />
                    </Animatable.View>
                    :
                    null                        
                    } 
                    <View style={{width:barWidth,height:roundedHeight(item.height),backgroundColor:color}} />
                    </View>
                        
                    </TouchableHighlight>
                    <View style={{height:15,justifyContent:'flex-end'}}>
                        <Text style={{fontSize:fontSize,color:'rgba(0,0,0,0.3)'}}>{item.x}</Text>
                    </View>
                </View>
            )
        }
        <View style={{position:'absolute',top:45,left:0,width:width,height:height-60,justifyContent:'space-between'}}>
            {
            horizontalData().map((item,index)=> 
            <View key={item} style={{flexDirection:'row',alignItems:'center'}}>
                {/* <View style={{width:25,alignItems:'flex-end',paddingRight:2}}>   
                    <Text style={{fontSize:10}}>{item}</Text>
                </View>     */}
                <Svg height="2" width="100%">
                    <G>
                        {dashes.map((_, index) => (
                        <Rect
                            key={index}
                            x="1"
                            y="1"
                            width="5"
                            height="1"
                            fill="rgba(0,0,0,0.1)"
                            translateX={spacing * index}
                        />
                        ))}
                    </G>
                    </Svg>
            </View>    
            )}
             {/* <Text>{horizontalData()}</Text>    */}
        </View>

        <View style={{position:'absolute',top:35,left:0,width:width,height:height-55,justifyContent:'space-between'}}>
            {
            horizontalData().map((item,index)=> 
            <View key={item} style={{flexDirection:'row',alignItems:'center'}}>
                <View style={{width:15,alignItems:'flex-end',paddingRight:2}}>   
                    <Text style={{fontSize:8,color:'rgba(0,0,0,0.3)'}}>{item}</Text>
                </View>  
                  
            </View>    
            )}
             {/* <Text>{horizontalData()}</Text>    */}
        </View>

        {/* <View style={{position:'absolute',top:35,left:15,width:width-30,height:height-55,justifyContent:'space-between',flexDirection:'row',}}>
            {
            horizontalData().map((item,index)=> 
            <View key={item} style={{flexDirection:'row',alignItems:'center'}}>
                <View style={{width:15,alignItems:'flex-end',paddingRight:2}}>   
                    <Text style={{fontSize:8}}>{item}</Text>
                </View>  
                  
            </View>    
            )}
        </View> */}

    </View>
    </TouchableWithoutFeedback>
  );
};
export default BarChart;