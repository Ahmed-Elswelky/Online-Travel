import { IAirline } from "./iairline";
import { IFlightDTO } from "./iflight-dto";

export interface IFlight {
  flightDTO: IFlightDTO[];
  flightAirline: IAirline;
  elapsedTime: number;
  stopsNum: number;
}
