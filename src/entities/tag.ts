import { Entity, Column, ManyToMany } from "typeorm";
import { BaseEntity } from "./base-entity";
import { Receipe } from "./receipe";

@Entity()
export class Tag extends BaseEntity {
  @Column()
  name!: string;

  @ManyToMany(() => Receipe, (receipe: Receipe) => receipe.tags)
  receipes?: Receipe[];
}
