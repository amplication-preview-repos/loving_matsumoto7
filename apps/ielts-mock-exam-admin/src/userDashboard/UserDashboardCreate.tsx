import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const UserDashboardCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="testResults" multiline source="testResults" />
        <TextInput label="progress" multiline source="progress" />
      </SimpleForm>
    </Create>
  );
};
