import { Component } from '@angular/core';
import { ProductList } from './product-list/product-list';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-container',
  imports: [ProductList, FormsModule, CommonModule],
  templateUrl: './container.html',
  styleUrls: ['./container.css']
})
export class Container {
  searchTerm = '';
  updateSearchTerm(event: any){
    this.searchTerm=event.target.value;
  }
}
