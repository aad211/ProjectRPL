// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
//import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

//KAYAKNYA KALO PAKE REACT NATIVE FIREBASE GAK PERLU INITIALIZE DEH"
import firebase from '@react-native-firebase/app';

//class ekspor extends Component {
    // firebase config is configuration from your firebase project
    const firebaseConfig = {
        apiKey: "AIzaSyDrt_xnmEXWmwg32_SFu0JBlzpQvGFQAyk",
        authDomain: "rpl-project-63a9d.firebaseapp.com",
        databaseURL: "https://rpl-project-63a9d.firebaseio.com",
        projectId: "rpl-project-63a9d",
        storageBucket: "rpl-project-63a9d.appspot.com",
        messagingSenderId: "1087430309579",
        appId: "1:1087430309579:web:2acdfc569e6ef418900d4e",
        measurementId: "G-PNDB76YM26"
    };

    // Initialize Server Firebase
    firebase.initializeApp(firebaseConfig);

    // Initialize Authentication
    const fireAuth = firebase.auth();
    
    // Initialize Firestore
    const fireStore = firebase.firestore();

    /*addDB = () => {
    db.settings({
        timestampsInSnapshots: true
    });
    const userRef = db.collection("users").add({
        fullname: "Namakuuuu",
        email: "Emailkuuuu"
    });
    };*/
//}

export { fireAuth, fireStore };
//export const fireAuth = firebase.auth();
//export const firestore = firebase.firestore();
