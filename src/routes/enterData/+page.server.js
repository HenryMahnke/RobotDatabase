import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import FBconf from "/Secrets/FirebaseConf.json"
import { doc, setDoc } from "firebase/firestore"; 

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({event, request}) => {

    const firebaseConfig = FBconf;
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    let data = await request.formData()

    let entry = {
      "Robot Name": data.get("Robot Name"),
      "Team Number": data.get("Team Number"),
      "Year": data.get("Year"),
      "Drivetrain Type": data.get("Drivetrain Type"),
      "Drivetrain Motors": data.get("Drivetrain Motors"),
      "Motor Count": data.get("Motor Count"),
      "Robot Length": data.get("Robot Length"),
      "Robot Width": data.get("Robot Width"),
      "Cad Link": data.get("Cad Link"),
      "Code Link": data.get("Code Link"),
      "Subsystems": data.get("Subsystems"),
      "Write Up": data.get("Write Up"),
      "Strategy Write Up": data.get("Strategy Write Up"),
      "CD Post": data.get("CD Post"),
    }
    console.log(entry)

    await setDoc(doc(db, entry.Year, entry["Team Number"]), {
      entry
    });

  }
};
