import { getRepository } from "typeorm";
import { Tag } from "../entities/tag";
import { TagCreateRequest } from "../models/validatiors/create/tag-request";
import { BaseService } from "./base-service";

export class TagService extends BaseService<Tag> {
  constructor() {
    super(Tag);
  }
}
