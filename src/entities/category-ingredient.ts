import { Entity, Column, OneToMany } from "typeorm";
import { BaseEntity } from "./base-entity";
import { Ingredient } from "./ingredient";

@Entity()
export class CategoryIngredient extends BaseEntity {
  @Column()
  name!: string;

  @Column({ nullable: true })
  description?: string;

  @OneToMany(() => Ingredient, (ingredient: Ingredient) => ingredient.category)
  ingredients?: Ingredient[];
}
