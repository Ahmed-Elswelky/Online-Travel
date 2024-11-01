export interface IFilters {
  airline: {
    [key: string]: boolean;
  };
  depatureAirportName: string;
  arrivalAirportName: string;
  isTransit: string;
}

