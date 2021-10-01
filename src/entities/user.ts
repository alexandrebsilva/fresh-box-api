import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Address } from "./address";
import { BaseEntity } from "./base-entity";
import { CreditCard } from "./credit-card";
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

  @Column()
  cpf?: string;

  @Column()
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
  status!: UserStatus;

  @OneToMany(() => CreditCard, (creditCard: CreditCard) => creditCard.users)
  creditCards?: CreditCard[];

  @Column()
  plan?: string;
}
