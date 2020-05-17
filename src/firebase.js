import * as firebase from 'firebase/app';
import 'firebase/firestore';

// Need to update config location
const firebaseConfig = {
	
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

db.collection('cards').get()
  .then(snapshot => {
    const values = snapshot.docs.map(flattenDoc);
    console.log("From Firebase.js file these are db values" + values);
  });

function flattenDoc(doc) {
  return {id: doc.id, ...doc.data()};
}
