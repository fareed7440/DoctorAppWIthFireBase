import firebase from 'firebase'
    var config = {
    apiKey: "AIzaSyD1WcGbcSdUPKFaSh0bSqU_5elOUTBGGuw",
    authDomain: "doctorappnative.firebaseapp.com",
    databaseURL: "https://doctorappnative.firebaseio.com",
    projectId: "doctorappnative",
    storageBucket: "doctorappnative.appspot.com",
    messagingSenderId: "1082176699906"
  };
  firebase.initializeApp(config);
  export const auth = firebase.auth();
export const database = firebase.database();
  export const storage =  firebase.storage();