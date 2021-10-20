import { Tag } from "../entities/tag";
import { BaseService } from "./base-service";

export class TagService extends BaseService<Tag> {
  constructor() {
    super(Tag);
  }
}
