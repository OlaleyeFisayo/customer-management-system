import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "../components/layout";
import Dashboard from "../pages/dashboard";
import Customer from "../pages/customers";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Dashboard />} />
      <Route path="customer" element={<Customer />} />
    </Route>
  )
);

export { router };
