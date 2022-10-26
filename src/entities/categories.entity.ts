import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Property } from "./properties.entity";

@Entity("categories")
class Category {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 60, nullable: false })
  name: string;

  @OneToMany(() => Property, (property) => property.category)
  properties: Property[];
}

export { Category };
