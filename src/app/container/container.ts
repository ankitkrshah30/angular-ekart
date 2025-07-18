import { Component } from '@angular/core';
import { ProductList } from './product-list/product-list';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Search } from './search/search';

@Component({
  selector: 'app-container',
  imports: [ProductList, FormsModule, CommonModule, Search],
  templateUrl: './container.html',
  styleUrls: ['./container.css']
})
export class Container {

  searchTerm: string = '';

  onSearchChange(searchText: string) {
    this.searchTerm = searchText;
  }
}
