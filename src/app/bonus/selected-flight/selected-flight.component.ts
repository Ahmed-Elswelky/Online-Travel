import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IAirItinerary } from 'src/app/models/iair-itinerary';
import flightsResults from "../../../assets/response.json";

@Component({
  selector: 'app-selected-flight',
  templateUrl: './selected-flight.component.html',
  styleUrls: ['./selected-flight.component.scss']
})
export class SelectedFlightComponent implements OnInit {
  flightId: string = "";
  flightDetails: IAirItinerary = {} as IAirItinerary;

  constructor(private route: ActivatedRoute, private router:Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.flightId = params['id'];
      this.fetchFlightDetails(this.flightId);
    });
  }

  fetchFlightDetails(id: string) {
    this.flightDetails = flightsResults.airItineraries.find((flight: IAirItinerary) => String(flight.sequenceNum) === id)!;
  }

  goBack() {
    this.router.navigate(['/flights']);
  }

}
