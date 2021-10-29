import {
  JsonController,
  Param,
  Body,
  Post,
  Put,
  Get,
  QueryParam,
  BadRequestError,
  Delete,
} from "routing-controllers";
import { httpValidatorOptions } from "../configs/http-validatior-options";
import { Ingredient } from "../entities/ingredient";
import { PaginatedResponse } from "../models/paginated-response";
import { IngredientCreateRequest } from "../models/validatiors/create/ingredient-request";
import { IngredientUpdateRequest } from "../models/validatiors/update/ingredient-request";
import { IngredientService } from "../services";

type FileType = Ingredient;
type ValidatorCreate = IngredientCreateRequest;
type ValidatorUpdate = IngredientUpdateRequest;

@JsonController("/ingredient")
export class CategoryIngridientController {
  constructor(private readonly service = new IngredientService()) {}

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
