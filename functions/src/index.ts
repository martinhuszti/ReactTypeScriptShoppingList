import { firestore } from 'firebase/app';

const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)

// exports.helloWorld = functions.https.onRequest((request: any, response: any) => {
//     response.send("Hello from Firebase!");
// });

const createNotification = ((notification: any) => {
    return admin.firestore().collection('notifications')
        .add(notification)
        .then((doc: firestore.DocumentSnapshot) => {
            console.log('notification added', doc)
        })
})

exports.itemCreated = functions.firestore
    .document('shopping_items/{itemId}')
    .onCreate((doc: firestore.DocumentSnapshot) => {
        const item: any = doc.data()
        const notification = {
            title: "Item created!",
            user: item.createdBy,
            time: admin.firestore.FieldValue.serverTimestamp()
        }
        return createNotification(notification)
    })

