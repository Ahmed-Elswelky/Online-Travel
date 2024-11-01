import { IAirline } from "./iairline";
import { IAirport } from "./iairport";
import { IFlightInfo } from "./iflight-info";
import { ISegmentDetails } from "./isegment-details";

export interface IFlightDTO {
  departureOffset: number;
  arrivalOffset: number;
  isStopSegment: boolean;
  deptTime: string;
  landTime: string;
  departureDate: string; // ISO date format
  arrivalDate: string; // ISO date format
  flightAirline: IAirline;
  operatedAirline: IAirline;
  durationPerLeg: number;
  departureTerminalAirport: IAirport;
  arrivalTerminalAirport: IAirport;
  transitTime: string;
  flightInfo: IFlightInfo;
  segmentDetails: ISegmentDetails;
  supplierRefID: string | null;
}
