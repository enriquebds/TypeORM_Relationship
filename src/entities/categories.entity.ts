import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Property } from "./properties.entity";

@Entity("categories")
class Category {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 60 })
  name: string;

  @OneToMany(() => Property, (property) => property.category)
  property: Property[];
}

export { Category };
