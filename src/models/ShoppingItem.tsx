import { firestore } from 'firebase/app';

export default class ShoppingItem {

    public createdDate!: firestore.Timestamp
    constructor(
        public id: string = "",
        public title: string = "",
        public description: string = "",
        public createdBy: string = "",
        public quantity: number = 0,
    ) { }
}
