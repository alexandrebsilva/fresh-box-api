import { Entity, Column, ManyToOne } from "typeorm";
import { BaseEntity } from "./base-entity";
import { Receipe } from "./receipe";

@Entity()
export class Step extends BaseEntity {
  @Column()
  title!: string;

  @Column()
  description?: string;

  @ManyToOne(() => Receipe, (receipe: Receipe) => receipe.difficultyLevel)
  receipe?: Receipe;
}
