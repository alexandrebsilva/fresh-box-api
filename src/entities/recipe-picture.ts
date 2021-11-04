import { Entity, Column, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "./base-entity";
import { Recipe } from "./recipe";

@Entity()
export class RecipePicture extends BaseEntity {
  @Column()
  fileName!: string;

  @Column()
  alt!: string;

  @Column()
  path!: string;

  @ManyToOne(() => Recipe, (recipe: Recipe) => recipe.pictures, {
    nullable: false,
  })
  @JoinColumn()
  recipe!: Recipe;
}
