import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCsE4qzft52c-04odtZgbG1fFcbKe1Pqx0",
    authDomain: "comicbook-11fe4.firebaseapp.com",
    projectId: "comicbook-11fe4",
    storageBucket: "comicbook-11fe4.appspot.com",
    messagingSenderId: "448686155736",
    appId: "1:448686155736:web:9fba69ae1a7e30bd8934ad",
    measurementId: "G-LN5D3TVYEZ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider }
  export default db;