import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAJUuR0fSM8pxrUfKu2RZt29rqKw64JZX0",
  authDomain: "netflix-clone-a7ddb.firebaseapp.com",
  projectId: "netflix-clone-a7ddb",
  storageBucket: "netflix-clone-a7ddb.appspot.com",
  messagingSenderId: "610732727618",
  appId: "1:610732727618:web:c7d1c40f2ceece43e3bcdb"
};

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();


  export {auth};
  export default db;