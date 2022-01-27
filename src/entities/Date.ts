import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  Column,
} from "typeorm";
import Activity from "./Activity";

@Entity("dates")
export default class Date extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dateName: string;

  @OneToMany(() => Activity, (activity: Activity) => activity.date)
  activity: Activity[];
}
