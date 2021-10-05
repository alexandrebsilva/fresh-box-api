import { Entity, OneToMany, JoinColumn } from "typeorm";
import { BaseEntity } from "./base-entity";
import { Menu } from "./menu";
import { User } from "./user";

@Entity()
export class Order extends BaseEntity {
  @OneToMany(() => User, (user: User) => user.orders)
  @JoinColumn()
  user!: User;

  @OneToMany(() => Menu, (menu: Menu) => menu.orders)
  @JoinColumn()
  menu!: Menu;
}
