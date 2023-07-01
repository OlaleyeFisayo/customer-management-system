import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";

export default function Layout() {
  return (
    <div className="flex w-full min-h-screen bg-gray-300">
      <Sidebar />
      <Outlet />
    </div>
  );
}
