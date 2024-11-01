import { IAllJourney } from "./iall-journey";
import { IBaggageInformation } from "./ibaggage-information";
import { IItinTotalFare } from "./iitin-total-fare";
import { IPassengerFareBreakdown } from "./ipassenger-fare-breakdown";

export interface IAirItinerary {
  sequenceNum: number;
  pKey: string;
  isRefundable: boolean;
  itinTotalFare: IItinTotalFare;
  totalDuration: number;
  deptDate: string; // ISO date format
  arrivalDate: string; // ISO date format
  cabinClass: string;
  flightType: string;
  allJourney: IAllJourney;
  baggageInformation: IBaggageInformation[];
  passengerFareBreakDownDTOs: IPassengerFareBreakdown[];
}
