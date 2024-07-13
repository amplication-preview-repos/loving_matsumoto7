import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserDashboardService } from "./userDashboard.service";
import { UserDashboardControllerBase } from "./base/userDashboard.controller.base";

@swagger.ApiTags("userDashboards")
@common.Controller("userDashboards")
export class UserDashboardController extends UserDashboardControllerBase {
  constructor(protected readonly service: UserDashboardService) {
    super(service);
  }
}
