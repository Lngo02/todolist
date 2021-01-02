import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyA7wEMFrVnZ9cANu5SoTJY0L9fBNRYzmXU",
    authDomain: "todolist-b0b01.firebaseapp.com",
    databaseURL: "https://todolist-b0b01-default-rtdb.firebaseio.com",
    projectId: "todolist-b0b01",
    storageBucket: "todolist-b0b01.appspot.com",
    messagingSenderId: "958268850347",
    appId: "1:958268850347:web:a65c60e671c69e81afb7ee"
});

export { firebaseConfig as firebase };