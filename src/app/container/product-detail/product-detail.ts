import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Products } from '../../Models/Products';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.html',
  styleUrls: ['./product-detail.css']
})
export class ProductDetail {
  selectedProduct: Products=null;

  @Input()
  productList:ProductList;

  onClose() {
    this.productList.selectedProduct = null;
  }
}
