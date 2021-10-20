import { GlobalSetting } from "../entities/global-setting";
import { BaseService } from "./base-service";

export class GlobalSettingService extends BaseService<GlobalSetting> {
  constructor() {
    super(GlobalSetting);
  }
}
