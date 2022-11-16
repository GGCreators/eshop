import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
	apiKey: "AIzaSyDeTAVnOCMFlt0GZzAO1GYEtXI-NsbFWqg",
	authDomain: "eshop-d2cb7.firebaseapp.com",
	projectId: "eshop-d2cb7",
	storageBucket: "eshop-d2cb7.appspot.com",
	messagingSenderId: "385202122735",
	appId: "1:385202122735:web:eef0f9aa69e6c2cc1c901a",
	measurementId: "G-LNBKCBV67T"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp)

const auth = getAuth();

export { db, auth };

