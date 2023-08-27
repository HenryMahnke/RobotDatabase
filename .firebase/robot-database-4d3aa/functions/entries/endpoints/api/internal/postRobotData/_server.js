import "../../../../../chunks/index.js";
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";
async function GET({ url }) {
  const firebaseConfig = {
    apiKey: "AIzaSyDjqbaQoEHguub2BkuU4dqvw3R1hwiT52Q",
    authDomain: "robot-database-4d3aa.firebaseapp.com",
    projectId: "robot-database-4d3aa",
    storageBucket: "robot-database-4d3aa.appspot.com",
    messagingSenderId: "70710609826",
    appId: "1:70710609826:web:541685f752ad111c7794fb",
    measurementId: "G-Y2QMSGBSGJ"
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  return new Response(String("random"));
}
export {
  GET
};
