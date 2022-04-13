import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const firebaseinitialiazeAuthentication=()=>{
    initializeApp(firebaseConfig)
}

export default firebaseinitialiazeAuthentication;