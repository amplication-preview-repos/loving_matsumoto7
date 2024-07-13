import { SortOrder } from "../../util/SortOrder";

export type UserDashboardOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  testResults?: SortOrder;
  progress?: SortOrder;
};
