import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { useLocation } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { ToastContainer } from "react-toastify";
import { useTranslation } from "react-i18next";

import HomePage from "./pages/HomePage";
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
          <Route path="/" Component={HomePage} />
          <Route path="/device" Component={DevicePage} />
          <Route path="/contacts" Component={ContactsPage} />
          <Route path="/zone" Component={ZonePage} />
          {/* End Main Pages */}
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
