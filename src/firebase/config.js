// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDdcdUutEWfcub9FEWiCf43PMYeZ3m5DEg',
	authDomain: 'marvel-app-1ad39.firebaseapp.com',
	projectId: 'marvel-app-1ad39',
	storageBucket: 'marvel-app-1ad39.appspot.com',
	messagingSenderId: '743396850934',
	appId: '1:743396850934:web:0c92dbbf8c6c07a440c0d7'
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);