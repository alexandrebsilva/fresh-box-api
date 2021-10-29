import { DifficultyLevel } from "../entities/difficulty-level";
import { BaseService } from "./base-service";

export class DifficultyLevelService extends BaseService<DifficultyLevel> {
  constructor() {
    super(DifficultyLevel);
  }
}
