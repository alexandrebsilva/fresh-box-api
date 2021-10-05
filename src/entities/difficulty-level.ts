import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "./base-entity";
import { Receipe } from "./receipe";

@Entity()
export class DifficultyLevel extends BaseEntity {
  @Column()
  name!: string;

  @Column()
  description?: string;

  @OneToMany(() => Receipe, (receipe: Receipe) => receipe.difficultyLevel)
  receipes?: Receipe[];
}
