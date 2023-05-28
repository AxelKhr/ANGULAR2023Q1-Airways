export interface IFareByTypeModel {
  count: number;
  totalCost: number;
  fare: number;
  tax: number;
}

export interface IFareModel {
  adult: IFareByTypeModel;
  child: IFareByTypeModel;
  infant: IFareByTypeModel;
}
