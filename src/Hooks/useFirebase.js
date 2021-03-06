import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Authentication/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const [error, setError] = useState(null);
    // sign in using google 
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)

    }

    // sign in with email and pass
    const signInUsingEamilAndPass = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)

    }

    // sign up with email and pass 
    const createUserWithEmailandPass = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const updateUserProfile = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            // Profile updated!
            // ...
        }).catch((error) => {
            setError(error.message);
        });

    }


    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            })

    }



    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setLoading(false))
    }

    // observe whether user auth state changed or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, [])

    return {
        user,
        loading,
        error,
        signInUsingGoogle,
        signInUsingEamilAndPass,
        logOut,
        createUserWithEmailandPass,
        setLoading,
        setError,
        updateUserProfile, verifyEmail
    }
}

export default useFirebase;