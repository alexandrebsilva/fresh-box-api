import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { BaseEntity } from "./base-entity";
import { User } from "./user";

@Entity()
export class Plan extends BaseEntity {
  @Column()
  name!: string;

  @Column()
  meals!: number;

  @Column()
  portions!: number;

  @Column({ type: "numeric" })
  price!: number;

  @OneToMany(() => User, (user: User) => user.role)
  users?: User[];
}
