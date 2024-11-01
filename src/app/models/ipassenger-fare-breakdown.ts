import { IFlightFare } from "./iflight-fare";
import { IPenalty } from "./ipenalty";
import { ITax } from "./itax";

export interface IPassengerFareBreakdown {
  key: string;
  pricingMethod: string;
  cancelPenaltyDTOs: IPenalty[];
  changePenaltyDTOs: IPenalty[];
  passengerQuantity: number;
  passengerType: string;
  passengersRef: string[];
  flightFaresDTOs: IFlightFare[];
  taxes: ITax[];
}
