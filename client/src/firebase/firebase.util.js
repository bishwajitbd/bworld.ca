import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyBNSZOR-lpR102iBIAbfVUPdrMeNAtkgI0",
    authDomain: "mywebdb-825b3.firebaseapp.com",
    databaseURL: "https://mywebdb-825b3.firebaseio.com",
    projectId: "mywebdb-825b3",
    storageBucket: "mywebdb-825b3.appspot.com",
    messagingSenderId: "591776826750",
    appId: "1:591776826750:web:d7c9da1248673741bc5f2f",
    measurementId: "G-4V9HMEL68P"
  };

  export const createUserProfileDocument=async(userAuth, additionalData)=>{
    if(!userAuth) return;

    const userRef=firestore.doc(`users/${userAuth.uid}`);
    const snapShot= await userRef.get();
      
    console.log(snapShot);
    if(!snapShot.exists)
    {
      const {displayName, email} = userAuth;
      const createAt= new Date();
      try
      {
        await userRef.set({
          displayName,
          email,
          createAt,
          ...additionalData

        })
      }
      catch (error)
      {
        console.log('error creating user', error.message);
      }
    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider= new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const singInWithGoogle=()=> auth.signInWithPopup(provider);

  export default firebase;
