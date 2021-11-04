import { BadRequestError } from "routing-controllers";
import { EntityTarget, FindConditions, getRepository } from "typeorm";
import { PaginatedResponse } from "../models/paginated-response";

export abstract class BaseService<T> {
  constructor(private readonly sourceEntity: EntityTarget<T>) {}

  async findById(id: number): Promise<T | undefined> {
    const result = await getRepository(this.sourceEntity).findOne(id);

    return result;
  }

  async findByIds(ids: number[]): Promise<T[]> {
    const result = await getRepository(this.sourceEntity).findByIds(ids);
    return result;
  }

  async findAll(page: number): Promise<PaginatedResponse<T>> {
    const [payload, total] = await getRepository(
      this.sourceEntity
    ).findAndCount({
      take: 10,
      skip: page === 1 ? 0 : page * 10,
      order: { dateCreated: "DESC" },
    } as FindConditions<T>);

    return { total, page, payload };
  }

  async create(payload: T): Promise<void> {
    await getRepository(this.sourceEntity).save(payload);
  }

  async update(id: number, payload: T): Promise<void> {
    const result = await this.findById(id);
    if (!result) {
      throw new BadRequestError("Item not found");
    }
    await getRepository(this.sourceEntity).update(id, payload);
  }

  async delete(id: number): Promise<void> {
    const result = await this.findById(id);
    if (!result) {
      throw new BadRequestError("Item not found");
    }
    await getRepository(this.sourceEntity).delete(id);
  }
}
