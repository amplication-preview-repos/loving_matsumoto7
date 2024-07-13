import { UserDashboard as TUserDashboard } from "../api/userDashboard/UserDashboard";

export const USERDASHBOARD_TITLE_FIELD = "id";

export const UserDashboardTitle = (record: TUserDashboard): string => {
  return record.id?.toString() || String(record.id);
};
