import { Item } from './item';
import { Product } from './product';

export class Checkout {

    cart: Item[] = [];
    stock: Item[] = [];
    amount: number = 0;
    items: number = 0;

    constructor(){

        this.stock.push(new Item(new Product('CAP', 'Cabify Cap', 5.00),100));
        this.stock.push(new Item(new Product('TSHIRT', 'Cabify T-Shirt', 20.00),100));
        this.stock.push(new Item(new Product('Mug', 'Cabify Coffe Mug', 7.50),100));

    }

    scan(code: string){
        let cartIndex = this.cart.findIndex(x => x.prod.code == code);

        if(cartIndex >= 0) this.cart[cartIndex].qty++;
        else this.cart.push(new Item(this.stock.find(x => x.prod.code == code).prod, 1));

        this.total();
    }



    total(){
        this.amount = this.items = 0;
        this.cart.forEach(item =>{
            this.amount += item.qty * item.prod.price;
            this.items += item.qty
        })
    }

}
