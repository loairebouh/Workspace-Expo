// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
  getAuth,
} from "firebase/auth";

import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8h3D59YoB9kxKxgaGzZJDYHT2Qd_OT4A",
  authDomain: "learning-fa596.firebaseapp.com",
  projectId: "learning-fa596",
  storageBucket: "learning-fa596.firebasestorage.app",
  messagingSenderId: "720086896395",
  appId: "1:720086896395:web:b89ab73971f14b890b1c0e",
  measurementId: "G-C5TD3LMNHN",
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Initialize Auth (Prevent re-initialization)
const auth = getAuth(app);

// If using React Native and need persistence
if (!auth.app.options.authDomain) {
  initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
}

export { app, auth };
