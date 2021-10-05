import { Entity, Column, OneToMany } from "typeorm";
import { BaseEntity } from "./base-entity";
import { Ingredient } from "./ingredient";

@Entity()
export class Categoryingredient extends BaseEntity {
  @Column()
  name!: string;

  @OneToMany(() => Ingredient, (ingredient: Ingredient) => ingredient.category)
  ingredients?: Ingredient[];
}
