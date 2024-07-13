import { TestSectionWhereUniqueInput } from "../testSection/TestSectionWhereUniqueInput";

export type TestContentUpdateInput = {
  title?: string | null;
  content?: string | null;
  description?: string | null;
  testSection?: TestSectionWhereUniqueInput | null;
};
