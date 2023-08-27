import "../../../../../chunks/index.js";
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";
const apiKey = "AIzaSyDjqbaQoEHguub2BkuU4dqvw3R1hwiT52Q";
const authDomain = "robot-database-4d3aa.firebaseapp.com";
const databaseURL = "https://robot-database-4d3aa-default-rtdb.firebaseio.com";
const projectId = "robot-database-4d3aa";
const storageBucket = "robot-database-4d3aa.appspot.com";
const messagingSenderId = "70710609826";
const appId = "1:70710609826:web:b0fe7052147eeac77794fb";
const measurementId = "G-TV6ZQ85FE2";
const FBconf = {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId
};
async function GET({ url }) {
  const firebaseConfig = FBconf;
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
