import  { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth,  onAuthStateChanged, signInWithEmailAndPassword,  signOut, updateProfile } from 'firebase/auth';
import initializeAuthentication from '../Firebase/firebase.init';


initializeAuthentication()
const useFirebase = () => {
    //States
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const auth = getAuth();

    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                savedUser(name,email,password);
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const destination = location?.state?.from || '/';
                setUser(result.user);
                console.log(result.user)
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])
    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }
    
    useEffect(() => {
        fetch(`https://lit-savannah-17178.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    const savedUser=(displayName,email,password)=>{
        const user={displayName,email,password};
        fetch(`https://lit-savannah-17178.herokuapp.com/users`,{
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(user)
        })
        .then()
    }
    return {
        user,
        isLoading,
        authError,
        admin,
        registerUser,
        loginUser,
        setIsLoading,
        logout,
    }
        
    
}

export default useFirebase;