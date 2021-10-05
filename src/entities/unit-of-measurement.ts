import { Entity, Column, ManyToMany } from "typeorm";
import { BaseEntity } from "./base-entity";
import { Ingredient } from "./ingredient";

@Entity()
export class UnitOfMeasurement extends BaseEntity {
  @Column()
  name!: string;

  @Column()
  abbreviation!: string;

  @ManyToMany(
    () => Ingredient,
    (ingredient: Ingredient) => ingredient.unitOfMeasurements
  )
  ingredients?: Ingredient[];
}
