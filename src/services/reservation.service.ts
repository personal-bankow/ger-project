import { Injectable } from '@nestjs/common';
import { Reservation } from '../entities/reservation.entity';
import { reservationsMock } from 'src/mocks/reservation.mock';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ReservationService {
  constructor(
    @InjectRepository(Reservation)
    private reservationRepository: Repository<Reservation>,
  ) {}

  async create(reservation: Reservation) {
    return await this.reservationRepository.insert({
      id: Math.floor(Math.random() * 23),
      resourceId: reservation.resourceId,
      note: reservation.note,
    });
  }

  async findAll() {
    return await this.reservationRepository.find();
  }

  async findById(id: number) {
    return await this.reservationRepository.findOneBy({ id });
  }

  async update(id: number, reservation: Reservation) {
    return await this.reservationRepository.update(id, {
      resourceId: reservation.resourceId,
      note: reservation.note,
    });
  }

  async delete(id: number) {
    return await this.reservationRepository.delete(id);
  }
}
