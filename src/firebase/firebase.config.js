// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMGNPo62euGpuv0MAz1rcFDcyRkxaqNas",
  authDomain: "photographer-e3e20.firebaseapp.com",
  projectId: "photographer-e3e20",
  storageBucket: "photographer-e3e20.appspot.com",
  messagingSenderId: "985194908245",
  appId: "1:985194908245:web:5aad45e90d6afce5dfa2dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;