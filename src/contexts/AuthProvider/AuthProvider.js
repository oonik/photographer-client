import React, {createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from "../../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
 
 const AuthProvider = ({children}) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState();

    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const loginUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signInWithEmail = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = ()=>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            return unsubscribe();
        }
    },[])

    const authInfo = {
          user,
          loading,
          createUser,
          loginUser,
          signInWithEmail,
          logOut,
          
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
 };
 
 export default AuthProvider;