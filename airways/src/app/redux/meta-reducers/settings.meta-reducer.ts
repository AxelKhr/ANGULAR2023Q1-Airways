import { Action, ActionReducer } from '@ngrx/store';
import { saveSettings } from 'src/app/core/storage/storage';
import { SettingsActionTypes } from '../actions/settings.action';
import { StateModel } from '../state.model';

export function settingsMetaReducer<S, A extends Action = Action>(reducer: ActionReducer<S, A>) {
  return function retFunc(state: S, action: A): S {
    const nextState = reducer(state, action);
    if ((Object.values(SettingsActionTypes) as string[]).includes(action.type)) {
      saveSettings((nextState as StateModel).settings);
    }
    return nextState;
  };
}
