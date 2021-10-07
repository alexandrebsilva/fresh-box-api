import {
  JsonController,
  Param,
  Body,
  Get,
  Post,
  BadRequestError,
} from "routing-controllers";
import { UnitOfMeasurement } from "../entities/unit-of-measurement";
import { UnitOfMeasurementService } from "../services/unit-of-measurement-service";

@JsonController("/unit-of-measurement")
export class UnitOfMeasurementController {
  constructor(
    private readonly unitOfMeasurementService = new UnitOfMeasurementService()
  ) {}

  @Get("/all")
  async getAll(): Promise<UnitOfMeasurement[]> {
    const unitOfMeasurement = await this.unitOfMeasurementService.getAll();

    return unitOfMeasurement;
  }

  @Get("/:id")
  async getOne(@Param("id") id: number): Promise<UnitOfMeasurement> {
    const unitOfMeasurement = await this.unitOfMeasurementService.getById(id);
    if (unitOfMeasurement === undefined)
      throw new BadRequestError("Item not found!");
    return unitOfMeasurement;
  }

  @Post("/")
  async create(@Body() unitOfMeasurement: any): Promise<{ message: string }> {
    await this.unitOfMeasurementService.create(unitOfMeasurement);
    return { message: "Item created!" };
  }
}
