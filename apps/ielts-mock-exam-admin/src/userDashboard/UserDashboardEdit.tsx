import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const UserDashboardEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="testResults" multiline source="testResults" />
        <TextInput label="progress" multiline source="progress" />
      </SimpleForm>
    </Edit>
  );
};
