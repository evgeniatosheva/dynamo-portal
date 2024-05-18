// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDzeZ7EaBBa7CbX5M5Mzinjm-fKeKnMdDU',
  authDomain: 'dynamo-portal.firebaseapp.com',
  projectId: 'dynamo-portal',
  storageBucket: 'dynamo-portal.appspot.com',
  messagingSenderId: '857284122037',
  appId: '1:857284122037:web:a1da95e52581c4dc7735fc',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
