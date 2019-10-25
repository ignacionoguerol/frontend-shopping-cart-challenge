import { Component, OnInit } from '@angular/core';
import { Checkout } from '../checkout';
import { MatDialog } from '@angular/material/dialog';
import { DetailComponent } from './detail/detail.component';
import { Product } from '../product';

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
