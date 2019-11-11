import { Component, OnInit } from '@angular/core';
// import { Product } from '../product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // product : Product = {
  //   id: 1,
  //   name: 'san pham 1',
  //   price: 20,
  //   desc: 'Mô tả sản phẩm'
  // }
  constructor() { }

  ngOnInit() {
  }

  // handleKeyUp = event => {
  //   this.product.name = event.target.value;
  // }

}
