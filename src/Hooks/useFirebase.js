import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { useState , useEffect} from "react";

import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading]= useState(true)
  const auth = getAuth();
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
 return  signInWithPopup(auth, provider)
                        .then(result=>{
                          setUser(result.user)
                        })
                           .finally(()=>setIsLoading(false))
      
     

   
  };

  useEffect(()=>{
    onAuthStateChanged(auth, user =>{
      if (user){
        setUser(user);
      }
      else{
        setUser({})
      }
      setIsLoading(false)
    })
  },[])
  const logOut=()=>{
    setIsLoading(true)
    signOut(auth)
    .then(()=>{ })
    .finally(()=>setIsLoading(false))

  }
   
  return {
    user, setUser,
    signInWithGoogle,
    isLoading, 
    logOut 
  }
};
export  default  useFirebase;