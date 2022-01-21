import PaymentData from "@/interfaces/ticketData";
import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
} from "typeorm";
import User from "./User";

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

  static async createOrUpdate(data: PaymentData) {
    const ticket = await this.findOne({ where: { userId: data.userId } });
  }
}
