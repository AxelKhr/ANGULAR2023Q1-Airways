import { Injectable } from '@angular/core';
import {
  HttpClient, HttpErrorResponse, HttpHeaders, HttpParams,
} from '@angular/common/http';
import { API_DEF } from 'src/app/environment/app.define';
import { catchError, throwError, retry } from 'rxjs';
import { ICountryCodeModel } from 'src/app/shared/models/country-code.model';
import { IAirportModel } from 'src/app/shared/models/airport.model';
import { IFlightsRequestModel } from 'src/app/shared/models/flights-request.model';
import { IFlightsResponseModel } from 'src/app/shared/models/flights-response.model';
import { IUserProfileModel } from 'src/app/shared/models/user-profile.model';
import { IUserLoginModel } from 'src/app/shared/models/user-login.model';
import { IUserDataModel } from 'src/app/shared/models/user-data.model';
import { IUserCheckModel } from 'src/app/shared/models/user-check.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) { }

  private getApiUrl(path: string) {
    return `${API_DEF.API_URL_BASE}/${path}`;
  }

  private handlerError(error: HttpErrorResponse) {
    return throwError(() => error.message);
  }

  registrateUser(userProfile: IUserProfileModel) {
    return this.http.post(
      this.getApiUrl(API_DEF.API_URL_USER_REGISTRATION),
      userProfile,
    ).pipe(
      retry(API_DEF.API_NUMBER_OF_REPEATS),
      catchError(this.handlerError),
    );
  }

  loginUser(userLogin: IUserLoginModel) {
    return this.http.post<IUserDataModel>(
      this.getApiUrl(API_DEF.API_URL_USER_LOGIN),
      userLogin,
    ).pipe(
      retry(API_DEF.API_NUMBER_OF_REPEATS),
      catchError(this.handlerError),
    );
  }

  checkUser(userData: IUserCheckModel) {
    return this.http.get<IUserProfileModel>(
      this.getApiUrl(API_DEF.API_URL_USER_CHECK),
      {
        headers: new HttpHeaders().append('Authorization', `Bearer ${userData.token}`),
        params: new HttpParams().append('id', userData.userId),
      },
    ).pipe(
      retry(API_DEF.API_NUMBER_OF_REPEATS),
      catchError(this.handlerError),
    );
  }

  getCountryCodes() {
    return this.http.get<ICountryCodeModel[]>(
      this.getApiUrl(API_DEF.API_URL_COUNTRY_CODES),
    ).pipe(
      retry(API_DEF.API_NUMBER_OF_REPEATS),
      catchError(this.handlerError),
    );
  }

  getAirports() {
    return this.http.get<IAirportModel[]>(
      this.getApiUrl(API_DEF.API_URL_AIRPORTS),
    ).pipe(
      retry(API_DEF.API_NUMBER_OF_REPEATS),
      catchError(this.handlerError),
    );
  }

  getCitizenships() {
    return this.http.get<string[]>(
      this.getApiUrl(API_DEF.API_URL_CITIZENSHIP),
    ).pipe(
      retry(API_DEF.API_NUMBER_OF_REPEATS),
      catchError(this.handlerError),
    );
  }

  getFlights(request: IFlightsRequestModel) {
    return this.http.get<IFlightsResponseModel>(
      this.getApiUrl(API_DEF.API_URL_FLIGHTS),
      {
        params: new HttpParams().appendAll({ ...request }),
      },
    ).pipe(
      retry(API_DEF.API_NUMBER_OF_REPEATS),
      catchError(this.handlerError),
    );
  }
}
