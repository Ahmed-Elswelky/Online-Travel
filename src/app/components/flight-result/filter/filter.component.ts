import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IAirItinerary } from 'src/app/models/iair-itinerary';
import { IAirline } from 'src/app/models/iairline';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Input() airlines: string[]
  @Output() filtersChanged = new EventEmitter<any>();
  errorMessage: string | null = null;
  filters = {
    airline: '',
    depatureAirportName: '',
    arrivalAirportName: '',
    isTransit: ''
  };

  constructor() {
    this.airlines = [];
  }

  applyFilters() {
    this.filtersChanged.emit(this.filters);
  }

  restrictArabic(event: KeyboardEvent) {
    const arabicRegex = /[\u0600-\u06FF]/;
    if (arabicRegex.test(event.key)) {
      event.preventDefault();
      this.errorMessage = 'Arabic characters are not allowed';
    } else {
      this.errorMessage = null;
    }
  }
}
