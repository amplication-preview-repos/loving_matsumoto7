import { SortOrder } from "../../util/SortOrder";

export type AdminDashboardOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  manageContent?: SortOrder;
};
