import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { Reservation } from '../models/reservation.model';
import { ReservationService } from '../services/reservation.service';
import { ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags('reservations')
@Controller('reservations')
export class ReservationController {
  constructor(private reservationService: ReservationService) { }
  
  @ApiProperty()
  @Post()
  create(@Body() reservation: Reservation): Reservation {
    return this.reservationService.create(reservation);
  }

  @ApiProperty()
  @Get()
  findAll(): Reservation[] {
    return this.reservationService.findAll();
  }

  @ApiProperty()
  @Get(':id')
  findById(@Param('id') id: number): Reservation {
    return this.reservationService.findById(id);
  }

  @ApiProperty()
  @Put(':id')
  update(@Param('id') id: number, @Body() reservation: Reservation): Reservation {
    return this.reservationService.update(id, reservation);
  }

  @ApiProperty()
  @Delete(':id')
  delete(@Param('id') id: number): Reservation {
    return this.reservationService.delete(id);
  }
}