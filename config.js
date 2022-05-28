import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyAWSSaacDUwj6XeILkd8FBkocBpsIHXHxU",
  authDomain: "bicicleta-eletronica-2e88b.firebaseapp.com",
  projectId: "bicicleta-eletronica-2e88b",
  storageBucket: "bicicleta-eletronica-2e88b.appspot.com",
  messagingSenderId: "85258960914",
  appId: "1:85258960914:web:236a12cba3109c6b9098cb"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
