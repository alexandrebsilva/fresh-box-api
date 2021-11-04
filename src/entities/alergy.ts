import { Entity, Column, ManyToMany, JoinTable } from "typeorm";
import { BaseEntity } from "./base-entity";
import { Recipe } from "./recipe";

@Entity()
export class Alergy extends BaseEntity {
  @Column({ unique: true })
  name!: string;

  @Column()
  description!: string;

  @ManyToMany(() => Recipe, (Recipe: Recipe) => Recipe.tags)
  Recipes?: Recipe[];
}
