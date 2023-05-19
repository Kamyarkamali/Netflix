import { createContext,useState,useEffect,useContext } from "react";

///FireBase
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged} from "firebase/auth";
import { auth } from "../Firbase";

const AuthContext=createContext();

export function AuthContextProvider({children}){
    const [user,seUser]=useState({});

    function singUp(email,password){
        return createUserWithEmailAndPassword(auth,email,password)
    }

    function logout(){
        return signOut(auth)
    }

    function login(email,password){
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            seUser(currentUser)
        })

        return ()=>{
            unsubscribe()
        }

    },[])

    return(
        <AuthContext.Provider value={{singUp,user,login,logout}}> 
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth(){
    return useContext(AuthContext)
}