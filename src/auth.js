//This is for Authentication Function
import auth from '@react-native-firebase/auth';

class fireAuth {
    signIn = (email, password) => {
        console.log("DEBUG: signIn Function");
        try {
        auth().signInWithEmailAndPassword(email, password)
        .then(() => alert ("Anda berhasil Sign In, horaaayyy we did it!"))
        .catch(error => {
            alert(error.message);
        })
        } catch(error) {
            alert(error);
        }
    }

    signUp = (email, password) => {
        console.log("DEBUG: signUp Function");
        try {
        auth().createUserWithEmailAndPassword(email, password)
        .then(() => alert ("Anda berhasil Sign Up, horaaayyy we did it!"))
        .catch(error => {
            alert(error.message);
        })
        } catch(error) {
            alert(error);
        }
    }

    signOut = () => {
        console.log("DEBUG: signOut Function");
        try {
        auth().signOut()
        .then(() => alert ("Anda berhasil Log Out, jangan lama-lama ya, nanti kangen"))
        .catch(error => {
            alert(error.message);
        })
        } catch(error) {
            alert(error);
        }
    }
}

export default new fireAuth();