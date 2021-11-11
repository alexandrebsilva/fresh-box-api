import { MigrationInterface, QueryRunner } from "typeorm";
import { UserStatus } from "../src/entities/user-status";

export class userStatus1636605169925 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.connection.getRepository(UserStatus).save({
      name: "active",
      description: "Customer active",
    });

    await queryRunner.connection.getRepository(UserStatus).save({
      name: "blockedByAttempts",
      description: "Customer blocked by number of failed login attempts",
    });

    await queryRunner.connection.getRepository(UserStatus).save({
      name: "accountWaitingVerification",
      description: "Customer must verify account with the sent email",
    });

    await queryRunner.connection.getRepository(UserStatus).save({
      name: "blockedByAdmin",
      description: "Customer blocked by admin",
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.connection.getRepository(UserStatus).delete([1, 2, 3, 4]);
  }
}
