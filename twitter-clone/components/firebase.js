// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4pIj2SoTs50IFeBVoekN_nvZmCttVXOI",
  authDomain: "shiny-project-2d28b.firebaseapp.com",
  projectId: "shiny-project-2d28b",
  storageBucket: "shiny-project-2d28b.appspot.com",
  messagingSenderId: "1089265971267",
  appId: "1:1089265971267:web:169e4a67e14e50861aa4f6"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const Db = getFirestore();
const Storage = getStorage();

export default app;
export { Db, Storage };
