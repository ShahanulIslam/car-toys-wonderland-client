import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const createUser = (email, password, displayName, photoUrl) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password).then(
            (userCredential) => {
                // Set display name and photo URL
                return updateProfile(userCredential.user, {
                    displayName,
                    photoUrl,
                }).then(() => {
                    return userCredential;
                });
            }
        );
    };

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin =() =>{
        return signInWithPopup(auth,googleProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log("logged User", loggedUser)
            setLoading(false)
            setUser(loggedUser)
        })
        return () => {
            return unsubscribe()
        }
    }, []);

    const logOut = () =>{
        return signOut(auth);
    }

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleLogin,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;