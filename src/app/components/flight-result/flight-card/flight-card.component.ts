import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { IAirItinerary } from 'src/app/models/iair-itinerary';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.scss']
})
export class FlightCardComponent {
  @Input() flight: IAirItinerary = {} as IAirItinerary;

  constructor(private router: Router) {

  }

  onFlightCardClick(flightId: number) {
    this.router.navigate(['/flights', flightId]);
  }
}
