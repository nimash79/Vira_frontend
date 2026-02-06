import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, Outlet, useLocation } from "react-router-dom";

import SmsIcon from "./../components/icons/SmsIcon";
import WifiIcon from "./../components/icons/WifiIcon";
import PhoneIcon from "../components/icons/PhoneIcon";
import DeviceIcon from "./../components/icons/DeviceIcon";
import ZoneIcon from "../components/icons/ZoneIcon";
import PowerIcon from "../components/icons/PowerIcon";
import { useDispatch, useSelector } from "react-redux";
import { changeSendMethod } from "../reducers/sendMethodReducer";
import SwipeNavigator from "./SwipeNavigator";
import { AnimatePresence } from "framer-motion";
import AnimatedOutlet from "./AnimatedOutlet";

const MainLayout = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const sendMethod = useSelector((state) => state.sendMethod);
  const dispatch = useDispatch();

  return (
    <SwipeNavigator>
      {(direction) => (
        <div className="app-container">
          <div className="main-layout">
            <div className="header">
              <div></div>
              <p className="header-title">{t("common:app_name")}</p>
              <div></div>
            </div>
            <div className="header">
              <div className="dual-buttons">
                <div
                  className={
                    i18n.resolvedLanguage === "en"
                      ? "dual-button active"
                      : "dual-button"
                  }
                  style={{ padding: "4px 12px" }}
                  onClick={() => i18n.changeLanguage("en")}
                >
                  <p style={{ margin: 0 }}>{t("common:en")}</p>
                </div>
                <div
                  className={
                    i18n.resolvedLanguage === "fa"
                      ? "dual-button active"
                      : "dual-button"
                  }
                  style={{ padding: "4px 12px" }}
                  onClick={() => i18n.changeLanguage("fa")}
                >
                  <p style={{ margin: 0 }}>{t("common:fa")}</p>
                </div>
              </div>
              <div className="dual-buttons">
                <div
                  className={
                    sendMethod === "wifi" ? "dual-button active" : "dual-button"
                  }
                  onClick={() => dispatch(changeSendMethod("wifi"))}
                >
                  <WifiIcon active={sendMethod === "wifi"} />
                  <p>{t("common:wifi")}</p>
                </div>
                <div
                  className={
                    sendMethod === "sms" ? "dual-button active" : "dual-button"
                  }
                  onClick={() => dispatch(changeSendMethod("sms"))}
                >
                  <SmsIcon active={sendMethod === "sms"} />
                  <p>{t("common:sms")}</p>
                </div>
              </div>
            </div>
              <AnimatedOutlet direction={direction}>
                <Outlet />
              </AnimatedOutlet>
          </div>
          <div className="menu">
            <Link
              to={"/"}
              className={
                location.pathname === "/" ? "menu-item active" : "menu-item"
              }
            >
              <PowerIcon
                width={24}
                height={24}
                color={location.pathname === "/" ? "#7b61ff" : "#868686"}
              />
              <div className="label">{t("common:control")}</div>
            </Link>
            <Link
              to={"/contacts"}
              className={
                location.pathname.startsWith("/contacts")
                  ? "menu-item active"
                  : "menu-item"
              }
            >
              <PhoneIcon
                width={24}
                height={24}
                color={
                  location.pathname.startsWith("/contacts")
                    ? "#7b61ff"
                    : "#868686"
                }
              />
              <div className="label">{t("common:phone_settings")}</div>
            </Link>
            <Link
              to={"/device"}
              className={
                location.pathname.startsWith("/device")
                  ? "menu-item active"
                  : "menu-item"
              }
            >
              <DeviceIcon
                width={24}
                height={24}
                color={
                  location.pathname.startsWith("/device")
                    ? "#7b61ff"
                    : "#868686"
                }
              />
              <div className="label">{t("common:device_settings")}</div>
            </Link>
            <Link
              to={"/zone"}
              className={
                location.pathname.startsWith("/zone")
                  ? "menu-item active"
                  : "menu-item"
              }
            >
              <ZoneIcon
                width={24}
                height={24}
                color={
                  location.pathname.startsWith("/zone") ? "#7b61ff" : "#868686"
                }
              />
              <div className="label">{t("common:zone_settings")}</div>
            </Link>
          </div>
        </div>
      )}
    </SwipeNavigator>
  );
};

export default MainLayout;
