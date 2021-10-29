import { firebase } from "@react-native-firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDLMqplk8EPkFwK1cucPBkhOQmpJSciE7E",
    authDomain: "goodseed-app-1621860475799.firebaseapp.com",
    projectId: "goodseed-app-1621860475799",
    storageBucket: "goodseed-app-1621860475799.appspot.com",
    messagingSenderId: "1096883138091",
    appId: "1:1096883138091:web:ff9722866e4c9399dd046e",
    measurementId: "G-WJ4939NJ6N"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);