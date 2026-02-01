import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import ArrowRightIcon from "../components/icons/ArrowRightIcon";
import CalendarIcon from "../components/icons/CalendarIcon";
import PasswordIcon from "./../components/icons/PasswordIcon";
import AlarmIcon from "../components/icons/AlarmIcon";
import GsmIcon from "./../components/icons/GsmIcon";
import PhoneIcon from "./../components/icons/PhoneIcon";
import ZoneIcon from "./../components/icons/ZoneIcon";
import OutputIcon from "../components/icons/OutputIcon";
import PowerIcon from "./../components/icons/PowerIcon";
import MenuPasswordModal from "../components/modals/MenuPasswordModal";
import SmsPasswordModal from "../components/modals/SmsPasswordModal";
import ArrowLeftIcon from "./../components/icons/ArrowLeftIcon";
import SmsIcon from "./../components/icons/SmsIcon";
import WifiIcon from "./../components/icons/WifiIcon";

const HomePage = () => {
  const [sendMethod, setSendMethod] = useState("wifi");
  const [menuPasswordModal, setMenuPasswordModal] = useState(false);
  const [smsPasswordModal, setSmsPasswordModal] = useState(false);

  const { t, i18n } = useTranslation();

  const onSubmitMenuPassword = (oldPassword, newPassword) => {
    console.log(oldPassword, newPassword);
  };
  const onSubmitSmsPassword = (oldPassword, newPassword) => {
    console.log(oldPassword, newPassword);
  };
  return (
    <div className="settings">
      <MenuPasswordModal
        isOpen={menuPasswordModal}
        onClose={() => setMenuPasswordModal(false)}
        onSubmit={onSubmitMenuPassword}
      />
      <SmsPasswordModal
        isOpen={smsPasswordModal}
        onClose={() => setSmsPasswordModal(false)}
        onSubmit={onSubmitSmsPassword}
      />
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
            <p style={{ margin: 0 }}>{t("homePage:en")}</p>
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
            <p style={{ margin: 0 }}>{t("homePage:fa")}</p>
          </div>
        </div>
        <div className="dual-buttons">
          <div
            className={
              sendMethod === "wifi" ? "dual-button active" : "dual-button"
            }
            onClick={() => setSendMethod("wifi")}
          >
            <WifiIcon active={sendMethod === "wifi"} />
            <p>{t("homePage:wifi")}</p>
          </div>
          <div
            className={
              sendMethod === "sms" ? "dual-button active" : "dual-button"
            }
            onClick={() => setSendMethod("sms")}
          >
            <SmsIcon active={sendMethod === "sms"} />
            <p>{t("homePage:sms")}</p>
          </div>
        </div>
      </div>
      <div className="buttons">
        <Link to={"/time-settings"} className="button">
          <CalendarIcon />
          <p className="button-text">{t("homePage:time_settings")}</p>
          {i18n.resolvedLanguage === "en" ? (
            <ArrowRightIcon className="button-arrow" />
          ) : (
            <ArrowLeftIcon className="button-arrow" />
          )}
        </Link>
        <div className="button-separator"></div>
        <Link to={"/zone-settings"} className="button">
          <ZoneIcon />
          <p className="button-text">{t("homePage:zone_settings")}</p>
          {i18n.resolvedLanguage === "en" ? (
            <ArrowRightIcon className="button-arrow" />
          ) : (
            <ArrowLeftIcon className="button-arrow" />
          )}
        </Link>
        <div className="button-separator"></div>
        <Link to={"/zone-state"} className="button">
          <ZoneIcon />
          <p className="button-text">{t("homePage:zone_state")}</p>
          {i18n.resolvedLanguage === "en" ? (
            <ArrowRightIcon className="button-arrow" />
          ) : (
            <ArrowLeftIcon className="button-arrow" />
          )}
        </Link>
        <div className="button-separator"></div>
        <Link to={"/time-settings"} className="button">
          <OutputIcon />
          <p className="button-text">{t("homePage:output_settings")}</p>
          {i18n.resolvedLanguage === "en" ? (
            <ArrowRightIcon className="button-arrow" />
          ) : (
            <ArrowLeftIcon className="button-arrow" />
          )}
        </Link>
        <div className="button-separator"></div>
        <Link to={"/time-settings"} className="button">
          <AlarmIcon />
          <p className="button-text">{t("homePage:alarm_period")}</p>
          {i18n.resolvedLanguage === "en" ? (
            <ArrowRightIcon className="button-arrow" />
          ) : (
            <ArrowLeftIcon className="button-arrow" />
          )}
        </Link>
        <div className="button-separator"></div>
        <Link to={"/time-settings"} className="button">
          <PowerIcon />
          <p className="button-text">{t("homePage:system_mode")}</p>
          {i18n.resolvedLanguage === "en" ? (
            <ArrowRightIcon className="button-arrow" />
          ) : (
            <ArrowLeftIcon className="button-arrow" />
          )}
        </Link>
        <div className="button-separator"></div>
        <Link to={"/time-settings"} className="button">
          <PhoneIcon />
          <p className="button-text">{t("homePage:tell_settings")}</p>
          {i18n.resolvedLanguage === "en" ? (
            <ArrowRightIcon className="button-arrow" />
          ) : (
            <ArrowLeftIcon className="button-arrow" />
          )}
        </Link>
      </div>
      <div className="buttons">
        <Link to={"/my-devices"} className="button">
          <GsmIcon />
          <p className="button-text">{t("homePage:gsm_settings")}</p>
          {i18n.resolvedLanguage === "en" ? (
            <ArrowRightIcon className="button-arrow" />
          ) : (
            <ArrowLeftIcon className="button-arrow" />
          )}
        </Link>
        <div className="button-separator"></div>
        <Link to={"/gsm-control"} className="button">
          <GsmIcon />
          <p className="button-text">{t("homePage:gsm_number_control")}</p>
          {i18n.resolvedLanguage === "en" ? (
            <ArrowRightIcon className="button-arrow" />
          ) : (
            <ArrowLeftIcon className="button-arrow" />
          )}
        </Link>
      </div>
      <div className="buttons" style={{ marginBottom: 24 }}>
        <div className="button" onClick={() => setMenuPasswordModal(true)}>
          <PasswordIcon />
          <p className="button-text">{t("homePage:change_menu_password")}</p>
          {i18n.resolvedLanguage === "en" ? (
            <ArrowRightIcon className="button-arrow" />
          ) : (
            <ArrowLeftIcon className="button-arrow" />
          )}
        </div>
        <div className="button-separator"></div>
        <div className="button" onClick={() => setSmsPasswordModal(true)}>
          <PasswordIcon />
          <p className="button-text">{t("homePage:change_sms_password")}</p>
          {i18n.resolvedLanguage === "en" ? (
            <ArrowRightIcon className="button-arrow" />
          ) : (
            <ArrowLeftIcon className="button-arrow" />
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
