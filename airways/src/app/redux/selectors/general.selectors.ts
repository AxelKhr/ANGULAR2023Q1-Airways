import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAirportModel } from 'src/app/shared/models/airport.model';
import { IGeneralStateModel } from '../state.model';

export const selectGeneralState = createFeatureSelector<IGeneralStateModel>('general');

export const selectIsMainStyle = createSelector(
  selectGeneralState,
  (state) => state.isMainStyle,
);

export const selectIsMainStyleInverse = createSelector(
  selectGeneralState,
  (state) => !state.isMainStyle,
);

export const selectAirports = createSelector(
  selectGeneralState,
  (state) => state.airports,
);

export const selectAirportByCode = (code: string) => createSelector(
  selectAirports,
  (airports: IAirportModel[]) => airports.find((el) => el.code === code),
);

export const selectAirportNameByCode = (code: string) => createSelector(
  selectAirportByCode(code),
  (airport) => (airport ? airport.name.replace(/International/g, '').replace(/Airport/g, '').trim() : code),
);

export const selectCityByCode = (code: string) => createSelector(
  selectAirportByCode(code),
  (airport) => (airport ? airport.city : code),
);

export const selectCountryCodes = createSelector(
  selectGeneralState,
  (state) => {
    const list = [...state.countryCodes];
    list.sort((a, b) => ((a.country >= b.country) ? 1 : -1));
    return list;
  },
);

export const selectCitizenships = createSelector(
  selectGeneralState,
  (state) => state.citizenships,
);
