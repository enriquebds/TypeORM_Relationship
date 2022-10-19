import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("addresses")
class Addresses {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 60 })
  district: string;

  @Column({ length: 60 })
  zipCode: string;

  @Column({ length: 60 })
  number: string;

  @Column({ length: 120 })
  city: string;

  @Column({ length: 120 })
  state: string;
}

export { Addresses };
