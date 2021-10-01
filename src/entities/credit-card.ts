import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { BaseEntity } from "./base-entity";
import { User } from "./user";

@Entity()
export class CreditCard extends BaseEntity {
  @Column()
  nameOnCard!: string;

  @Column()
  number!: string;

  @Column()
  cvv!: string;

  @Column()
  expireDate!: Date;

  @Column()
  description?: string;

  @ManyToOne(() => User, (user: User) => user.role)
  @JoinColumn()
  users?: User[];
}
