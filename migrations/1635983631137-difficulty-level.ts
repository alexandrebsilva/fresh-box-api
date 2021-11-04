import { MigrationInterface, QueryRunner } from "typeorm";
import { DifficultyLevel } from "../src/entities/difficulty-level";

export class difficultyLevel1635983631137 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.connection.getRepository(DifficultyLevel).save({
      name: "Muito fácil",
      description: "O mais fácil",
    });

    await queryRunner.connection.getRepository(DifficultyLevel).save({
      name: "Fácil",
      description: "O fácil",
    });

    await queryRunner.connection.getRepository(DifficultyLevel).save({
      name: "Médio",
      description: "O médio",
    });

    await queryRunner.connection.getRepository(DifficultyLevel).save({
      name: "Difícil",
      description: "O difícil",
    });

    await queryRunner.connection.getRepository(DifficultyLevel).save({
      name: "Muito difícil",
      description: "O mais difícil",
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.connection
      .getRepository(DifficultyLevel)
      .delete([1, 2, 3, 4, 5]);
  }
}
