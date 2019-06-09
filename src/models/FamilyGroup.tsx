import * as firebase from 'firebase/app';
import 'firebase/firestore'

export default class ShoppingItem {

    constructor(
        public title: string = "",
        public description: string = "",
        public createdDate = firebase.firestore.Timestamp.now()

    ) { }
}
