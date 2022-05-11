import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from 'firebase/firestore';


const app = firebase.initializeApp({
  apiKey: "AIzaSyAL4ZLlCbQ1O8rAUIgWDjOYCFa_8TZ125Y",
  authDomain: "crypto-ab3c3.firebaseapp.com",
  projectId: "crypto-ab3c3",
  storageBucket: "crypto-ab3c3.appspot.com",
  messagingSenderId: "331809294614",
  appId: "1:331809294614:web:ff74054808bc320799a837"
})

export const db = getFirestore(app)
export const auth = app.auth();
export default app;

