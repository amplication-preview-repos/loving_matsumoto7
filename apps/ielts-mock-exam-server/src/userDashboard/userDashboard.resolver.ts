import * as graphql from "@nestjs/graphql";
import { UserDashboardResolverBase } from "./base/userDashboard.resolver.base";
import { UserDashboard } from "./base/UserDashboard";
import { UserDashboardService } from "./userDashboard.service";

@graphql.Resolver(() => UserDashboard)
export class UserDashboardResolver extends UserDashboardResolverBase {
  constructor(protected readonly service: UserDashboardService) {
    super(service);
  }
}
