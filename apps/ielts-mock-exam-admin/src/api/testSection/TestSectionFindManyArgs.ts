import { TestSectionWhereInput } from "./TestSectionWhereInput";
import { TestSectionOrderByInput } from "./TestSectionOrderByInput";

export type TestSectionFindManyArgs = {
  where?: TestSectionWhereInput;
  orderBy?: Array<TestSectionOrderByInput>;
  skip?: number;
  take?: number;
};
