import { MetaReducer } from '@ngrx/store';
import { settingsMetaReducer } from './settings.meta-reducer';

export const metaReducers: MetaReducer[] = [settingsMetaReducer];
