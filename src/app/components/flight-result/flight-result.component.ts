import { Component } from '@angular/core';
import flightsResults from "../../../assets/response.json";
import { IAirItinerary } from 'src/app/models/iair-itinerary';

@Component({
  selector: 'app-flight-result',
  templateUrl: './flight-result.component.html',
  styleUrls: ['./flight-result.component.scss']
})
export class FlightResultComponent {
  airItinerary: IAirItinerary[];
  airlinesList: string[];
  filteredFlights: IAirItinerary[];
  p: number = 1;

  constructor() {
    this.airItinerary = flightsResults.airItineraries
    this.airlinesList = flightsResults.airlines
    this.filteredFlights = this.airItinerary;
  }

  onFiltersChanged(filters: any) {
    this.filteredFlights = this.airItinerary.filter(flight => {
      const {airline, depatureAirportName, arrivalAirportName, isTransit} = filters;
      const flightAirline = flight.allJourney.flights[0].flightAirline.airlineName;
      const departureAirport = flight.allJourney.flights[0].flightDTO[0].departureTerminalAirport.airportName;
      const arrivalAirport = flight.allJourney.flights[0].flightDTO[0].arrivalTerminalAirport.airportName;
      const withTransit = (flight.allJourney.flights[0].flightDTO.length > 1)? "yes" : "no";

      return (
        (!airline || flightAirline === airline) &&
        (!depatureAirportName || departureAirport.trim().toLowerCase().includes(depatureAirportName.toLowerCase())) &&
        (!arrivalAirportName || arrivalAirport.trim().toLowerCase().includes(arrivalAirportName.toLowerCase())) &&
        (!isTransit || withTransit === isTransit)
      );
    });
  }

}
