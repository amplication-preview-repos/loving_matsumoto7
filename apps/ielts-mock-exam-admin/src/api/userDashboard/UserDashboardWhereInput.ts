import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserDashboardWhereInput = {
  id?: StringFilter;
  testResults?: StringNullableFilter;
  progress?: StringNullableFilter;
};
