import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserDashboardList } from "./userDashboard/UserDashboardList";
import { UserDashboardCreate } from "./userDashboard/UserDashboardCreate";
import { UserDashboardEdit } from "./userDashboard/UserDashboardEdit";
import { UserDashboardShow } from "./userDashboard/UserDashboardShow";
import { AdminDashboardList } from "./adminDashboard/AdminDashboardList";
import { AdminDashboardCreate } from "./adminDashboard/AdminDashboardCreate";
import { AdminDashboardEdit } from "./adminDashboard/AdminDashboardEdit";
import { AdminDashboardShow } from "./adminDashboard/AdminDashboardShow";
import { TestSectionList } from "./testSection/TestSectionList";
import { TestSectionCreate } from "./testSection/TestSectionCreate";
import { TestSectionEdit } from "./testSection/TestSectionEdit";
import { TestSectionShow } from "./testSection/TestSectionShow";
import { AdminList } from "./admin/AdminList";
import { AdminCreate } from "./admin/AdminCreate";
import { AdminEdit } from "./admin/AdminEdit";
import { AdminShow } from "./admin/AdminShow";
import { TestContentList } from "./testContent/TestContentList";
import { TestContentCreate } from "./testContent/TestContentCreate";
import { TestContentEdit } from "./testContent/TestContentEdit";
import { TestContentShow } from "./testContent/TestContentShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"IELTSMockExam"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="UserDashboard"
          list={UserDashboardList}
          edit={UserDashboardEdit}
          create={UserDashboardCreate}
          show={UserDashboardShow}
        />
        <Resource
          name="AdminDashboard"
          list={AdminDashboardList}
          edit={AdminDashboardEdit}
          create={AdminDashboardCreate}
          show={AdminDashboardShow}
        />
        <Resource
          name="TestSection"
          list={TestSectionList}
          edit={TestSectionEdit}
          create={TestSectionCreate}
          show={TestSectionShow}
        />
        <Resource
          name="Admin"
          list={AdminList}
          edit={AdminEdit}
          create={AdminCreate}
          show={AdminShow}
        />
        <Resource
          name="TestContent"
          list={TestContentList}
          edit={TestContentEdit}
          create={TestContentCreate}
          show={TestContentShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
