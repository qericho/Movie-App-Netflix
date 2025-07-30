import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDqST77FtPbLFPeSelP0zLUrP7h_JHq4AI",
    authDomain: "movie-app-a87be.firebaseapp.com",
    projectId: "movie-app-a87be",
    storageBucket: "movie-app-a87be.appspot.com",
    messagingSenderId: "305278950512",
    appId: "1:305278950512:web:6630e6251cd315df9c68b5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }; 
