import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { BaseEntity } from "./base-entity";
import { User } from "./user";

@Entity()
export class GlobalSetting extends BaseEntity {
  @Column()
  name!: string;

  @Column()
  type!: string;

  @Column()
  value!: string;
}
