import { getRepository } from "typeorm";
import { DifficultyLevel } from "../entities/difficulty-level";
import { DifficultyLevelCreateRequest } from "../models/validatiors/create/difficulty-level-request";
import { BaseService } from "./base-service";

export class DifficultyLevelService extends BaseService<DifficultyLevel> {
  constructor() {
    super(DifficultyLevel);
  }

  async create(payload: DifficultyLevelCreateRequest): Promise<void> {
    const newRow = {
      ...new DifficultyLevel(),
      ...payload,
    };

    await getRepository(DifficultyLevel).save(newRow);
  }
}
