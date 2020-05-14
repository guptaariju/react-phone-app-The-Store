import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyDzY9szbNh1-uvlxPUrq47SY2nB5JejJo4",
    authDomain: "fir-react-phn-app.firebaseapp.com",
    databaseURL: "https://fir-react-phn-app.firebaseio.com",
    projectId: "fir-react-phn-app",
    storageBucket: "fir-react-phn-app.appspot.com",
    messagingSenderId: "899963097252",
    appId: "1:899963097252:web:45aea718a9f3ef00691631",
    measurementId: "G-FMQZ9W9BGM"

});

export default app;