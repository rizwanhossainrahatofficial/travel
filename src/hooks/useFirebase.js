import { getAuth, GoogleAuthProvider, signInWithPopup,onAuthStateChanged,signOut  } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseinitialiazeAuthentication from "../Firebase/firebase.init";


firebaseinitialiazeAuthentication();
const useFirebase=()=>{
    const [user,setuser]=useState()
    const auth = getAuth();
  
    const googleSignIn=()=>{
        const googleProvider = new GoogleAuthProvider();
       return signInWithPopup(auth,googleProvider)  
    }

    useEffect(()=>{
        onAuthStateChanged(auth,user=>{
            if(user){
                setuser(user)
            }
            else{
                setuser({})
            }
        })
    },[]);

    const logOut=()=>{
        signOut(auth)
        .then(()=>{})
    }

    return{
        user,
        googleSignIn,
        logOut
    }
}

export default useFirebase;