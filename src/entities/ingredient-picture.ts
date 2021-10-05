import { Entity, Column, OneToMany, JoinColumn } from "typeorm";
import { BaseEntity } from "./base-entity";
import { Ingredient } from "./ingredient";

@Entity()
export class IngredientPicture extends BaseEntity {
  @Column()
  fileName!: string;

  @Column()
  alt!: string;

  @Column()
  path!: string;

  @OneToMany(() => Ingredient, (ingredient: Ingredient) => ingredient.pictures)
  @JoinColumn()
  ingredient!: Ingredient;
}
