import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { API_DEF } from 'src/app/environment/app.define';
import { catchError, throwError, retry } from 'rxjs';
import { ICountryCodeModel } from 'src/app/shared/models/country-code.model';
import { IAirportModel } from 'src/app/shared/models/airport.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) { }

  private getApiUrl(path: string) {
    return `${API_DEF.API_URL_BASE}/${path}`;
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

  private handlerError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }
}
