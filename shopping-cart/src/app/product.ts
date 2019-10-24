/**
 * Product: each of the elements that Cabify sells. 
 * Products are accumulated in Items in the stock and added by the client to the cart.
 */

export class Product {

    code: string;
    name: string;
    price: number;

    constructor(code: string, name: string, price: number){
        this.code = code;
        this.name = name;
        this.price = price;
    }
}
