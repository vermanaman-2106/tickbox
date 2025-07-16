import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDDFDZLwltz-bILJJVGXzEFt0kuhn6qGlM",
  authDomain: "to-do-app-c5015.firebaseapp.com",
  projectId: "to-do-app-c5015",
  storageBucket: "to-do-app-c5015.firebasestorage.app",
  messagingSenderId: "581702696636",
  appId: "1:581702696636:web:6479f2896d88d30b8e1ab9"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const auth = getAuth(app);

export { auth, storage };