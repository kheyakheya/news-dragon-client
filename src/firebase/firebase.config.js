// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// VITE_APIKEY: AIzaSyCJ1EuFE662q-QBzi-AFpGMq1Hg4oblba8
//   VITE_AUTHDOMAIN: the-news-dragin-client.firebaseapp.com
//   VITE_PROJECTID: the-news-dragin-client
//   VITE_STORAGEBUCKET: the-news-dragin-client.appspot.com
//   VITE_MESSAGINGSENDERID: 181146829903
//   VITE_APPID: 1:181146829903:web:6b1dfd852d5e5af1c9163a

console.log("environment variable", import.meta.env.VITE_PASS)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId:  import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app; 