import {initializeApp,firebase} from "firebase/app"
import {getFirestore} from "@firebase/firestore"
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBtUfBoBs80dZxYfDhnL6slUIWl9m-llik",
    authDomain: "itec-305-project.firebaseapp.com",
    projectId: "itec-305-project",
    storageBucket: "itec-305-project.appspot.com",
    messagingSenderId: "1063458964426",
    appId: "1:1063458964426:web:e26c5a2958e315ea3c8533"
  };

  const app = initializeApp(firebaseConfig)

  export const auth = getAuth(app)

  export const db = getFirestore(app)

