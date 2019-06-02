import { firestore } from 'firebase/app';
import ShoppingItem from './models/ShoppingItem';
const functions = require('firebase-functions')
const admin = require('firebase-admin')

admin.initializeApp(functions.config().firebase)


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
        const item = doc.data() as ShoppingItem
        const notification = {
            title: "Item created!",
            user: item.created_by_user_id,
            time: admin.firestore.FieldValue.serverTimestamp()
        }
        return createNotification(notification)
    })

