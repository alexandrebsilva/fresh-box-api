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

@JsonController("/ingredient")
export class TagController {
  constructor(private readonly service = new TagService()) {}

  @Get("/:id")
  async getOne(@Param("id") id: number): Promise<Tag> {
    const result = await this.service.findById(id);
    if (result === undefined) throw new BadRequestError("Item not found!");
    return result;
  }

  @Get("/all")
  async getAll(
    @QueryParam("page") page: number
  ): Promise<PaginatedResponse<Tag>> {
    const result = await this.service.findAll(page);

    return result;
  }

  // @Post("/")
  // async create(@Body() ingredient: any): Promise<{ message: string }> {
  //   await this.service.create(ingredient);
  //   return { message: "Item created!" };
  // }
}
