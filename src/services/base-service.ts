import { EntityTarget, getRepository } from "typeorm";

export abstract class BaseService<T> {
  constructor(private readonly sourceEntity: EntityTarget<T>) {}
  async findById(id: number): Promise<T | undefined> {
    const result = await getRepository(this.sourceEntity).findOne(id);

    return result;
  }

  async findAll(): Promise<[T[], number]> {
    const result = await getRepository(this.sourceEntity).findAndCount({});

    return result;
  }
}
