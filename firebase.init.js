import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAOkvKjsCProZspt_gHlrOje2FLRfXAhV8",
  authDomain: "e-commerce-red-onion.firebaseapp.com",
  projectId: "e-commerce-red-onion",
  storageBucket: "e-commerce-red-onion.appspot.com",
  messagingSenderId: "108442353081",
  appId: "1:108442353081:web:d79eeefa942708b42bca68",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
