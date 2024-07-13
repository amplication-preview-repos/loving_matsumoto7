import { TestContentUpdateManyWithoutTestSectionsInput } from "./TestContentUpdateManyWithoutTestSectionsInput";

export type TestSectionUpdateInput = {
  sectionType?: string | null;
  testContents?: TestContentUpdateManyWithoutTestSectionsInput;
};
