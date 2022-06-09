const functions = require("firebase-functions");

const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();

exports.signupUsers = functions.auth.user().onCreate((user) => {
  return db.collection("people").doc(user.uid).set({
    email: user.email,
  });
});
exports.deleteUser = functions.auth.user().onDelete((user) => {
  const peopleData = db.collection("people").doc(user.uid);
  return peopleData.delete();
});

// import { collection, addDoc,deleteDoc } from "firebase/firestore";

// import 'firebase/firestore'
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "@firebase/firestore";

// const firebaseConfig = {
//     apiKey: "AIzaSyAJIhZoAj-DQxbq8Hed1nwoUqFfUx40nPE",
//     authDomain: "host-e-commerce.firebaseapp.com",
//     projectId: "host-e-commerce",
//     storageBucket: "host-e-commerce.appspot.com",
//     messagingSenderId: "618313637038",
//     appId: "1:618313637038:web:d51b94722ca3195d79a13f",
//     measurementId: "G-FPPFDE6VG1"
// };

// const app=initializeApp(firebaseConfig);
// export const db=getFirestore(app);

// exports.signupUsers = functions.auth.user().onCreate((user) => {
//     const eachPerson = collection(db, "person");
//     await addDoc(eachPerson , {
//         email:user.email
//     } )
// });
// exports.deleteUser = functions.auth.user().onDelete((user) => {
//     const eachPerson = doc(db, "person", user.uid);
//     await deleteDoc(eachPerson);
// });
