import { IAppSettingsModel } from '../shared/models/app-settings.model';

export interface IGeneralStateModel {
  isMainStyle: boolean;
}

export interface StateModel {
  settings: IAppSettingsModel;
  general: IGeneralStateModel;
}
