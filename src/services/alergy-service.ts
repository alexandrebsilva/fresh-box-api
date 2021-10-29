import { Alergy } from "../entities/alergy";
import { BaseService } from "./base-service";

export class AlergyService extends BaseService<Alergy> {
  constructor() {
    super(Alergy);
  }
}
