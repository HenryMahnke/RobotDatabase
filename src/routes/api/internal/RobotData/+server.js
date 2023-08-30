import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, doc, setDoc, getDoc } from "firebase/firestore"; 


import FBconf from "/Secrets/FirebaseConf.json"

/** @type {import('./$types').RequestHandler} */
export async function GET() {
    const firebaseConfig = FBconf;
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    
    
    // Initialize Cloud Firestore and get a reference to the service
    const db = getFirestore(app);

    const docRef = doc(db, "users", "first");
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        return new Response("Document data:", docSnap.data())
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
        return new Response("No document");
      }

    
};