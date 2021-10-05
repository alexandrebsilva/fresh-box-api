import { Entity, Column, OneToMany } from "typeorm";
import { BaseEntity } from "./base-entity";
import { Order } from "./order";

@Entity()
export class Menu extends BaseEntity {
  @Column()
  name!: string;

  @Column()
  meals!: number;

  @Column()
  portions!: number;

  @Column({ type: "numeric" })
  price!: number;

  @OneToMany(() => Order, (order: Order) => order.menu)
  orders?: Order[];
}
