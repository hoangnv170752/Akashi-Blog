import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC6vEiCKp69wXdY3DxiVkWQAMR8wsiRgNg",
    authDomain: "akashistagram.firebaseapp.com",
    projectId: "akashistagram",
    storageBucket: "akashistagram.appspot.com",
    messagingSenderId: "1088478324521",
    appId: "1:1088478324521:web:e95cc3b5563c4ca6be3938",
    measurementId: "G-L75LTMRK80"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage};