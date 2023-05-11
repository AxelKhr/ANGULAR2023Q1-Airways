import { IBookingStepModel } from 'src/app/booking/models/booking-step.model';

export const BOOKING_STEPS: IBookingStepModel[] = [
  {
    name: 'flights',
    label: 'Flights',
    route: 'booking/select',
  },
  {
    name: 'process',
    label: 'Passengers',
    route: 'booking/process',
  },
  {
    name: 'summary',
    label: 'Review & Payment',
    route: 'booking/summary',
  },
];
