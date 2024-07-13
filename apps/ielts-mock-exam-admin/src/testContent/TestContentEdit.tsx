import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TestSectionTitle } from "../testSection/TestSectionTitle";

export const TestContentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="title" source="title" />
        <TextInput label="content" multiline source="content" />
        <TextInput label="description" multiline source="description" />
        <ReferenceInput
          source="testSection.id"
          reference="TestSection"
          label="TestSection"
        >
          <SelectInput optionText={TestSectionTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
