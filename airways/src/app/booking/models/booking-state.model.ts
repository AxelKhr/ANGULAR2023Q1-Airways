import { IBookingStepModel } from './booking-step.model';

export interface IBookingStateModel {
  step: IBookingStepModel | null;
}
