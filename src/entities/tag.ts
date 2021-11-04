import { Entity, Column, ManyToMany, JoinTable } from "typeorm";
import { BaseEntity } from "./base-entity";
import { Recipe } from "./recipe";

@Entity()
export class Tag extends BaseEntity {
  @Column({ unique: true })
  name!: string;

  @Column({ nullable: true })
  description?: string;

  @ManyToMany(() => Recipe, (Recipe: Recipe) => Recipe.tags)
  @JoinTable()
  Recipes?: Recipe[];
}
