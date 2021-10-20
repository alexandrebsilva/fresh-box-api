import {
  JsonController,
  Param,
  Body,
  Get,
  Post,
  BadRequestError,
  QueryParam,
} from "routing-controllers";
import { Tag } from "../entities/tag";
import { PaginatedResponse } from "../models/paginated-response";
import { TagService } from "../services/tag-service";

@JsonController("/tag")
export class TagController {
  constructor(private readonly service = new TagService()) {}

  @Get("/find-all")
  async getAll(
    @QueryParam("page") page: number
  ): Promise<PaginatedResponse<Tag>> {
    page = page === undefined ? 1 : page;
    const result = await this.service.findAll(page);

    return result;
  }

  @Get("/find-by-id/:id")
  async getOne(@Param("id") id: number): Promise<Tag> {
    const result = await this.service.findById(id);
    if (result === undefined) throw new BadRequestError("Item not found!");
    return result;
  }

  // @Post("/")
  // async create(@Body() ingredient: any): Promise<{ message: string }> {
  //   await this.service.create(ingredient);
  //   return { message: "Item created!" };
  // }
}
