import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBDB46hkAFDvSMgDijtMliOv8vJ3QJLygQ",
  authDomain: "jomshuttle-1a805.firebaseapp.com",
  projectId: "jomshuttle-1a805",
  appId: "1:521689365597:web:e0d84b4e7660c5a0a3a1b4"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
