import firebase from "firebase";
require("@firebase/firestore");


  const firebaseConfig = {
    apiKey: "AIzaSyAp94XFL2wDGS0P8Pf_d7lromJP5jJPg0A",
    authDomain: "projeto-c-71.firebaseapp.com",
    projectId: "projeto-c-71",
    storageBucket: "projeto-c-71.appspot.com",
    messagingSenderId: "636210555122",
    appId: "1:636210555122:web:1875386cbb39ad04a1086b"
  };


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
