import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { BaseEntity } from "./base-entity";
import { User } from "./user";

@Entity()
export class UserStatus extends BaseEntity {
  @Column()
  name!: string;

  @Column()
  description?: string;

  @OneToMany(() => User, (user: User) => user.role)
  users?: User[];
}
