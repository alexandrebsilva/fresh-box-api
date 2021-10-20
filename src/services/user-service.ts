import { User } from "../entities/user";
import { BaseService } from "./base-service";

export class UserService extends BaseService<User> {
  constructor() {
    super(User);
  }
}
