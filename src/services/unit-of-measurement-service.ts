import { UnitOfMeasurement } from "../entities/unit-of-measurement";
import { BaseService } from "./base-service";

export class UnitOfMeasurementService extends BaseService<UnitOfMeasurement> {
  constructor() {
    super(UnitOfMeasurement);
  }
}
