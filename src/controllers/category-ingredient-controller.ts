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
import { CategoryIngredient } from "../entities/category-ingredient";
import { PaginatedResponse } from "../models/paginated-response";
import { CategoryIngredientCreateRequest } from "../models/validatiors/create/category-ingredient-request";
import { CategoryIngredientService } from "../services";

type FileType = CategoryIngredient;

@JsonController("/category-ingredient")
export class CategoryIngridientController {
  constructor(private readonly service = new CategoryIngredientService()) {}

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
    @Body({ validate: true, required: true })
    payload: CategoryIngredientCreateRequest
  ): Promise<{ message: string }> {
    await this.service.create(payload);

    return { message: "Item created!" };
  }

  @Put("/:id")
  async update(
    @Param("id") id: number,
    @Body({ validate: true, required: true })
    payload: CategoryIngredientCreateRequest
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
