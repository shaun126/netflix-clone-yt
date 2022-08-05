// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyC7qfK-qgGAkaO73toVukIeu5SbcRpEuvo',
	authDomain: 'netfix-clone-yt.firebaseapp.com',
	projectId: 'netfix-clone-yt',
	storageBucket: 'netfix-clone-yt.appspot.com',
	messagingSenderId: '442764409376',
	appId: '1:442764409376:web:5d9f15da89a482ec11da45',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();
  
export default app;
export { db, auth };
