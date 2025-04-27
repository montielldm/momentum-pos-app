import { Routes, Route } from "react-router-dom";

// import routes
// -----LOGIN----
import LayoutAuth from "@/pages/auth/LayoutAuth";
import LoginPage from "@/pages/auth/pages/login/LoginPage";
import ForgotPassword from "@/pages/auth/pages/forgot-password/ForgotPassword";
import ResetPassword from "@/pages/auth/pages/reset-password/ResetPassword";
import LayoutProtected from "@/pages/protected/LayoutProtected";

// ----DASHBOARD----
import DashboardPage from "@/pages/protected/pages/dashboard/DashboardPage";

// ---- TICKETS ----
import TicketsPage from "@/pages/protected/pages/tickets/TicketsPage";
import CreateTicket from "@/pages/protected/pages/tickets/(pages)/create/CreateTicket";
import DetailsPage from "@/pages/protected/pages/tickets/(pages)/details/DetailsPage";

// ---- RESTAURANT ----
import RestaurantPage from "@/pages/protected/pages/restaurant/RestaurantPage";

// ---- PRODUCTS ----
import ProductsPage from "@/pages/protected/pages/products/ProductsPage";

// ---- CUSTOMERS ----
import ProvidersPage from "@/pages/protected/pages/providers/ProvidersPage";

// ---- PROVIDERS ----
import CustomersPage from "@/pages/protected/pages/customers/CustomersPage";

// ---- SETTINGS ----
import SettingsPage from "@/pages/protected/pages/settings/SettingsPage";
import HeadquartersPage from "@/pages/protected/pages/settings/pages/headquarters/HeadquartersPage";
import TablesPage from "@/pages/protected/pages/settings/pages/tables/TablesPage";
import GeneralPage from "@/pages/protected/pages/settings/pages/general/GeneralPage";

export default function AppRouting() {
  return (
    <Routes>
      <Route element={<LayoutAuth />}>
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />
        <Route path="/auth/reset-password" element={<ResetPassword />} />
      </Route>
      <Route element={<LayoutProtected />}>
        <Route path="/app" element={<DashboardPage />} />

        <Route path="/app/tickets" element={<TicketsPage />} />
        <Route path="/app/tickets/create" element={<CreateTicket />} />
        <Route path="/app/tickets/:id" element={<DetailsPage />} />

        <Route path="/app/restaurant" element={<RestaurantPage />} />

        <Route path="/app/products" element={<ProductsPage />} />

        <Route path="/app/providers" element={<ProvidersPage />} />

        <Route path="/app/customers" element={<CustomersPage />} />
        <Route element={<SettingsPage />}>
          <Route path="/app/settings" element={<GeneralPage />} />
          <Route
            path="/app/settings/headquarters"
            element={<HeadquartersPage />}
          />
          <Route path="/app/settings/tables" element={<TablesPage />} />
        </Route>
      </Route>
    </Routes>
  );
}
