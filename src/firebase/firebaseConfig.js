
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBUT45zYOzVSVm5EylEQ_5cW8-fbWU-P6M",
    authDomain: "olx-clone-2ebda.firebaseapp.com",
    projectId: "olx-clone-2ebda",
    storageBucket: "olx-clone-2ebda.appspot.com",
    messagingSenderId: "606853282822",
    appId: "1:606853282822:web:d395f942c77ccaa65b9787",
    measurementId: "G-TZH7X240JS"
  };
  

const init = initializeApp(firebaseConfig);
export const auth = getAuth(init)
export const firebase = getFirestore(init)
 