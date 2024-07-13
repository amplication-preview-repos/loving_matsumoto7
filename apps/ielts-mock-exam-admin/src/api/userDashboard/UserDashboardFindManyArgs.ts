import { UserDashboardWhereInput } from "./UserDashboardWhereInput";
import { UserDashboardOrderByInput } from "./UserDashboardOrderByInput";

export type UserDashboardFindManyArgs = {
  where?: UserDashboardWhereInput;
  orderBy?: Array<UserDashboardOrderByInput>;
  skip?: number;
  take?: number;
};
