import { firestore } from 'firebase/app';

export default class ShoppingItem {

    constructor(
        public id: string = "",
        public title: string = "",
        public description: string = "",
        public createdBy: string = "",
        public quantity: number = 0,
        public createdDate = firestore.Timestamp.now()

    ) { }
}
