import { Entity, Column, OneToMany } from "typeorm";
import { BaseEntity } from "./base-entity";
import { RecipeAux } from "./recipe-aux";

@Entity()
export class UnitOfMeasurement extends BaseEntity {
  @Column({ unique: true })
  name!: string;

  @Column({ unique: true })
  abbreviation!: string;

  @OneToMany(() => RecipeAux, (recipeAux: RecipeAux) => recipeAux.ingredient)
  recipeAuxs?: RecipeAux[];
}
