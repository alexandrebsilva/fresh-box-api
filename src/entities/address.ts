import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { BaseEntity } from "./base-entity";
import { User } from "./user";

@Entity()
export class Address extends BaseEntity {
  @Column()
  address!: string;

  @Column()
  number!: string;

  @Column()
  zpcode!: string;

  @Column()
  neighborhood!: string;

  @Column()
  uf!: string;

  @Column()
  city!: string;

  @Column({ default: "BR" })
  country!: string;

  @OneToOne(() => User)
  user!: User;
}
