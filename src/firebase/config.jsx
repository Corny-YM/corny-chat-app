import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCpeDpu9TXgkEfVf8PnodVJpH1DfMjOHdM',
  authDomain: 'corny-chat.firebaseapp.com',
  projectId: 'corny-chat',
  storageBucket: 'corny-chat.appspot.com',
  messagingSenderId: '325174611609',
  appId: '1:325174611609:web:d4ce4c5e6f822e3ba8f208',
  measurementId: 'G-QT6Q0VXPTC',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
export const googleProvider = new GoogleAuthProvider(app);
export const facebookProvider = new FacebookAuthProvider(app);
