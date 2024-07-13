import { TestContentCreateNestedManyWithoutTestSectionsInput } from "./TestContentCreateNestedManyWithoutTestSectionsInput";

export type TestSectionCreateInput = {
  sectionType?: string | null;
  testContents?: TestContentCreateNestedManyWithoutTestSectionsInput;
};
