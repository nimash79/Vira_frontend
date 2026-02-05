import { useState } from "react";
import { useTranslation } from "react-i18next";

import PowerIcon from "./../components/icons/PowerIcon";
import ArrowDownIcon from "../components/icons/ArrowDownIcon";
import CustomButton from "../components/shared/CustomButton";
import CustomDropdown from "./../components/shared/CustomDropdown";
import LobymanIcon from "./../components/icons/LobymanIcon";
import LockIcon from "./../components/icons/LockIcon";
import UnlockIcon from "./../components/icons/UnlockIcon";
import RefreshIcon from "./../components/icons/RefreshIcon";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { t, i18n } = useTranslation();

  const [deviceStatus1, setDeviceStatus1] = useState(false);
  const [deviceStatus2, setDeviceStatus2] = useState(false);
  const [relayNumber, setRelayNumber] = useState(1);

  const sendMethod = useSelector((state) => state.sendMethod);

  return (
    <div className="home-page">
      <button
        type="button"
        className={"button-icon"}
        style={
          sendMethod == "sms"
            ? { marginTop: 16, opacity: 0.5, cursor: "not-allowed" }
            : { marginTop: 16 }
        }
        onClick={() => console.log("refresh")}
        disabled={sendMethod == "sms"}
      >
        <RefreshIcon width={20} height={20} />
        <span>{t("homePage:refresh")}</span>
      </button>
      <details className="accordion">
        <summary className="title">
          <PowerIcon />
          <span className="accordion-text">{t("homePage:device_status")}</span>
          <ArrowDownIcon className="accordion-arrow" />
        </summary>
        <div className="content">
          <div className="dual-button">
            <button
              type="button"
              className={
                deviceStatus1
                  ? "button-icon button-icon-danger outline"
                  : "button-icon button-icon-danger"
              }
              onClick={() => setDeviceStatus1(false)}
            >
              <LockIcon
                color={deviceStatus1 ? "#7b61ff" : "#f9f9f9"}
                width={20}
                height={20}
              />
              <span>{t("homePage:lock")}</span>
            </button>
            <button
              type="button"
              className={
                deviceStatus1
                  ? "button-icon button-icon-success"
                  : "button-icon button-icon-success outline"
              }
              onClick={() => setDeviceStatus1(true)}
            >
              <UnlockIcon
                color={deviceStatus1 ? "#f9f9f9" : "#7b61ff"}
                width={20}
                height={20}
              />
              <span>{t("homePage:unlock")}</span>
            </button>
          </div>
          <CustomButton
            text={t("common:save")}
            className="custom-save-accordion"
          />
        </div>
      </details>

      <details className="accordion">
        <summary className="title">
          <LobymanIcon />
          <span className="accordion-text">{t("homePage:relays_status")}</span>
          <ArrowDownIcon className="accordion-arrow" />
        </summary>
        <div className="content">
          <CustomDropdown
            value={relayNumber}
            setValue={setRelayNumber}
            options={[
              { text: t("homePage:relay_number", { number: 1 }), value: 1 },
              { text: t("homePage:relay_number", { number: 2 }), value: 2 },
              { text: t("homePage:relay_number", { number: 3 }), value: 3 },
              { text: t("homePage:relay_number", { number: 4 }), value: 4 },
              { text: t("homePage:relay_number", { number: 5 }), value: 5 },
              { text: t("homePage:relay_number", { number: 6 }), value: 6 },
              { text: t("homePage:relay_number", { number: 7 }), value: 7 },
              { text: t("homePage:relay_number", { number: 8 }), value: 8 },
              { text: t("homePage:relay_number", { number: 9 }), value: 9 },
              { text: t("homePage:relay_number", { number: 10 }), value: 10 },
            ]}
            containerStyle={{ width: "100%", marginBottom: 16 }}
          />
          <div className="dual-button">
            <button
              type="button"
              className={
                deviceStatus2
                  ? "button-icon button-icon-danger outline"
                  : "button-icon button-icon-danger"
              }
              onClick={() => setDeviceStatus2(false)}
            >
              <LockIcon
                color={deviceStatus2 ? "#7b61ff" : "#f9f9f9"}
                width={20}
                height={20}
              />
              <span>{t("homePage:lock")}</span>
            </button>
            <button
              type="button"
              className={
                deviceStatus2
                  ? "button-icon button-icon-success"
                  : "button-icon outline button-icon-success"
              }
              onClick={() => setDeviceStatus2(true)}
            >
              <UnlockIcon
                color={deviceStatus2 ? "#f9f9f9" : "#7b61ff"}
                width={20}
                height={20}
              />
              <span>{t("homePage:unlock")}</span>
            </button>
          </div>
          <CustomButton
            text={t("common:save")}
            className="custom-save-accordion"
          />
        </div>
      </details>
    </div>
  );
};

export default HomePage;
