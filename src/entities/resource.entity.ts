import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('resources')
export class Resource {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ nullable: false })
  name: string;

  @Column()
  description: string;

  @Column()
  characteristics: string;

  @Column()
  status: string;
}
