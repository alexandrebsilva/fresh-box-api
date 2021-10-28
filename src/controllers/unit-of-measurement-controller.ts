import {
  JsonController,
  Param,
  Body,
  Get,
  Post,
  BadRequestError,
  QueryParam,
  Put,
} from "routing-controllers";
import { httpValidatorOptions } from "../configs/http-validatior-options";
import { CategoryIngredient } from "../entities/category-ingredient";
import { UnitOfMeasurement } from "../entities/unit-of-measurement";
import { PaginatedResponse } from "../models/paginated-response";
import { UnitOfMeasurementCreateRequest } from "../models/validatiors/create/unit-of-measurement-request";
import { UnitOfMeasurementService } from "../services/unit-of-measurement-service";

@JsonController("/unit-of-measurement")
export class UnitOfMeasurementController {
  constructor(private readonly service = new UnitOfMeasurementService()) {}

  @Get("/all")
  async getAll(
    @QueryParam("page") page: number
  ): Promise<PaginatedResponse<UnitOfMeasurement>> {
    const result = await this.service.findAll(page);

    return result;
  }

  @Post("/")
  async create(
    @Body(httpValidatorOptions)
    ingredient: UnitOfMeasurementCreateRequest
  ): Promise<{ message: string }> {
    await this.service.create(ingredient);

    return { message: "Item created!" };
  }

  @Put("/:id")
  async update(
    @Param("id") id: number,
    @Body(httpValidatorOptions)
    payload: UnitOfMeasurementCreateRequest
  ): Promise<{ message: string }> {
    await this.service.update(id, payload as UnitOfMeasurement);

    return { message: "Item updated!" };
  }

  @Get("/:id")
  async getOne(@Param("id") id: number): Promise<CategoryIngredient> {
    const result = await this.service.findById(id);
    if (result === undefined) throw new BadRequestError("Item not found!");
    return result;
  }
}
