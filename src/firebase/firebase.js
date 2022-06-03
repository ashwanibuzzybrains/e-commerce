
import 'firebase/firestore'
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAJIhZoAj-DQxbq8Hed1nwoUqFfUx40nPE",
    authDomain: "host-e-commerce.firebaseapp.com",
    projectId: "host-e-commerce",
    storageBucket: "host-e-commerce.appspot.com",
    messagingSenderId: "618313637038",
    appId: "1:618313637038:web:d51b94722ca3195d79a13f",
    measurementId: "G-FPPFDE6VG1"
};


const app=initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db=getFirestore(app);