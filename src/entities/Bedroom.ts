import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import Hotel from "./Hotel";
import Ticket from "./Ticket";

@Entity("bedrooms")
export default class Bedroom extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Hotel, (hotel: Hotel) => hotel.bedrooms, {
    eager: true,
  })
  @JoinColumn()
  hotel: Hotel;

  @Column()
  number: number;

  @Column()
  maxSeats: number;

  @OneToMany(() => Ticket, (ticket) => ticket.bedroom)
  tickets: Ticket[];
}
