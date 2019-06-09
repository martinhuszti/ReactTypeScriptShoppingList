import * as firebase from 'firebase/app';
import 'firebase/firestore'

export default class ShoppingItem {

    constructor(
        public id: string = "",
        public title: string = "",
        public description: string = "",
        public created_by_user_id: string = "",
        public quantity: number = 0,
        public quantity_measure: string = "db",
        public createdDate = firebase.firestore.Timestamp.now()

    ) { }
}
