import { IAirItinerary } from "./iair-itinerary";

export interface IFlightResponse {
  status: string;
  airItineraries: IAirItinerary[];
}
