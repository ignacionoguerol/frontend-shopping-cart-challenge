export class Offer {

    type: string;
    productCode: string;
    amount: number;
    discount: number;
    title: string;


    constructor(type: string, code: string, title: string, amount?: number, discount?: number){
        this.type = type;
        this.productCode = code;
        this.title = title;
        this.amount = amount;
        this.discount = discount;
    }
}
