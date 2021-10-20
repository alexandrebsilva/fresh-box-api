import { CreditCard } from "../entities/credit-card";
import { BaseService } from "./base-service";

export class CreditCardService extends BaseService<CreditCard> {
  constructor() {
    super(CreditCard);
  }
}
