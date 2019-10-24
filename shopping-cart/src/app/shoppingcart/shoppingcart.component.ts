import { Component, OnInit } from '@angular/core';
import { Checkout } from '../checkout';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.scss']
})
export class ShoppingcartComponent implements OnInit {

  co: Checkout;

  constructor() { 
    this.reset()
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

  reset(){
    this.co = new Checkout();
    this.co.scan("TSHIRT");
    this.co.scan("CAP");
    this.co.scan("TSHIRT");
    this.co.scan("MUG");
  }

}
