import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TestSectionWhereUniqueInput } from "../testSection/TestSectionWhereUniqueInput";

export type TestContentWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  content?: StringNullableFilter;
  description?: StringNullableFilter;
  testSection?: TestSectionWhereUniqueInput;
};
