import { getRepository } from "typeorm";
import { Alergy } from "../entities/alergy";
import { AlergyCreateRequest } from "../models/validatiors/create/alergy-request";
import { BaseService } from "./base-service";

export class AlergyService extends BaseService<Alergy> {
  constructor() {
    super(Alergy);
  }

  async create(payload: AlergyCreateRequest): Promise<void> {
    const newRow = {
      ...new Alergy(),
      ...payload,
    };

    await getRepository(Alergy).save(newRow);
  }
}
