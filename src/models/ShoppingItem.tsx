export default class ShoppingItem {


    constructor(
        public id: string = "defaultid",
        public title: string = "defaul title",
        public description: string = "default desc",
        public createdBy: string = "default madeBy",
        public quantity: number = 2,
        public createdDate: Date = new Date()
    ) { }
}
