import { collection, doc, getDocs, getFirestore, query, orderBy, limit } from 'firebase/firestore';
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
		let temp2 = temp.entry;
		let temp3 = temp2;

		data.push(temp3);
	});
	//console.log(data);
	//return should be json with the teams being displayed
	return {data};
}
