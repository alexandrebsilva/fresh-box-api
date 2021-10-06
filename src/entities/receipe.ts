import { Entity, Column, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { Alergy } from "./alergy";
import { BaseEntity } from "./base-entity";
import { DifficultyLevel } from "./difficulty-level";
import { ReceipePicture } from "./receipe-picture";
import { Tag } from "./tag";

@Entity()
export class Receipe extends BaseEntity {
  @Column()
  name!: string;

  @Column()
  description!: string;

  @ManyToOne(
    () => DifficultyLevel,
    (difficultyLevel: DifficultyLevel) => difficultyLevel.receipes
  )
  difficultyLevel!: DifficultyLevel;

  @ManyToMany(() => Tag, (tag: Tag) => tag.receipes)
  tags?: Tag[];

  @ManyToMany(() => Alergy, (alergy: Alergy) => alergy.receipes)
  alergies?: Alergy[];

  @OneToMany(
    () => ReceipePicture,
    (receipePicture: ReceipePicture) => receipePicture.receipe
  )
  pictures?: ReceipePicture[];
}