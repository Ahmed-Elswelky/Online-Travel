import { Component, OnInit } from '@angular/core';
import { HomeFlights } from 'src/app/models/home-flights';
import flightsData from '../../../../assets/home-flights.json';

@Component({
  selector: 'app-home-flight-cards',
  templateUrl: './home-flight-cards.component.html',
  styleUrls: ['./home-flight-cards.component.scss']
})
export class HomeFlightCardsComponent implements OnInit {
  flights: HomeFlights[] = flightsData;

  constructor() {
    console.log(this.flights);

   }
  ngOnInit(): void {

  }


}
