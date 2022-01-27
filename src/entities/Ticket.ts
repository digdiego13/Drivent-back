import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from "typeorm";
import Subscription from "./Subscription";
import Bedroom from "./Bedroom";

@Entity("tickets")
export default class Ticket extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ticketType: string;

  @Column()
  thereIsHotel: boolean;

  @Column()
  totalPrice: number;

  @Column()
  userId: number;

  @OneToMany(() => Subscription, (subscription) => subscription.ticket)
  subscriptions: Subscription[];

  @ManyToOne(() => Bedroom, (bedroom: Bedroom) => bedroom.tickets, {
    eager: true,
  })
  @JoinColumn()
  bedroom: Bedroom;
}
