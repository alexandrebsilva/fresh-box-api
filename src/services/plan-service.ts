import { Plan } from "../entities/plan";
import { BaseService } from "./base-service";

export class PlanService extends BaseService<Plan> {
  constructor() {
    super(Plan);
  }
}
