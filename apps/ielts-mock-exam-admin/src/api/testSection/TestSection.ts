import { TestContent } from "../testContent/TestContent";

export type TestSection = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  sectionType: string | null;
  testContents?: Array<TestContent>;
};
