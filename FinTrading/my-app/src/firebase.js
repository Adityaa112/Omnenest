import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB80WZvMBslZNa0EN7wlLlDuk6YqkP4G0A",
  authDomain: "fintrading-cb3d0.firebaseapp.com",
  projectId: "fintrading-cb3d0",
  storageBucket: "fintrading-cb3d0.appspot.com",
  messagingSenderId: "1024233514035",
  appId: "1:1024233514035:web:895f3954492c7c9b996f46",
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
