import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCQtEPGaDk4kyqCns4qRfzxqUpyipYdbM0",
    authDomain: "fir-react-app-e6347.firebaseapp.com",
    projectId: "fir-react-app-e6347",
    storageBucket: "fir-react-app-e6347.appspot.com",
    messagingSenderId: "787708451380",
    appId: "1:787708451380:web:640a5b5fbecadf8ca50861"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  export {db};