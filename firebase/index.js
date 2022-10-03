
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-v_pKHdSZWbooltZZAoP4S55I-B8yJb8",
  authDomain: "todo-app2-b0ff2.firebaseapp.com",
  projectId: "todo-app2-b0ff2",
  storageBucket: "todo-app2-b0ff2.appspot.com",
  messagingSenderId: "78251499639",
  appId: "1:78251499639:web:261e2f4af0a508fbb56672"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };