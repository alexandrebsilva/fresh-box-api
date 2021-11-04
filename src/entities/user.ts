import {
  Entity,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
  ManyToOne,
  JoinTable,
} from "typeorm";
import { Address } from "./address";
import { BaseEntity } from "./base-entity";
import { CreditCard } from "./credit-card";
import { Order } from "./order";
import { Plan } from "./plan";
import { Role } from "./role";
import { UserStatus } from "./user-status";

@Entity()
export class User extends BaseEntity {
  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column()
  dateOfBirth!: string;

  @Column({ unique: true })
  cpf?: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @Column()
  refreshToken?: string;

  @Column()
  tokenVersion!: number;

  @OneToOne(() => Address)
  @JoinColumn()
  address?: Address;

  @OneToMany(() => Role, (role: Role) => role.users)
  @JoinColumn()
  role!: Role;

  @OneToMany(() => UserStatus, (status: UserStatus) => status.users)
  @JoinColumn()
  userStatus!: UserStatus;

  @OneToMany(() => CreditCard, (creditCard: CreditCard) => creditCard.user, {
    cascade: true,
  })
  @JoinTable()
  creditCards?: CreditCard[];

  @ManyToOne(() => Plan, (plan: Plan) => plan.users)
  @JoinColumn()
  plan!: Plan;

  @OneToMany(() => Order, (order: Order) => order.user)
  orders!: Order[];
}
