/**
 * Core class of the system.
 * It manages cart and stocks, calculates total and applies offers.
 */

import { Item } from './item';
import { Product } from './product';
import { Offer } from './offer';
import { Discount } from './discount';

export class Checkout {

    cart: Item[] = [];
    stock: Item[] = [];
    offers: Offer[] = [];
    discounts: Discount[] = [];
    discount: number = 0;
    amount: number = 0;
    items: number = 0;

    constructor(pricingRules: Offer[]){

        //Adding the products to the shop's stock.
        this.stock.push(new Item(new Product('CAP', 'Cabify Cap', 5.00),100));
        this.stock.push(new Item(new Product('TSHIRT', 'Cabify T-Shirt', 20.00),100));
        this.stock.push(new Item(new Product('MUG', 'Cabify Coffe Mug', 7.50),100));

        //Adding actual offers
        this.offers = pricingRules;

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
            this.items += Number(item.qty)
        })

        this.applyOffers();
    }

    //This functions has the logic to apply the different offers. 
    //It has support for the 2 described discounts.
    applyOffers(){
        this.discounts = [];
        this.discount = 0;
        this.offers.forEach(offer =>{
            if(offer.type == '2x1'){
                var item = this.cart.find(x => x.prod.code == offer.productCode);
                if(item && item.qty >= 2){
                    var d = item.prod.price*Math.floor(item.qty / 2);
                    this.discount += d;
                    this.discounts.push(new Discount(offer.title, d));
                }
            }else if(offer.type == 'BULK'){
                var item = this.cart.find(x => x.prod.code == offer.productCode);
                if(item && item.qty >= offer.amount){
                    var d = item.qty * offer.discount;
                    this.discount += d;
                    this.discounts.push(new Discount(offer.title, d));
                }
            }
        })
    }

}
