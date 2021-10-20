import { Entity, Column, ManyToMany } from "typeorm";
import { BaseEntity } from "./base-entity";
import { Recipe } from "./recipe";

@Entity()
export class Alergy extends BaseEntity {
  @Column()
  name!: string;

  @ManyToMany(() => Recipe, (Recipe: Recipe) => Recipe.tags)
  Recipes?: Recipe[];
}
