import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyANAeV3GrrGJgj7AhGvhgRqAvH-4PEwL_E",
    authDomain: "linkedin-clone-personalproject.firebaseapp.com",
    projectId: "linkedin-clone-personalproject",
    storageBucket: "linkedin-clone-personalproject.appspot.com",
    messagingSenderId: "153405744273",
    appId: "1:153405744273:web:07652cb49912e5a61d0b30",
    measurementId: "G-3GTTE3B7SQ"
  };

//   Sets everything up
  const firebaseApp = firebase.initializeApp(firebaseConfig);
//   I have access to the variable
  const db = firebaseApp.firestore();
//   Get access to auth
  const auth = firebase.auth();

//   Can use db and auth throughout the app
  export {db, auth};