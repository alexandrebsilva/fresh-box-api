import { Entity, Column, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "./base-entity";
import { Receipe } from "./receipe";

@Entity()
export class ReceipePicture extends BaseEntity {
  @Column()
  fileName!: string;

  @Column()
  alt!: string;

  @Column()
  path!: string;

  @ManyToOne(() => Receipe, (recipe: Receipe) => recipe.pictures)
  @JoinColumn()
  recipe!: Receipe;
}
