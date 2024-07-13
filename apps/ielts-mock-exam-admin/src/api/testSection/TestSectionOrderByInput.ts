import { SortOrder } from "../../util/SortOrder";

export type TestSectionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  sectionType?: SortOrder;
};
