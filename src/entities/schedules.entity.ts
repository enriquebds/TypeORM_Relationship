import {
  Entity,
  Column,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from "typeorm";
import { Property } from "./properties.entity";
import { User } from "./user.entity";

@Entity("schedules_users_properties")
class Schedules {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column("date")
  date: string;

  @Column("time")
  hour: string;

  @ManyToOne(() => User, (user) => user.schedules, { eager: true })
  @JoinColumn()
  user: User;

  @ManyToOne(() => Property, (properties) => properties.schedules)
  properties: Property;
}

export { Schedules };
