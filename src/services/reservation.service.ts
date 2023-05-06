import { Injectable } from '@nestjs/common';
import { Reservation } from '../models/reservation.model';
import { reservationsMock } from 'src/mocks/reservation.mock';

@Injectable()
export class ReservationService {
  private reservations = reservationsMock;

  create(reservation: Reservation): Reservation {
    const newReservation = {
      id: this.reservations.length + 1,
      resource: reservation.resource,
      note: reservation.note,
    };
    this.reservations.push(newReservation);
    return newReservation;
  }

  findAll(): Reservation[] {
    return this.reservations;
  }

  findById(id: number): Reservation {
    return this.reservations.find(reservation => reservation.id === id);
  }

  update(id: number, reservation: Reservation): Reservation {
    const index = this.reservations.findIndex(reservation => reservation.id === id);
    const updatedReservation = {
      id: id,
      resource: reservation.resource,
      note: reservation.note,
    };
    this.reservations[index] = updatedReservation;
    return updatedReservation;
  }

  delete(id: number): Reservation {
    const index = this.reservations.findIndex(reservation => reservation.id === id);
    const deletedReservation = this.reservations[index];
    this.reservations.splice(index, 1);
    return deletedReservation;
  }
}