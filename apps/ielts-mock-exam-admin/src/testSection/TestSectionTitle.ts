import { TestSection as TTestSection } from "../api/testSection/TestSection";

export const TESTSECTION_TITLE_FIELD = "sectionType";

export const TestSectionTitle = (record: TTestSection): string => {
  return record.sectionType?.toString() || String(record.id);
};
