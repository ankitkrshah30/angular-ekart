import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  imports: [FormsModule, CommonModule],
  templateUrl: './search.html',
  styleUrls: ['./search.css']
})
export class Search {
  searchTerm = '';
  /* 
  updateSearchTerm(event: any){
     this.searchTerm=event.target.value;
   }
     no use of it as we are using ngModel
  */
}
