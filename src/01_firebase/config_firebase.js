import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD08neqchEaFzDKQ2JGqKHo1qBlqmjE9wA",
  authDomain: "expedia-clone-gn13.firebaseapp.com",
  projectId: "expedia-clone-gn13",
  storageBucket: "expedia-clone-gn13.firebasestorage.app",
  messagingSenderId: "896310582529",
  appId: "1:896310582529:web:86345965ed47cfd8500f00"
};

const firebase_app = initializeApp(firebaseConfig);

export default firebase_app