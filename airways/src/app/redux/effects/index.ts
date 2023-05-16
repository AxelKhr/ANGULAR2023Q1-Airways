import { AuthEffects } from './auth.effects';
import { BookingEffects } from './booking.effects';
import { StaticDataEffects } from './static-data.effects';

export const effects = [
  StaticDataEffects,
  BookingEffects,
  AuthEffects,
];
