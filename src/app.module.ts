import { Module } from '@nestjs/common';
import { ResourceController } from './controllers/resource.controller';
import { ReservationController } from './controllers/reservation.controller';
import { ResourceService } from './services/resource.service';
import { ReservationService } from './services/reservation.service';

@Module({
  imports: [],
  controllers: [ResourceController, ReservationController],
  providers: [ResourceService, ReservationService],
})
export class AppModule { }