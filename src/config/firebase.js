import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyAI20NiKcmx0S8rJ_W7OAKiIaSCjsLuutw",
  authDomain: "tik-tok---rafael.firebaseapp.com",
  projectId: "tik-tok---rafael",
  storageBucket: "tik-tok---rafael.appspot.com",
  messagingSenderId: "226423076133",
  appId: "1:226423076133:web:aa761c19a644353ec356cc"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db