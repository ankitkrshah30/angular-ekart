import { Component,Input, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  imports: [FormsModule],
  templateUrl: './filter.html',
  styleUrls: ['./filter.css']
})
export class Filter {
  @Input()
  all: number = 0;

  @Input()
  available: number = 0;

  @Input()
  unavailable: number = 0;

  @Input()
  guysWatch: number = 0;

  @Input()
  girlsWatch: number = 0;

  @Input()
  unisexWatch: number = 0;

  @Output()
  selectedFilterCategory: EventEmitter<string> = new EventEmitter<string>();

  selectedFilterButtonCategory:string = 'All';

  /*onFilterCategoryChange() {
    this.selectedFilterCategory.emit(this.selectedFilterButtonCategory);
  }*/

  applyFilters() {
    this.selectedFilterCategory.emit(this.selectedFilterButtonCategory);
  }
}
