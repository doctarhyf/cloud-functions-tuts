const functions = require('firebase-functions');
//const firebase = require('firebase-firebase');
const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();



exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

exports.useWildcard = functions.firestore
    .document('messages/{messageId}')
    .onCreate((snap, context) => {
        //db.doc('messages/${messageId}').set({ts: 1500});
        console.log(snap);
        return snap.ref.update({"ts" : snap.updateTime });
        //console.log(snap);

        //return change.after.ref.update({
            //"test": "OKAY from server"
          //});


    });
    /*.onWrite((snap, context) => {
      

        //const data = change.after.data();
        //const previousData = change.before.data();
  
        // We'll only update if the name has changed.
        // This is crucial to prevent infinite loops.
        //if (data.name == previousData.name) return null;
  
        // Retrieve the current count of name changes
        //let count = data.name_change_count;
        //if (!count) {
          //count = 0;
        //}
  
        // Then return a promise of a set operation to update the count
        return change.after.ref.set({
          "ts": firebase.firestore.FieldValue.serverTimestamp()
        }, {merge: true});
    

    });*/


/*
exports.writeToFirestore = functions.firestore
  .document('messages/{msgId}}')
  .onWrite((change, context) => {

    return db.doc('messages/${msgId}').set({ "testFromFuncs" : admin.database.ServerValue.TIMESTAMP });
  });
  .then(function () {

    console.log("message write success");

  })
  .catch(function (err) {

    console.log("Error : " + err);
  });*/

  // The Firebase Admin SDK to access the Firebase Realtime Database.
