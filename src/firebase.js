import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAKPhXick7lIHxs2K4Nywf6X6Jh601TmTM",
    authDomain: "linkedin-clone-86f59.firebaseapp.com",
    projectId: "linkedin-clone-86f59",
    storageBucket: "linkedin-clone-86f59.appspot.com",
    messagingSenderId: "95704279729",
    appId: "1:95704279729:web:0cdf8b1706b70e032d1090",
    measurementId: "G-4JRLGRE411"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export default firebase
export {db, auth};