// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCj0enOiDgoqaTDGyKN8gRRWmRD81NoA8o",
  authDomain: "about-to-be-mocked-78f43.firebaseapp.com",
  projectId: "about-to-be-mocked-78f43",
  storageBucket: "about-to-be-mocked-78f43.appspot.com",
  messagingSenderId: "125508976522",
  appId: "1:125508976522:web:68fc649429b74aec375273",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
