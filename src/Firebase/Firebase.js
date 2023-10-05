// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFeduSHEWD0zQKbvHN-o9RZ1A76LHQf1o",
  authDomain: "react-dragon-news-auth-f8579.firebaseapp.com",
  projectId: "react-dragon-news-auth-f8579",
  storageBucket: "react-dragon-news-auth-f8579.appspot.com",
  messagingSenderId: "1022065287173",
  appId: "1:1022065287173:web:b81184ff844e00e4f57c6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;