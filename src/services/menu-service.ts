import { Menu } from "../entities/menu";
import { BaseService } from "./base-service";

export class MenuService extends BaseService<Menu> {
  constructor() {
    super(Menu);
  }
}
