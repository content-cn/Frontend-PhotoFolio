import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Add your firebase configuration here

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
