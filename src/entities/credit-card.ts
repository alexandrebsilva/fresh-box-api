import { Entity, Column, ManyToOne, JoinColumn } from "typeorm";
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

  @ManyToOne(() => User, (user: User) => user.creditCards)
  @JoinColumn()
  user!: User;
}
