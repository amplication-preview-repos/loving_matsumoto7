import { TestContent as TTestContent } from "../api/testContent/TestContent";

export const TESTCONTENT_TITLE_FIELD = "title";

export const TestContentTitle = (record: TTestContent): string => {
  return record.title?.toString() || String(record.id);
};
