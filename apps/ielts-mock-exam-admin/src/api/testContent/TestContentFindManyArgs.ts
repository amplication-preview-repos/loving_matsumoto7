import { TestContentWhereInput } from "./TestContentWhereInput";
import { TestContentOrderByInput } from "./TestContentOrderByInput";

export type TestContentFindManyArgs = {
  where?: TestContentWhereInput;
  orderBy?: Array<TestContentOrderByInput>;
  skip?: number;
  take?: number;
};
