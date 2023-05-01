import { SETTINGS_DEF } from 'src/app/environment/app.define';
import { STORAGE_KEYS } from 'src/app/core/storage/storage-keys.define';
import { IAppSettingsModel } from 'src/app/shared/models/app-settings.model';

export function saveSettings(settings: IAppSettingsModel) {
  localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
}

export function loadSettings(): IAppSettingsModel {
  const value = localStorage.getItem(STORAGE_KEYS.SETTINGS);
  if (value) {
    return JSON.parse(value);
  }
  saveSettings(SETTINGS_DEF);
  return SETTINGS_DEF;
}
