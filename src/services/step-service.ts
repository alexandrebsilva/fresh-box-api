import { Step } from "../entities/step";
import { BaseService } from "./base-service";

export class StepService extends BaseService<Step> {
  constructor() {
    super(Step);
  }
}
