import { PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";

export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @CreateDateColumn({
    nullable: false,
    update: false,
    insert: true,
  })
  dateCreated!: Date;

  @CreateDateColumn({
    nullable: true,
    update: true,
    insert: false,
  })
  dateUpdated?: Date;
}
