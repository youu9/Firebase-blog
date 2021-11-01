import firebase from 'firebase/app';
import "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDcHKSrYbiHiU9wlao28xLiI1s1B8nCVsk",
    authDomain: "fir-blog-1f24e.firebaseapp.com",
    projectId: "fir-blog-1f24e",
    storageBucket: "fir-blog-1f24e.appspot.com",
    messagingSenderId: "821993322588",
    appId: "1:821993322588:web:96aa2e1cae8e3d6b34ce99"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { timestamp };
  export default firebaseApp.firestore();