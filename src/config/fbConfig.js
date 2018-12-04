import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyCWwNtEzlEPhhSzDTwvKp2M0vxHjlA0few",
    authDomain: "project-banao.firebaseapp.com",
    databaseURL: "https://project-banao.firebaseio.com",
    projectId: "project-banao",
    storageBucket: "project-banao.appspot.com",
    messagingSenderId: "413284796793"
};
firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;