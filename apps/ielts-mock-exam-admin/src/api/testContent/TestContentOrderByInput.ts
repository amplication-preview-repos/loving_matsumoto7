import { SortOrder } from "../../util/SortOrder";

export type TestContentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  content?: SortOrder;
  description?: SortOrder;
  testSectionId?: SortOrder;
};
