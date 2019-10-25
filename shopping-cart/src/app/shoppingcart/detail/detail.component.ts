import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @Input() prod: Product;
  @Output() closed = new EventEmitter<boolean>();
  @Output() added = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  close(){
    this.closed.emit(true);
  }

  add(){
    this.added.emit(this.prod);
  }

}
