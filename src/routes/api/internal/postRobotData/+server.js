// import { error } from '@sveltejs/kit';

// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { collection, addDoc, setDoc, doc } from "firebase/firestore";
// import FBconf from "/Secrets/FirebaseConf.json"

//  
// /** @type {import('./$types').RequestHandler} */
// export async function GET({ url }) {



  
//   // TODO: Replace the following with your app's Firebase project configuration
//   // See: https://support.google.com/firebase/answer/7015592
//   const firebaseConfig = FBconf
  
//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const db = getFirestore(app);

//   try {
//     const docRef = await addDoc(collection(db, "users"), {
//       first: "Ada",
//       last: "Lovelace",
//       born: 1815
//     });
//     console.log("Document written with ID: ", docRef.id);
//     return new Response(200)
//   } catch (e) {
//     console.error("Error adding document: ", e);
//     return new Response(String(e))
//   }
// }
