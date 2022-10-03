
import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { FaGoogle, FaMoon, FaSun } from "react-icons/fa";
import { auth } from "../firebase";
import useAuth from "../hooks/useAuth";

const Auth = () => {
//const { toggleColorMode, colorMode } = useColorMode();
const { isLoggedIn, user } = useAuth();
const handleAuth = async () => {
const provider = new GoogleAuthProvider();

signInWithPopup(auth, provider)
.then((result) => {

const credential = GoogleAuthProvider.credentialFromResult(result);
const token = credential.accessToken;
const user = result.user;
// ...
})
.catch((error) => {

const errorCode = error.code;
const errorMessage = error.message;

const email = error.customData.email;
// The AuthCredential type that was used.
const credential = GoogleAuthProvider.credentialFromError(error);
// ...
});
};
return (
<div className="container">

  {
    isLoggedIn && (
    <div className="logout">
      <button type="button" className="btn btn-warning">{user.email}</button>
      <button type="button" 
              className="btn btn-danger ms-4"
              onClick={() => auth.signOut()} >
                Logout
      </button>
    </div>
    )
  }


  {
    !isLoggedIn && (
      <button type="button" 
              className="btn btn-secondary vstack mx-auto mt-5" 
              onClick={() => handleAuth()}>
              Login with Google
      </button>
    )
  }

<style jsx>{`

 .logout {
  position:relative;
  width:370px;
  margin:0 auto;
  padding-top:
  display:flex;
  justify-content:space-around;
  padding-top:40px;
 }
`}</style>

  </div >
  );
};


export default Auth;