import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import Subscription from "./Subscription";
import Date from "./Date";
import Place from "./Place";

@Entity("activities")
export default class Activity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Date, (date: Date) => date.activity, {
    eager: true,
  })
  @JoinColumn()
  date: Date;

  @ManyToOne(() => Place, (place: Place) => place.activity, {
    eager: true,
  })
  @JoinColumn()
  place: Place;

  @Column()
  placeId: number;

  @Column()
  startTime: string;

  @Column()
  endTime: string;

  @Column()
  totalSeats: number;

  @OneToMany(() => Subscription, (subscription) => subscription.activity)
  subscriptions: Subscription[];
}
