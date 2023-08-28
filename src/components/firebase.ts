import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCyVRxE9poQJh3iAlMYtWDjQZMP4GONFb8",
  authDomain: "portfolio-hp-14cad.firebaseapp.com",
  projectId: "portfolio-hp-14cad",
  storageBucket: "portfolio-hp-14cad.appspot.com",
  messagingSenderId: "411924593965",
  appId: "1:411924593965:web:f33df10fee7fcb19aee7a4"
};


const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
