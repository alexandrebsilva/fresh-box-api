import { UnitOfMeasurement } from "../entities/unit-of-measurement";
import { UnitOfMeasurementRepository } from "../repository/unit-of-measurement-repository";

export class UnitOfMeasurementService {
  constructor(
    private readonly unitOfMeasurementRepository = new UnitOfMeasurementRepository()
  ) {}

  public async getAll(): Promise<UnitOfMeasurement[]> {
    const result = await this.unitOfMeasurementRepository.findAll();
    return result;
  }

  public async getById(id: number): Promise<UnitOfMeasurement | undefined> {
    const result = await this.unitOfMeasurementRepository.findById(id);
    return result;
  }

  public async create(unitOfMeasurement: UnitOfMeasurement): Promise<void> {
    await this.unitOfMeasurementRepository.create(unitOfMeasurement);
  }
}
