import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { useState } from "react/cjs/react.development";
import initializeAuthorentication from "../firebase/firebase.init";

initializeAuthorentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, serError] = useState("");
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.email;
        serError(errorMessage);
        // The AuthCredential type that was used.
        console.log(errorMessage);
      });
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return {
    user,
    error,
    signInWithGoogle,
    logOut,
  };
};

export default useFirebase;
