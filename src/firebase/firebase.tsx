import { initializeApp } from "firebase/app";
import 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

// Your configuration
const firebaseConfig = {
    apiKey: "AIzaSyAu17GdEXY1xaQpqlEiPmbSVJxZfKx_yp8",
    authDomain: "scissors-capstone.firebaseapp.com",
    projectId: "scissors-capstone",
    storageBucket: "scissors-capstone.appspot.com",
    messagingSenderId: "7015935597",
    appId: "1:7015935597:web:a633af6751dacaff84d964"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export function signUp(email:string, password:string, username:string) {
    createUserWithEmailAndPassword(auth, email, password)
        .then(function (userCredential) {
            var currentUser = userCredential.user;

            console.log({ currentUser });

            if (auth.currentUser) {
                updateProfile(auth.currentUser, {
                    displayName: username
                }).then(() => {
                    alert('signUp successful!');
                })
            }

        })
        .catch(function (error) {
            alert('signUp error: ' + error.message);
        });
}

// Login Form Submission
export function login(email:string, password:string) {
    signInWithEmailAndPassword(auth, email, password).then(function () {
        alert('Login successful!');
    })
        .catch(function (error) {
            alert('Login error: ' + error.message);
        });
    return false;
}

export default getFirestore();