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
import { DifficultyLevel } from "../entities/difficulty-level";
import { PaginatedResponse } from "../models/paginated-response";
import { DifficultyLevelCreateRequest } from "../models/validatiors/create/difficulty-level-request";
import { DifficultyLevelUpdateRequest } from "../models/validatiors/update/category-ingredient-request";
import { DifficultyLevelService } from "../services";

type FileType = DifficultyLevel;

@JsonController("/difficulty-level")
export class CategoryIngridientController {
  constructor(private readonly service = new DifficultyLevelService()) {}

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
    payload: DifficultyLevelCreateRequest
  ): Promise<{ message: string }> {
    await this.service.create(payload);

    return { message: "Item created!" };
  }

  @Put("/:id")
  async update(
    @Param("id") id: number,
    @Body({ validate: true, required: true })
    payload: DifficultyLevelUpdateRequest
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
