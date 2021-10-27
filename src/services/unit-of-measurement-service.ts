import { getRepository } from "typeorm";
import { UnitOfMeasurement } from "../entities/unit-of-measurement";
import { UnitOfMeasurementCreateRequest } from "../models/validatiors/create/unit-of-measurement-request";
import { BaseService } from "./base-service";

export class UnitOfMeasurementService extends BaseService<UnitOfMeasurement> {
  constructor() {
    super(UnitOfMeasurement);
  }

  async create(payload: UnitOfMeasurementCreateRequest): Promise<void> {
    const newOne = {
      ...new UnitOfMeasurement(),
      ...payload,
    };

    await getRepository(UnitOfMeasurement).create(newOne);
  }
}
