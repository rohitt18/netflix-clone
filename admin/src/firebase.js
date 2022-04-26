// here is the configurations/ connection of our storage & then we'll export this storage & use it in the newProduct page

// import firebase from "firebase";
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// copy paste config from firebase project overview

const firebaseConfig = {
  apiKey: "AIzaSyDl1qznKzZsNxjnbuscF3Ti1iPC827wkeQ",
  authDomain: "netflix-clone-b0a05.firebaseapp.com",
  projectId: "netflix-clone-b0a05",
  storageBucket: "netflix-clone-b0a05.appspot.com",
  messagingSenderId: "831984322957",
  appId: "1:831984322957:web:c5eb95d829edf790cd15c4",
  measurementId: "G-E3CJ36WJND",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const storage = getStorage(app);

export default storage;
