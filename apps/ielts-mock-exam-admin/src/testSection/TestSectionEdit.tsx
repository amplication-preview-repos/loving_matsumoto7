import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TestContentTitle } from "../testContent/TestContentTitle";

export const TestSectionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
