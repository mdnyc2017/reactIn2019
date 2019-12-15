import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyCU2U3ASSO-_eNEBT3U2aOlv6auM15VnsU',
	authDomain: 'e-comm-88ddc.firebaseapp.com',
	databaseURL: 'https://e-comm-88ddc.firebaseio.com',
	projectId: 'e-comm-88ddc',
	storageBucket: 'e-comm-88ddc.appspot.com',
	messagingSenderId: '904001194669',
	appId: '1:904001194669:web:5b61fdbec1bdae43ddd424',
	measurementId: 'G-EXZX54CRPK',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}
	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
