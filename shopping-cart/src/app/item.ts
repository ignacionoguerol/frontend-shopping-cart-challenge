import { Product } from './product';

export class Item {

    prod: Product
    qty: number;

    constructor(prod: Product, qty: number){
        this.prod = prod;
        this.qty = qty;
    }

}
