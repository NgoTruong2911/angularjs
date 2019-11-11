import { Component, OnInit } from '@angular/core';
import { ProductData } from '../MockData';
import { Product } from '../Product';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  products = ProductData;
  
  onDelete(id){
    this.products = this.products.filter(item => item.id != id);
  }
  selectedProduct: Product;
  DetailProduct(product){
    this.selectedProduct = product;
  }
}
