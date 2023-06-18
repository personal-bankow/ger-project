import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Resource } from './resource.entity';

@Entity('reservations')
export class Reservation {
  @PrimaryColumn({ unique: true, nullable: false })
  id: number;

  @Column()
  note: string;

  @ManyToOne(() => Resource)
  @JoinColumn()
  resourceId: string;
}
