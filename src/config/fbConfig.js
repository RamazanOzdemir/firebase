  import firebase from "firebase/app";
  import "firebase/database";
  import "firebase/auth";
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBB8VV6P3qlc2LuczF_-VQtJpgAv_C3lus",
    authDomain: "reactapp-47e67.firebaseapp.com",
    databaseURL: "https://reactapp-47e67.firebaseio.com",
    projectId: "reactapp-47e67",
    storageBucket: "reactapp-47e67.appspot.com",
    messagingSenderId: "61887007305"
  };
  firebase.initializeApp(config);
 // firebase.database().settings({timestampsInSnapshots:true});
  export default firebase;
