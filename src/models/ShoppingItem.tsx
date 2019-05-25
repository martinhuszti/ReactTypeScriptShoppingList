export default class ShoppingItem {

    readonly id: string;
    title: string;
    quantity: number;
    description: string;
    createdBy: string; //Can be user
    isBought: Boolean;
    isDeleted: Boolean;

    constructor(id: string = "defaultid",
        title: string = "defaul title",
        description: string = "default desc",
        createdBy: string = "default madeBy",
        quantity: number = 2) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.createdBy = createdBy;
        this.isBought = false;
        this.isDeleted = false;
        this.quantity = quantity;
    }
}
