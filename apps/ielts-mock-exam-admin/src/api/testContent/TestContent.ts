import { TestSection } from "../testSection/TestSection";

export type TestContent = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  content: string | null;
  description: string | null;
  testSection?: TestSection | null;
};
