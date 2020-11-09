/*
This file to handle firestore function
*/

import firestore from '@react-native-firebase/firestore';

const dbCoba = firestore().collection("123");

class dbService {
    getAll() {
        return dbCoba;
    }

    createDB(data) {
        console.log("DEBUG: Create Database Function");

        return dbCoba.add(data)
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }

    readDB(id) {
        console.log("DEBUG: Read Database Function");
        
        return dbCoba.doc(id).get()
        .then(function(doc) {
        if (doc.exists) {
            console.log("Data:", doc.data());
        } else {
            console.log("No such document!");
        }
        })
        .catch(function(error) {
        console.log("Error getting document:", error);
        });
    }

    updateDB(id, data) {
        console.log("DEBUG: Update Database Function");

        return dbCoba.doc(id).update(data);
    }

    deleteDB(id) {
        console.log("DEBUG: Delete Database Function");

        return dbCoba.doc(id).delete();
    }

    searchByField(field, condition, value) {
        console.log("DEBUG: Search by Field Function");

        return dbCoba.where(field, condition, value).get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                console.log(doc.id, " => ", doc.data());
            });
        });
    }
}

export default new dbService();