import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { API_DEF } from 'src/app/environment/app.define';
import { catchError, throwError, retry } from 'rxjs';
import { ICountryCodeModel } from 'src/app/shared/models/country-code.model';
import { IAirportModel } from 'src/app/shared/models/airport.model';
import { IFlightsRequestModel } from 'src/app/shared/models/flights-request.model';
import { IFlightsResponseModel } from 'src/app/shared/models/flights-response.model';

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
