
import firebase from 'firebase/compat/app'
import {getStorage} from 'firebase/storage'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDq8bGYR-rIzMfMjN4VseFVRnWfMhHNVb4",
    authDomain: "netflix-clone-b1b5e.firebaseapp.com",
    projectId: "netflix-clone-b1b5e",
    storageBucket: "netflix-clone-b1b5e.appspot.com",
    messagingSenderId: "420440924457",
    appId: "1:420440924457:web:b39377d4bb98cd8e045738",
    measurementId: "G-7NTWNTCK4L"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = getStorage();
  const auth = getAuth();

  export {auth};
  export default db;