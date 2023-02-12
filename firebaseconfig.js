// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAspJjm1TLE4qqXw_bG9uY_kuigl88O4fI",
  authDomain: "ikonmn-385c1.firebaseapp.com",
  projectId: "ikonmn-385c1",
  storageBucket: "ikonmn-385c1.appspot.com",
  messagingSenderId: "454175075490",
  appId: "1:454175075490:web:49bd0cf0849e9e46763bfb"
};


export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);