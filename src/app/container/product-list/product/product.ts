import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Products } from '../../../Models/Products';

@Component({
  selector: 'app-product',
  imports: [FormsModule, CommonModule],
  templateUrl: './product.html',
  styleUrls: ['./product.css']
})
export class Product {
  
  @Input()
  product: Products;

  getCategoryColor(category: string): string {
  switch (category) {
    case 'Guys Watch':
      return '#1e90ff'; // Blue
    case "Men's Watch":
      return '#1e90ff'; // Blue
    case 'Girls Watch':
      return '#DB7093'; // Pink
    case "Women's Watch":
      return '#DB7093'; // Pink
    case 'Unisex Watch':
      return '#4B0082'; // Indigo
    case 'Couple Watch':
      return '#DAA520'; // GoldenRod
    default:
      return '#696969'; // Default Gray
  }
}
}
