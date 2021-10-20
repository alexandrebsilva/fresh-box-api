import { UserStatus } from "../entities/user-status";
import { BaseService } from "./base-service";

export class UserStatusService extends BaseService<UserStatus> {
  constructor() {
    super(UserStatus);
  }
}
