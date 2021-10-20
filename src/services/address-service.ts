import { Address } from "../entities/address";
import { BaseService } from "./base-service";

export class AddressService extends BaseService<Address> {
  constructor() {
    super(Address);
  }
}
