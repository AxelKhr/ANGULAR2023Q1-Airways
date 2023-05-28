import { IPassengerModel } from 'src/app/shared/models/passenger.model';
import { IRouteModel } from 'src/app/shared/models/route.model';

export const routeData: IRouteModel = JSON.parse(`{
  "departureDate": "2023-05-27T00:00:00.000Z",
  "departureAirportCode": "WAW",
  "arrivalAirportCode": "DUB",
  "flights": [
      {
          "departureAirportCode": "WAW",
          "departureDateTime": "2023-05-27T08:30:00.000Z",
          "arrivalAirportCode": "DUB",
          "arrivalDateTime": "2023-05-27T09:50:00.000Z",
          "numberRace": "NH4847",
          "seatNumbers": [
              "40f",
              "41f",
              "42f",
              "43f",
              "44f"
          ],
          "freeSeats": 8,
          "flightTime": 140
      }
  ],
  "ticketsCost": {
      "adult": {
          "totalCost": "162.15",
          "fare": "105.40",
          "tax": "56.75"
      },
      "children": {
          "totalCost": "126.48",
          "fare": "69.56",
          "tax": "56.91"
      },
      "infant": {
          "totalCost": "51.89",
          "fare": "45.66",
          "tax": "6.23"
      }
  }
}`);

export const passengersData: IPassengerModel[] = JSON.parse(`[
    {
    "firstName": "Max",
    "lastName": "Smith",
    "dateBirth": "2012-07-12T00:00:00.000Z",
    "sex": "male",
    "needAssistance": true ,
    "baggage": "23 kg",
    "type": "adult"
    },
    {
    "firstName": "John",
    "lastName": "Smith",
    "dateBirth": "2014-01-19T00:00:00.000Z",
    "sex": "male",
    "needAssistance": true ,
    "baggage": "23 kg",
    "type": "child"
    }
]`);
