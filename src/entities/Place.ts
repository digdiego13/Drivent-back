import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  Column,
} from "typeorm";
import Activity from "./Activity";
@Entity("places")
export default class Place extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  placeName: string;

  @OneToMany(() => Activity, (activity: Activity) => activity.place)
  activity: Activity[];
}
