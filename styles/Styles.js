import {StyleSheet, Dimensions, Platform} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },  
  scrollContainer: {
    flex: 1,
  },
  contentContainer:{
    justifyContent:'space-between',
    height:windowHeight,
  },
  viewContainer: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: windowHeight/10
  },
  contactView: {
    backgroundColor:'white',
    marginLeft:0,
    paddingVertical:15,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.22,
    // shadowRadius: 2.22,

    // elevation: 3,
    // alignSelf:'flex-end',
    height:windowHeight/2
  },
  header: {
    height: windowHeight/10,
    width:windowWidth,
    backgroundColor: 'white',
    position:'absolute',
    top:0,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
    paddingLeft:10,
    zIndex:2,
    padding:10
  },
  newHeader: {
    height: windowHeight/1.5,
    width:windowWidth,
    backgroundColor: '#6bb333',
    position:'absolute',
    top:0,
    zIndex:0,
    flexDirection:'row',
    alignItems:'flex-start',
    justifyContent:'flex-start',
    paddingLeft:10,
    padding:10,
  },
  normalheader: {
    height: windowHeight/10,
    width:windowWidth,
    backgroundColor: '#6bb333',
    position:'absolute',
    top:0,
    zIndex:9999,
    flexDirection:'row',
    alignItems:'flex-start',
    justifyContent:'flex-start',
    paddingLeft:10,
    padding:10,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:windowHeight/9,
    // alignItems:""
  },
  profileInnerContainer: {
    paddingTop:0,
    // alignItems:""
  },
  headerText: {
    fontSize: 20,
    marginTop:30
  },
  inputText:{
    // backgroundColor:'#8aa8ae',
    height:40,
    marginLeft:10,
    width:windowWidth-55,
    borderRadius:20,
    paddingLeft:50,
    textAlignVertical:'center',
    borderColor:'gray',
    borderBottomWidth:1,
    margin:5
  },  
  inputText2:{
    // backgroundColor:'#8aa8ae',
    height:40,
    // marginLeft:10,
    width:windowWidth-60,
    borderRadius:5,
    paddingLeft:20,
    textAlignVertical:'center',
    borderColor:'gray',
    marginHorizontal:15,
    marginBottom:10,
    borderBottomWidth:1,
  },
  loginBoard:{
    backgroundColor:'white',
    height:'auto',
    marginLeft:0,
    width:windowWidth,
    borderTopLeftRadius:50,
    textAlignVertical:'center',
    paddingVertical:10,
    shadowColor: "#000",
    position: 'absolute',
    bottom:0,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    zIndex:2, 
    paddingTop:30
  },
  loginBoard2:{
    height:'auto',
    marginLeft:0,
    width:windowWidth,
    borderTopLeftRadius:50,
    borderTopRightRadius:50,
    textAlignVertical:'center',
    paddingVertical:10,
    zIndex:2, 
    paddingTop:30,
    margin:0,
    position:'absolute',
    bottom:0,
    alignSelf:'center',
    backgroundColor:'white'
  },
  loginpic:{
    width:65,
    height:65,
    backgroundColor:'white',
    borderRadius:50,
    alignItems:'center',
    justifyContent:'flex-start',
    alignSelf:'center',
    marginBottom:-32.5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,
    zIndex:1
  },
  orBar:{
    height:0.7,
    width:windowWidth/3,
    backgroundColor:'gray',
  },
  linearGradient:{
    flex:1,
    alignItems:'flex-start',
    justifyContent:'center'
  },
  giantView:{
    width:(windowWidth/2)-20,
    height:(windowHeight/2),
    margin:5,
    justifyContent:'flex-end',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,
    
  },
  textStyle2:{
    width:(windowWidth/2)-20,
    fontWeight:'bold',
    fontSize:16,
    textAlign:'center',
    padding:5,
    lineHeight:25
  },
  textStyleBlur:{
    width:(windowWidth/2)-20,
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5,
    alignSelf:'flex-end',
    backgroundColor:'rgba(255,255,255,0.5)',
    paddingVertical:5, 
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height:windowHeight,
    width:windowWidth
  },
  avatar: {
    height:windowWidth/4.5,
    width:windowWidth/4.5,
    marginHorizontal:10,
    marginVertical:10,
    borderRadius:100
  },
  avatar2: {
    height:windowWidth/3,
    width:windowWidth/3,
    borderRadius:100,
    alignSelf:'center',
    zIndex:1
  },
  arc: {
    height:windowHeight,
    width:windowWidth,
    // alignSelf:'flex-end',
    resizeMode:'contain',
    bottom:0,
    position:'absolute',
    // marginLeft:-windowWidth/2,
    zIndex:1
  },
  map: {
    height:538,
    width:327,
    // height:windowHeight/1.1,
    // width:windowWidth/1.1,
    // alignSelf:'flex-end',
    // resizeMode:'contain',
    alignSelf:'center',
    top:0,
    position:'absolute',
    // marginLeft:-windowWidth/2,
    zIndex:2,
    // paddingLeft:15
    // maxHeight:
  },
  levelIcon:{
    width:14,
    height:17,
    alignItems:'center',
    paddingTop:0,
  },
  heart: {
    height:(windowWidth/2.5)-7,
    width:windowWidth/2.5,
    // alignSelf:'flex-end',
    position:'absolute',
    top:0,
    // marginLeft:-windowWidth/2,
    zIndex:2,
    // backgroundColor:'red',
    // marginTop:-10
  },
  heart2: {
    height:(windowWidth/2.5)-7,
    width:windowWidth/2.5,
    // alignSelf:'flex-end',
    position:'absolute',
    top:0,
    // marginLeft:-windowWidth/2,
    zIndex:2,
    left:0,
    // backgroundColor:'red',
    // marginTop:-10
  },
  heartBg: {
    marginTop:0,
    height:(windowHeight/2.5),
    width:windowWidth,
    
    alignSelf:'center',
    // marginLeft:-windowWidth/2,
    alignItems:'center',
    // paddingLeft:windowHeight/3,
    // paddingTop:windowHeight/2,
    // flexDirection:'row',
    // padding:15,
    // backgroundColor:'#6bb333',
    // top:30,
    // alignSelf:'flex-end',
    // position:'absolute',
    // marginLeft:-windowWidth/2,
    zIndex:1,
    paddingVertical:10,
    justifyContent:'space-between',
    paddingBottom:windowHeight/8
    // borderBottomLeftRadius:600,
    // borderBottomRightRadius:600
    // left:5
  },
  heartempty: {
    height:windowWidth/2.5,
    width:windowWidth/2.5,
    backgroundColor:'#438e05',
    alignItems:'center',
    justifyContent:'flex-end',
    alignSelf:'flex-start'
    // position:'absolute',
    // top:0
  },
  stepCounterView: {
    height:(windowWidth/2.2),
    width:windowWidth/2.2,
    top:50,
    // alignSelf:'flex-end',
    position:'absolute',
    // marginLeft:-windowWidth/2,
    zIndex:1,
    right:10,
    // backgroundColor:'red'
  },
  fill: {
    height:((windowWidth/2.2)-20)/5,
    width:windowWidth/2,
    backgroundColor:'white'
  },
  fill2: {
    height:((windowWidth/2.2)-20)/5,
    width:(windowWidth/2)/5,
    backgroundColor:'white'
  },
  fill3: {
    height:((windowWidth/2.2)-20)/5,
    width:(windowWidth/2)/5,
    backgroundColor:'white'
  },
  fill4: {
    height:((windowWidth/2.2)-20)/5,
    width:(windowWidth/2)/5,
    backgroundColor:'white'
  },
  fill5: {
    height:((windowWidth/2.2)-20)/5,
    width:(windowWidth/2)/5,
    backgroundColor:'white'
  },
  particleContainer: {
    elevation: 2,
    zIndex: 2
  },
  star: {
    width: 24,
    height: 24
  },
  bg: {
    height:windowHeight,
    width:windowWidth,
    alignSelf:'baseline',
    top:0,
    position:'absolute',
    zIndex:1,
    resizeMode:'cover'
    // marginLeft:-windowWidth/2
  },
  road: {
    height:windowHeight,
    width:windowWidth*2,
    alignSelf:'center',
    resizeMode:'contain',
    bottom:-200,
    position:'absolute',
    // marginLeft:-windowWidth/2,
    zIndex:1
  },
  grass: {
    height:windowHeight,
    width:windowWidth*2,
    alignSelf:'center',
    resizeMode:'contain',
    bottom:-110,
    position:'absolute',
    // marginLeft:-windowWidth/2,
    zIndex:1
  },
  ///////////////// chamil ///////////////////
  textinputcontainer: {
    backgroundColor: 'transparent',
    width: windowWidth - 30,
    textAlignVertical: 'center',
  },
  textStyle: {
    backgroundColor: 'white',
    marginTop: 3,
    marginBottom: 10,
    elevation: 7,
    shadowColor: 'gray',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.01,
    shadowRadius: 5,
    borderRadius: 5,
    paddingLeft: 10,
  },
  //////
  headerCotainer: {
    width: '100%',

    paddingHorizontal: 14,
    paddingTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#6bb333',
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerImage: {
    width: 20,
    height: 20,
  },
  headerText: {
    color: 'white',
    paddingLeft: 20,
    fontSize: 20,
    fontWeight: 'normal',
    
  },
  titleStyle: {
    color: 'white',
    fontWeight: 'normal',
    padding: 0,
    fontSize: 30,
    // marginTop:-15,
    marginBottom: -10,
    // backgroundColor: '#6bb333'
  },
  tabTextContainerStyle: {
    backgroundColor: 'transparent',
    borderRadius: 18,
  },
  tabTextContainerActiveStyle: {
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  tabTextStyle: {
    fontSize: 15,
    fontWeight: 'normal',
    lineHeight: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    color: 'white',
  },
  tabTextActiveStyle: {
    fontSize: 15,
    fontWeight: 'normal',
    lineHeight: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    color: 'black',
  },
  tabWrapperStyle: {
    paddingVertical: 10,
  },
  tabsContainerStyle: {
    paddingHorizontal: 10,
  },
  contentContiner: {
    // height: windowHeight,
    padding: 10,
  },
  contentText: {
    fontSize: 16,
  },
  cardcontainer: {
    marginTop: 12,
    shadowColor: 'rgb(35,35,35)',
    shadowOffset: {
      width: 2,
      heght: 2,
    },
    shadowRadius: 40,
    shadowOpacity: 0.08,
    borderWidth: 1,
    borderColor: 'rgb(246,245,248)',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 24,
    paddingHorizontal: 15,
    paddingVertical: 16,
    marginHorizontal:5,
    elevation:3
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 8,
  },
  labelTextContainer: {
    backgroundColor: 'rgb(240,240,240)',
    borderRadius: 16,
    color: 'rgb(25,25,25)',
  },
  labelText: {
    fontSize: 13,
    lineHeight: 16,
    color: 'black',
    paddingHorizontal: 8,
    paddingVertical: 4,
    fontFamily: 'AvertaStd-Semibold',
    letterSpacing: 0.8,
  },
  mainText: {
    fontSize: 20,
    lineHeight: 24,
    color: 'black',
    paddingTop: 8,
    paddingBottom: 20,
    fontFamily: 'AvertaStd-Semibold',
  },
  radioButtonText: {
    paddingVertical: 8,
    fontSize: 12,
    color: 'gray',
  },
  bottomSheet: {
    borderTopLeftRadius:50,
    borderTopRightRadius:50,
    height:windowHeight/2,
    padding:0,
    zIndex:1,
    backgroundColor:'#fff',
    marginTop:10
  },
  profileHeader: {
    borderRadius:10,
    borderTopLeftRadius:50,
    borderTopRightRadius:50,
    height:windowHeight/3.2,
    backgroundColor: 'white',
  },
  imageBg: {
    height:windowHeight/2.5,
    width:windowWidth,
    justifyContent:'flex-end'
  },
  imageBgInner:{    
    borderRadius:10,
    borderTopLeftRadius:50,
    borderTopRightRadius:50,
  },
  profilHeader:{
    backgroundColor:'rgba(255,255,255,0.9)',
    height:windowHeight/4,
    justifyContent:'space-evenly',
    alignItems:'center',
    paddingTop:(windowHeight/16),
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10
  },
  profilePic:{
    height:windowWidth/4,
    width:windowWidth/4,
    borderRadius:100,
    alignSelf:'center',
    zIndex:2,
  },
  profilePicBig:{
    height:windowHeight/3,
    width:windowHeight/5,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    alignSelf:'center',
    zIndex:2,
    margin:0,
    resizeMode:'center',
    // margin:10
  },
  profilePicBig2:{
    height:windowHeight/3,
    width:windowHeight/5,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    alignSelf:'center',
    zIndex:2,
    margin:0,
    // resizeMode:'center',
    // margin:10
  },
  profilPicBack:{
    backgroundColor:'rgba(255,255,255,0.7)',
    height:windowHeight/7,
    width:windowHeight/7,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',    
    zIndex:2,
    borderRadius:200,
    marginBottom:-(windowHeight/8)/2,
  },
  divider:{
    height:0.7,
    width:windowWidth-40,
    alignSelf:'center',
    backgroundColor:'#e5e5e5',
    margin:10
  },
  
  summary: {
    backgroundColor: 'white',
    width: windowWidth-30,
    // padding:15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    
    elevation: 3,
    margin:15,
    borderRadius:15,
    flexDirection:'column',
    alignItems:'flex-end',

    paddingTop:15,
    marginVertical:10
    // justifyContent:'flex-end'
  },
  
  summarybtn: {
    backgroundColor: 'white',
    padding:5,
    paddingHorizontal:10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    
    elevation: 3,
    borderRadius:10,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    margin:7
    // alignSelf:'flex-end'
  },
  hr:{
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 1,
    width:'90%'
  }
});

const buttons = StyleSheet.create({
  menu: {
    position: 'absolute',
    left: 10,
    top: 10,
    zIndex: 1,
    elevation:4,
  },
  login: {
    zIndex: 1,
    paddingHorizontal:10,
    paddingVertical:7,
    width:windowWidth-100,
    margin:5,
    // height:40,
    borderWidth:1,
    borderColor:'#255c43',
    alignItems:'center',
    borderRadius:15,
    alignSelf:'center',
    backgroundColor:'#f8f8f8'
  },
  text: {
    color:'#4c4c4c',
    fontSize: 15,
  },
  modalButton :{
    alignSelf:'flex-end',
    // borderWidth:1,
    // paddingHorizontal:25,
    paddingVertical:10,
    borderBottomRightRadius:10,
    width:(windowWidth-40)/2,
    margin:-10,
    alignItems:'center'
  },
  homebuttons:{
    paddingHorizontal:15,
    paddingVertical:5,
    // backgroundColor:'rgba(255,255,255,0.7)',
    borderRadius:10,
    // borderColor:'rgba(255,255,255,0.8)',
    // borderWidth:1
  },
  profileBitton:{
    height:30,
    width:30,
    borderRadius:25,
    // alignSelf:'flex-end',
    // borderColor:'white',
    // borderWidth:2
  },
  continuebtn:{
    backgroundColor:"rgba(107, 179, 51,0.2)",
    paddingHorizontal:15,
    paddingVertical:5,
    marginTop:25,
    borderRadius:25
  },
  float:{
    backgroundColor:"rgb(107, 179, 51)",
    // paddingHorizontal:15,
    // paddingVertical:5,
    // marginTop:25,
    borderRadius:25,
    position:'absolute',
    bottom:20,
    right:20
  },

});

export {styles, buttons};
