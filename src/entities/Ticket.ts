import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from "typeorm";
import Subscription from "./Subscription";

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
}
