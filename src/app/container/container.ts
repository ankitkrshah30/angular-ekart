import { Component, ViewChild } from '@angular/core';
import { ProductList } from './product-list/product-list';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Search } from './search/search';
import { ProductDetail } from './product-detail/product-detail';

@Component({
  selector: 'app-container',
  imports: [ProductList, FormsModule, CommonModule, Search, ProductDetail],
  templateUrl: './container.html',
  styleUrls: ['./container.css']
})
export class Container {

  searchTerm: string = '';

  @ViewChild('productList') productList: ProductList;

  onSearchChange(searchText: string) {
    this.searchTerm = searchText;
  }
}
