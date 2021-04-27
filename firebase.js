import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBliDgwgH9AXOBc71gl2CHVKIUVIe1y4X4",
    authDomain: "back-loan.firebaseapp.com",
    projectId: "back-loan",
    storageBucket: "back-loan.appspot.com",
    messagingSenderId: "355183199302",
    appId: "1:355183199302:web:19336f0162aba14eedf647"
};
  // Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;