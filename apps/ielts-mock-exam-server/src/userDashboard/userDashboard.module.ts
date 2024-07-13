import { Module } from "@nestjs/common";
import { UserDashboardModuleBase } from "./base/userDashboard.module.base";
import { UserDashboardService } from "./userDashboard.service";
import { UserDashboardController } from "./userDashboard.controller";
import { UserDashboardResolver } from "./userDashboard.resolver";

@Module({
  imports: [UserDashboardModuleBase],
  controllers: [UserDashboardController],
  providers: [UserDashboardService, UserDashboardResolver],
  exports: [UserDashboardService],
})
export class UserDashboardModule {}
