import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import Activity from "./Activity";
import Ticket from "./Ticket";

@Entity("subscriptions")
export default class Subscription extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Activity, (activity: Activity) => activity.subscriptions, {
    eager: true,
  })
  @JoinColumn()
  activity: Activity;

  @ManyToOne(() => Ticket, (ticket: Ticket) => ticket.subscriptions, {
    eager: true,
  })
  @JoinColumn()
  ticket: Ticket;
}
