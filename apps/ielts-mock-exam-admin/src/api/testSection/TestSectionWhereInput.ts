import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TestContentListRelationFilter } from "../testContent/TestContentListRelationFilter";

export type TestSectionWhereInput = {
  id?: StringFilter;
  sectionType?: StringNullableFilter;
  testContents?: TestContentListRelationFilter;
};
