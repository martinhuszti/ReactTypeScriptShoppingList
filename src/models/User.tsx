import * as firebase from 'firebase/app';
import 'firebase/firestore'

export default class ShoppingItem {

    constructor(
        public email: string = "",
        public password: string = "",
        public firstName: string = "",
        public lastName: string = "",
        public nickName: string = "",
        public groupId: string = "",
        public createdDate = firebase.firestore.Timestamp.now()
    ) { }
}
