import { Button } from '@material-ui/core';
import React from 'react';
import "./Login.css";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
import Logo from './Logo.jpg'

 
 function Login() {
    //  eslint-disable-next-line
     const [state, dispatch] = useStateValue();
        
    
        const signIn = () => {
            //sign in...
            auth
                .signInWithPopup(provider)
                .then((result) => {
                    dispatch({
                        type: actionTypes.SET_USER,
                        user: result.user,
                    })
                })
                .catch((error) => alert(error.message));
        };
        
     return (
         <div className='login'>
             <div className="login__logo">
             <img
             alt="Public Domain Image" 
             src={Logo}
             />
             <h1>COMICBOOK</h1>
         </div>
         <Button type="submit" onClick={signIn}
         >
             Sign In
             </Button>
        </div>
     );
 }
 
 export default Login
 