/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { getRepository } from "typeorm";
import { UnitOfMeasurement } from "../entities/unit-of-measurement";

export class UnitOfMeasurementRepository {
  async findById(id: number): Promise<UnitOfMeasurement | undefined> {
    const result = await getRepository(UnitOfMeasurement).findOne(id);
    return result;
  }

  async findAll(): Promise<UnitOfMeasurement[]> {
    const result = await getRepository(UnitOfMeasurement).find();
    return result;
  }

  async create(unitOfMeasurement: UnitOfMeasurement): Promise<void> {
    await getRepository(UnitOfMeasurement).create(unitOfMeasurement);
  }
}
