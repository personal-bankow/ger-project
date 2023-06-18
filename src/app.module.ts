import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ResourceController } from './controllers/resource.controller';
import { ReservationController } from './controllers/reservation.controller';
import { ResourceService } from './services/resource.service';
import { ReservationService } from './services/reservation.service';
import { Resource } from './entities/resource.entity';
import { Reservation } from './entities/reservation.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Resource, Reservation]),
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      url: process.env.DATABASE_URL,
      type: 'postgres',
      ssl: {
        rejectUnauthorized: false,
      },
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true, // DEV ONLY || CHANGE TO FALSE ON PROD
      autoLoadEntities: true,
    }),
  ],
  controllers: [ResourceController, ReservationController],
  providers: [ResourceService, ReservationService],
})
export class AppModule {}
