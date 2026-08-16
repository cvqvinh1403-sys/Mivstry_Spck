// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { 
    getFirestore, 
    doc, 
    setDoc, 
    getDoc, 
    collection, 
    addDoc, 
    getDocs, 
    deleteDoc, 
    updateDoc,
    query,
    where 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Thay thế đoạn cấu hình này bằng thông tin lấy từ dự án Firebase của bạn
const firebaseConfig = {
  apiKey: "AIzaSyDy5yWRcWnQFNmv2FqvYgGSXRaCtNt7WAc",
  authDomain: "sanphamcuoikhoa-c3f4d.firebaseapp.com",
  projectId: "sanphamcuoikhoa-c3f4d",
  storageBucket: "sanphamcuoikhoa-c3f4d.firebasestorage.app",
  messagingSenderId: "109322511202",
  appId: "1:109322511202:web:d550325bec4cf2896f023b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signInWithPopup, 
    doc, 
    setDoc, 
    getDoc, 
    collection, 
    addDoc, 
    getDocs, 
    deleteDoc, 
    updateDoc,
    query,
    where
};