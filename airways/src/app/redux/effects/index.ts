import { BookingEffects } from './booking.effects';
import { OrdersEffects } from './orders.effect';
import { StaticDataEffects } from './static-data.effects';

export const effects = [
  StaticDataEffects,
  BookingEffects,
  OrdersEffects,
];
