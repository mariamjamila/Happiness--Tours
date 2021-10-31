import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import{ useFirebase }from '../../Hooks/useFirebase';

const Login = () => {
    const {signInWithGoogle, setUser, user, logOut} = useAuth()
    const location = useLocation();
   const history= useHistory();
   const redirect_uri = location.state?.from ||'/home';
    const handleGoogleLogin= ()=>{
           signInWithGoogle()
          .then(result=>{
            history.push(redirect_uri)
          })

    }
   
    return (
        <div>
            <h2>Please Log in </h2>
            <button className="btn btn-warning" onClick={handleGoogleLogin} >Google SignIn</button>
        </div>
    
       
     
    );
};

export default Login;
