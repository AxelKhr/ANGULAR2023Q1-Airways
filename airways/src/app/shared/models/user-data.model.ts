import { IUserProfileModel } from './user-profile.model';

export interface IUserDataModel {
  token: string;
  userId: string;
  userProfile: IUserProfileModel;
}
