import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TestContentTitle } from "../testContent/TestContentTitle";

export const TestSectionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="sectionType" source="sectionType" />
        <ReferenceArrayInput
          source="testContents"
          reference="TestContent"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TestContentTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
