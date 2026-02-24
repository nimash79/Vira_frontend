import { useEffect, useState } from "react";
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
import { createCommand, getAlarmNumber } from "../utils/helper";
import { OPCODE } from "../utils/constants";
import PhoneIcon from "../components/icons/PhoneIcon";
import CustomInput from "../components/shared/CustomInput";
import PasswordIcon from "./../components/icons/PasswordIcon";
import { notif_error, notif_success } from './../utils/toast';

const HomePage = () => {
  const { t, i18n } = useTranslation();

  const STORAGE_KEYS = {
    alarmNumber: "alarm_number",
    alarmPassword: "alarm_password",
    deviceStatus: "home_device_status",
    relayStatus: "home_relay_status",
    relayNumber: "home_relay_number",
  };

  const [deviceStatus, setDeviceStatus] = useState(false);
  const [relayStatus, setRelayStatus] = useState(false);
  const [relayNumber, setRelayNumber] = useState(1);
  const [alarmNumber, setAlarmNumber] = useState();
  const [password, setPassword] = useState();

  const sendMethod = useSelector((state) => state.sendMethod);

  useEffect(() => {
    let alarm_number = localStorage.getItem(STORAGE_KEYS.alarmNumber);
    if (!alarm_number) {
      alarm_number = "123456789";
      localStorage.setItem(STORAGE_KEYS.alarmNumber, alarm_number);
    }
    setAlarmNumber(alarm_number);

    let alarm_password = localStorage.getItem(STORAGE_KEYS.alarmPassword);
    if (!alarm_password) {
      alarm_password = "1234";
      localStorage.setItem(STORAGE_KEYS.alarmPassword, alarm_password);
    }
    setPassword(alarm_password);

    const savedDeviceStatus = localStorage.getItem(STORAGE_KEYS.deviceStatus);
    if (savedDeviceStatus !== null) {
      setDeviceStatus(savedDeviceStatus === "true");
    }

    const savedRelayStatus = localStorage.getItem(STORAGE_KEYS.relayStatus);
    if (savedRelayStatus !== null) {
      setRelayStatus(savedRelayStatus === "true");
    }

    const savedRelayNumber = localStorage.getItem(STORAGE_KEYS.relayNumber);
    if (savedRelayNumber !== null) {
      setRelayNumber(Number(savedRelayNumber));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.deviceStatus, String(deviceStatus));
  }, [deviceStatus]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.relayStatus, String(relayStatus));
  }, [relayStatus]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.relayNumber, String(relayNumber));
  }, [relayNumber]);

  const saveDeviceStatus = () => {
    const vars = [deviceStatus ? 0 : 1];
    const command = createCommand(OPCODE.DEVICE_STATUS, vars);
    console.log(`sms:${getAlarmNumber()}?body=${encodeURIComponent(command)}`);
    window.location.href = `sms:${getAlarmNumber()}?body=${encodeURIComponent(command)}`;
  };

  const saveRelayStatus = () => {
    const vars = [relayNumber, relayStatus ? 0 : 1];
    const command = createCommand(OPCODE.RELAY_STATUS, vars);
    window.location.href = `sms:${getAlarmNumber()}?body=${encodeURIComponent(command)}`;
  };

  const saveAlarmNumber = () => {
    if (!alarmNumber || !alarmNumber.length) {
      notif_error(t("homePage:validation"));
      return;
    }
    localStorage.setItem(STORAGE_KEYS.alarmNumber, alarmNumber);
    notif_success(t("common:success"));
  };

  const saveAlarmPassword = () => {
    if (!password || !password.length) {
      notif_error(t("homePage:validation"));
      return;
    }
    localStorage.setItem(STORAGE_KEYS.alarmPassword, password);
    notif_success(t("common:success"));
  };

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
          <div className="lock-toggle-container">
            <button
              type="button"
              className={`lock-toggle ${deviceStatus ? "unlocked" : "locked"}`}
              onClick={() => setDeviceStatus((prev) => !prev)}
            >
              <span className="lock-toggle-core">
                {deviceStatus ? (
                  <UnlockIcon color="#1f7a48" width={34} height={34} />
                ) : (
                  <LockIcon color="#a72a2a" width={34} height={34} />
                )}
              </span>
              <span className="lock-toggle-text">
                {deviceStatus ? t("homePage:unlock") : t("homePage:lock")}
              </span>
            </button>
          </div>
          <CustomButton
            text={t("common:save")}
            className="custom-save-accordion"
            onClick={saveDeviceStatus}
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
                relayStatus
                  ? "button-icon button-icon-danger outline"
                  : "button-icon button-icon-danger"
              }
              onClick={() => setRelayStatus(false)}
            >
              <LockIcon
                color={relayStatus ? "#7b61ff" : "#f9f9f9"}
                width={20}
                height={20}
              />
              <span>{t("homePage:off")}</span>
            </button>
            <button
              type="button"
              className={
                relayStatus
                  ? "button-icon button-icon-success"
                  : "button-icon outline button-icon-success"
              }
              onClick={() => setRelayStatus(true)}
            >
              <UnlockIcon
                color={relayStatus ? "#f9f9f9" : "#7b61ff"}
                width={20}
                height={20}
              />
              <span>{t("homePage:on")}</span>
            </button>
          </div>
          <CustomButton
            text={t("common:save")}
            className="custom-save-accordion"
            onClick={saveRelayStatus}
          />
        </div>
      </details>

      <details className="accordion">
        <summary className="title">
          <PhoneIcon />
          <span className="accordion-text">{t("homePage:alarm_number")}</span>
          <ArrowDownIcon className="accordion-arrow" />
        </summary>

        <div className="content">
          <CustomInput
            placeholder={t("homePage:phone_placeholder")}
            type="number"
            value={alarmNumber}
            onChange={(e) => setAlarmNumber(e.target.value)}
          />
          <CustomButton
            text={t("common:save")}
            className="custom-save-accordion"
            onClick={saveAlarmNumber}
          />
        </div>
      </details>

      <details className="accordion">
        <summary className="title">
          <PasswordIcon />
          <span className="accordion-text">{t("homePage:alarm_password")}</span>
          <ArrowDownIcon className="accordion-arrow" />
        </summary>

        <div className="content">
          <CustomInput
            placeholder={t("homePage:password_placeholder")}
            type="number"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <CustomButton
            text={t("common:save")}
            className="custom-save-accordion"
            onClick={saveAlarmPassword}
          />
        </div>
      </details>
    </div>
  );
};

export default HomePage;
