import { BrowserRouter, Route, Routes } from "react-router";
import { useLocation } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { ToastContainer } from "react-toastify";
import { useTranslation } from "react-i18next";

import HomePage from "./pages/HomePage";
import Login from "./pages/authentication/Login";
import Logout from "./pages/authentication/Logout";
import Register from "./pages/authentication/Register";
import VerificationPage from "./pages/authentication/VerificationPage";
import ForgetPasswordPage from "./pages/authentication/ForgetPasswordPage";
import ResetPasswordPage from "./pages/authentication/ResetPasswordPage";
import GsmControlPage from "./pages/settings/GsmControlPage";
import ZoneSettingsPage from "./pages/settings/ZoneSettingsPage";
import RemoteSettingsPage from "./pages/settings/RemoteSettingsPage";
import ZoneStatePage from "./pages/settings/ZoneStatePage";
import WiredZoneSettingsPage from "./pages/settings/WiredZoneSettingsPage";
import WirelessZoneSettingsPage from "./pages/settings/WirelessZoneSettingsPage";
import i18n from "./localization/i18n";
import { useEffect } from "react";
import DevicePage from "./pages/DevicePage";
import ContactsPage from "./pages/ContactsPage";
import ZonePage from "./pages/ZonePage";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route element={<MainLayout />}>
          {/* Main Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/device" Component={DevicePage} />
          <Route path="/contacts" Component={ContactsPage} />
          <Route path="/zone" Component={ZonePage} />
          {/* End Main Pages */}
          <Route path="/register" Component={Register} />
          <Route path="/verification" Component={VerificationPage} />
          <Route path="/forget-password" Component={ForgetPasswordPage} />
          <Route path="/reset-password" Component={ResetPasswordPage} />
          <Route path="/login" Component={Login} />
          <Route path="/logout" Component={Logout} />
          {/* Settings Pages */}
          <Route path="/gsm-control" Component={GsmControlPage} />
          <Route path="/zone-settings" Component={ZoneSettingsPage} />
          <Route path="/wiredzone-settings" Component={WiredZoneSettingsPage} />
          <Route
            path="/wirelesszone-settings"
            Component={WirelessZoneSettingsPage}
          />
          <Route path="/zone-state" Component={ZoneStatePage} />
          <Route path="/remote-settings" Component={RemoteSettingsPage} />
          {/* End Settings Pages */}
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const RTL_LANGS = new Set(["ar", "fa", "he", "ur"]);
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = i18n.resolvedLanguage || i18n.language;
    const base = lang.split("-")[0];

    document.documentElement.lang = lang;

    const isRtl = RTL_LANGS.has(base);
    document.documentElement.dir = isRtl ? "rtl" : "ltr";

    // optional: class for easy CSS targeting
    document.documentElement.classList.remove("lang-en", "lang-fa");
    document.documentElement.classList.add(`lang-${base}`);
  }, [i18n.resolvedLanguage, i18n.language]);

  return (
    <BrowserRouter>
      <AnimatedRoutes />
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
