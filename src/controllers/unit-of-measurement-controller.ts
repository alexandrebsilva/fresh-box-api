import {
  JsonController,
  Param,
  Body,
  Get,
  Post,
  BadRequestError,
  QueryParam,
  Put,
  Delete,
} from "routing-controllers";
import { httpValidatorOptions } from "../configs/http-validatior-options";
import { UnitOfMeasurement } from "../entities/unit-of-measurement";
import { PaginatedResponse } from "../models/paginated-response";
import { UnitOfMeasurementCreateRequest } from "../models/validatiors/create/unit-of-measurement-request";
import { UnitOfMeasurementUpdateRequest } from "../models/validatiors/update/unit-of-measurement-request";
import { UnitOfMeasurementService } from "../services/unit-of-measurement-service";

type FileType = UnitOfMeasurement;
type ValidatorCreate = UnitOfMeasurementCreateRequest;
type ValidatorUpdate = UnitOfMeasurementUpdateRequest;
@JsonController("/unit-of-measurement")
export class UnitOfMeasurementController {
  constructor(private readonly service = new UnitOfMeasurementService()) {}

  @Get("/all")
  async getAll(
    @QueryParam("page") page: number
  ): Promise<PaginatedResponse<FileType>> {
    page = page === undefined ? 1 : page;
    const result = await this.service.findAll(page);

    return result;
  }

  @Get("/find-by-id/:id")
  async getOne(@Param("id") id: number): Promise<FileType> {
    const result = await this.service.findById(id);
    if (result === undefined) throw new BadRequestError("Item not found!");
    return result;
  }

  @Post("/")
  async create(
    @Body(httpValidatorOptions)
    payload: ValidatorCreate
  ): Promise<{ message: string }> {
    await this.service.create(payload as unknown as FileType);

    return { message: "Item created!" };
  }

  @Put("/:id")
  async update(
    @Param("id") id: number,
    @Body(httpValidatorOptions)
    payload: ValidatorUpdate
  ): Promise<{ message: string }> {
    await this.service.update(id, payload as FileType);

    return { message: "Item updated!" };
  }

  @Delete("/:id")
  async delete(@Param("id") id: number): Promise<{ message: string }> {
    await this.service.delete(id);

    return { message: "Item deleted!" };
  }
}
