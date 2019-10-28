import { Component, OnInit } from '@angular/core';
import { Checkout } from '../checkout';
import { Product } from '../product';
import { Offer } from '../offer';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.scss']
})
export class ShoppingcartComponent implements OnInit {

  co: Checkout;
  
  details: Boolean = false;
  selected: Product;

  constructor() { 

    var pricingRules: Offer[] = [];
    pricingRules.push(new Offer('2x1', 'CAP', '2x1 Cap Offer'));
    pricingRules.push(new Offer('BULK', 'TSHIRT', 'x3 T-Shirt Offer', 3, 1));

    this.co = new Checkout(pricingRules);

    this.co.scan("TSHIRT");
    this.co.scan("CAP");
    this.co.scan("TSHIRT");
    this.co.scan("MUG");
    this.co.scan("TSHIRT");
    
  }

  ngOnInit() {
  }

  add(index: number){
    this.co.cart[index].qty++;
    this.co.total();
  }

  remove(index: number){
    if(this.co.cart[index].qty > 1){
      this.co.cart[index].qty--;
    }else{
      this.co.cart.splice(index, 1);
    }

    this.co.total();
  }

  update(index: number){
    if(this.co.cart[index].qty == 0){
      this.co.cart.splice(index, 1);
    }

    this.co.total();
  }

  /**
   * 
   * To control modal visibility
   */
  detail(p: Product): void {
    this.selected = p;
    this.details = true;
  }

  close(){
    this.details = false;
  }

  addAndClose(prod: Product){
    this.details = false;
    this.co.scan(prod.code);
  }

}
