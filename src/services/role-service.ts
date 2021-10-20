import { Role } from "../entities/role";
import { BaseService } from "./base-service";

export class RoleService extends BaseService<Role> {
  constructor() {
    super(Role);
  }
}
