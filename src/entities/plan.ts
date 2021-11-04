import { Entity, Column, OneToMany } from "typeorm";
import { BaseEntity } from "./base-entity";
import { User } from "./user";

@Entity()
export class Plan extends BaseEntity {
  @Column({ unique: true })
  name!: string;

  @Column()
  meals!: number;

  @Column()
  portions!: number;

  @Column({ type: "numeric" })
  price!: number;

  @OneToMany(() => User, (user: User) => user.plan)
  users?: User[];
}
