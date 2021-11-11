import { validate } from "class-validator";
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
import { Alergy } from "../entities/alergy";
import { Recipe } from "../entities/recipe";
import { PaginatedResponse } from "../models/paginated-response";
import { RecipeCreateRequest } from "../models/validatiors/create/recipe-request";
import { RecipeUpdateRequest } from "../models/validatiors/update/recipe-request";
import { RecipeService } from "../services";

type FileType = Recipe;
type ValidatorCreate = RecipeCreateRequest;
type ValidatorUpdate = RecipeUpdateRequest;

@JsonController("/recipe")
export class RecipeController {
  constructor(private readonly service = new RecipeService()) {}

  @Get("/all")
  async getAll(@QueryParam("page") page: number): Promise<any> {
    page = page === undefined ? 1 : page;
    const result = await this.service.findAllFull();

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
    await this.service.createFull(payload);

    return { message: "Item created!" };
  }

  @Put("/:id")
  async update(
    @Param("id") id: number,
    @Body(httpValidatorOptions)
    payload: ValidatorUpdate
  ): Promise<{ message: string }> {
    validate(payload);
    await this.service.update(id, payload as unknown as FileType);

    return { message: "Item updated!" };
  }

  @Delete("/:id")
  async delete(@Param("id") id: number): Promise<{ message: string }> {
    await this.service.delete(id);

    return { message: "Item deleted!" };
  }
}
