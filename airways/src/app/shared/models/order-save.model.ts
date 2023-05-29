import { IOrderModel } from './order.model';
import { IRouteModel } from './route.model';

export interface IOrderSaveModel {
  routes: IRouteModel[];
  order: IOrderModel;
}
