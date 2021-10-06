import { Entity, Column, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "./base-entity";
import { Ingredient } from "./ingredient";

@Entity()
export class ReceipePicture extends BaseEntity {
  @Column()
  fileName!: string;

  @Column()
  alt!: string;

  @Column()
  path!: string;

  @ManyToOne(() => Ingredient, (ingredient: Ingredient) => ingredient.pictures)
  @JoinColumn()
  receipe!: Ingredient;
}
