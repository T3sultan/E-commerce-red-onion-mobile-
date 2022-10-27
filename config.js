//firebase config key setup
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

//your web app's firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOkvKjsCProZspt_gHlrOje2FLRfXAhV8",
  authDomain: "e-commerce-red-onion.firebaseapp.com",
  projectId: "e-commerce-red-onion",
  storageBucket: "e-commerce-red-onion.appspot.com",
  messagingSenderId: "108442353081",
  appId: "1:108442353081:web:d79eeefa942708b42bca68",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export { firebase };
