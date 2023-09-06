import { collection, doc, getDocs, getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import FBconf from '/Secrets/FirebaseConf.json';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	console.log('test');
	const firebaseConfig = FBconf;

	// Initialize Firebase
	const app = initializeApp(firebaseConfig);
	const db = getFirestore(app);
	const querySnapshot = await getDocs(collection(db, '2022'));
	let data = [];
	//console.log(querySnapshot)
	querySnapshot.forEach((doc) => {
		// doc.data() is never undefined for query doc snapshots
		let temp = doc.data();

		data.push(doc.data());
		console.log(doc);
		console.log(doc.id, ' => ', doc.data());
	});
	console.log(data);
	console.log(data[0].entry['Team Number'])
	//return should be json with the teams being displayed
	return {
		num: data[0].entry['Team Number'],
		name: 'cheesy poofs'+data[0].entry['Team Number'],
		driveType: data[0].entry['Drivetrain Type'],
	};
}
