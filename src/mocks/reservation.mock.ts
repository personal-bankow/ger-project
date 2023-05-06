import { Reservation } from '../models/reservation.model';
import { resourcesMock } from './resource.mock';

export const reservationsMock: Reservation[] = [
  new Reservation(1, resourcesMock[0], 'Important meeting'),
  new Reservation(2, resourcesMock[1], 'Presentation of slides'),
  new Reservation(3, resourcesMock[0], 'Meeting with clients'),
];
