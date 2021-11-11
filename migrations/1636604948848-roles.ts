import { MigrationInterface, QueryRunner } from "typeorm";
import { Role } from "../src/entities/role";

export class roles1636604948848 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.connection.getRepository(Role).save({
      name: "admin",
      description: "System administrator",
    });

    await queryRunner.connection.getRepository(Role).save({
      name: "customer",
      description: "Customer of the system",
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.connection.getRepository(Role).delete([1, 2]);
  }
}
