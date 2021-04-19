import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

export const firebaseInitializeConfig = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig)
    }
}





// Google SignIn function using firebase
export const handleGoogleSignIn = () => {


    const provider = new firebase.auth.GoogleAuthProvider();

    return firebase.auth().signInWithPopup(provider)
        .then((result) => {
            const { displayName, email, photoURL } = result.user;
            console.log(result)
            const signedInUser = {
                isSignIn: true,
                name: displayName,
                photo: photoURL,
                email
            }
            console.log(signedInUser)
            setUserToken(displayName, email, photoURL)

            return signedInUser
        }).catch((error) => {
            console.log(error.message)
        });
}


const setUserToken = (displayName, email,photoURL) => {

    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function (idToken) {
        const user = {
            'token': idToken,
            'name': displayName,
            'photo': photoURL,
            'email': email,
            "isSignIn": true,
        }
        sessionStorage.setItem('user', JSON.stringify(user))
    }).catch(function (error) {
        // Handle error
    });
}

