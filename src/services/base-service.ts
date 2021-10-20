import { EntityTarget, FindConditions, getRepository } from "typeorm";
import { PaginatedResponse } from "../models/paginated-response";

export abstract class BaseService<T> {
  constructor(private readonly sourceEntity: EntityTarget<T>) {}
  async findById(id: number): Promise<T | undefined> {
    const result = await getRepository(this.sourceEntity).findOne(id);

    return result;
  }

  async findAll(page: number): Promise<PaginatedResponse<T>> {
    const [payload, total] = await getRepository(
      this.sourceEntity
    ).findAndCount({
      take: 10,
      skip: page === 1 ? 0 : page * 10,
      order: { dateCreated: "ASC" },
    } as FindConditions<T>);

    return { total, page, payload };
  }
}
