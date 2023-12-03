import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAEEXIUKqGyC4_K-N9RtaSqZCts60pMmU8",
  authDomain: "crwn-clothing-db-3fff0.firebaseapp.com",
  projectId: "crwn-clothing-db-3fff0",
  storageBucket: "crwn-clothing-db-3fff0.appspot.com",
  messagingSenderId: "739790076750",
  appId: "1:739790076750:web:da42611caffb591e52fc1f"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
