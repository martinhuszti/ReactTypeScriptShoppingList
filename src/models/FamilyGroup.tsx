import * as firebase from 'firebase/app';
import 'firebase/firestore'

export default class ShoppingItem {

    constructor(
        public name_id: string = "",
        public createdDate = firebase.firestore.Timestamp.now()

    ) { }
}
