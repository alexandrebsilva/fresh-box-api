import { getRepository } from "typeorm";
import { Step } from "../entities/step";
import { StepCreateRequest } from "../models/validatiors/create/step-request";
import { BaseService } from "./base-service";

export class StepService extends BaseService<Step> {
  constructor() {
    super(Step);
  }
  async create(payload: StepCreateRequest): Promise<void> {
    const newRow = {
      ...new Step(),
      ...payload,
    };

    await getRepository(Step).save(newRow);
  }
}
