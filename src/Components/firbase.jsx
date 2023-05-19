// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCC7qr76bhrdG4Nvlh3KZN6Vi0W7klAdj8",
  authDomain: "netflix-98f7f.firebaseapp.com",
  projectId: "netflix-98f7f",
  storageBucket: "netflix-98f7f.appspot.com",
  messagingSenderId: "545676929661",
  appId: "1:545676929661:web:9f804a6041815101865f14"
};

// const firebaseConfig = {
//     apiKey:process.env.REACT_APP_FIRBASE_API_KEY,
//     authDomain:process.env.REACT_APP_FIRBASE_AUTH_DOMAIN,
//     projectId:process.env.REACT_APP_FIRBASE_PROJECT_ID,
//     storageBucket:process.env.REACT_APP_FIRBASE_STORAGE_BUCKET,
//     messagingSenderId:process.env.REACT_APP_FIRBASE_STORAGE_BUCKET,
//     appId:process.env.REACT_APP_APP_ID
//   };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);