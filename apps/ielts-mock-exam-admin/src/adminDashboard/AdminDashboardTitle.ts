import { AdminDashboard as TAdminDashboard } from "../api/adminDashboard/AdminDashboard";

export const ADMINDASHBOARD_TITLE_FIELD = "id";

export const AdminDashboardTitle = (record: TAdminDashboard): string => {
  return record.id?.toString() || String(record.id);
};
