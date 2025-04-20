import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxjuw8HMlDPK841OtpGVT3cq4BnoEZsxY",
  authDomain: "interview-prep-6d414.firebaseapp.com",
  projectId: "interview-prep-6d414",
  storageBucket: "interview-prep-6d414.firebasestorage.app",
  messagingSenderId: "803342730035",
  appId: "1:803342730035:web:c512d6a94eb963942bb446",
  measurementId: "G-60MBGEZ858"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
