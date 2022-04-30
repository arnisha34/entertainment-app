// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJem8CSJzH1jW3Pl-Pqs1gxwa3-dw8opM",
  authDomain: "entertainment-app-b021d.firebaseapp.com",
  projectId: "entertainment-app-b021d",
  storageBucket: "entertainment-app-b021d.appspot.com",
  messagingSenderId: "187299369632",
  appId: "1:187299369632:web:0cc3adc6bf1742e6ec2fc5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const db = getFirestore()

