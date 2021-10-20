import { getRepository, EntityTarget } from "typeorm";

export abstract class BaseRepository<T> {
  constructor(private entity: EntityTarget<T>) {}

  async findById(id: number): Promise<T | undefined> {
    const result = await getRepository(this.entity).findOne(id);
    return result;
  }

  async findAll(): Promise<T[]> {
    const result = await getRepository(this.entity).find();
    return result;
  }

  // async create(payload: T): Promise<void> {
  //   await getRepository(this.entity).create(payload);
  // }

  // async update(id: number, payload: T): Promise<void> {
  //   await getRepository(this.entity).update(id, payload);
  // }
}
