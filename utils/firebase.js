// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAos9zzOCed8jXEctb6WjNrgKFOgKPolpw",
  authDomain: "netflix-clone-108b3.firebaseapp.com",
  projectId: "netflix-clone-108b3",
  storageBucket: "netflix-clone-108b3.firebasestorage.app",
  messagingSenderId: "488802216741",
  appId: "1:488802216741:web:789a32ea2ca7fc8ba848cc",
  measurementId: "G-2DRB8YHK8W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();