import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import PasswordIcon from "./../components/icons/PasswordIcon";
import AlarmIcon from "../components/icons/AlarmIcon";
import PowerIcon from "./../components/icons/PowerIcon";
import DoubleSecureIcon from "./../components/icons/DoubleSecureIcon";
import TestIcon from "./../components/icons/TestIcon";
import ArrowDownIcon from "./../components/icons/ArrowDownIcon";
import CustomDropdown from "./../components/shared/CustomDropdown";
import TimerIcon from "./../components/icons/TimerIcon";
import CustomInput from "../components/shared/CustomInput";
import CustomButton from "./../components/shared/CustomButton";
import CustomCalendarInput from "./../components/shared/CustomCalendarInput";
import CustomTimeInput from './../components/shared/CustomTimeInput';
import TimeIcon from "../components/icons/TimeIcon";
import { createCommand, formatTimeToHHmmss, getAlarmNumber, toMiladiYYMMDD } from "../utils/helper";
import { OPCODE } from "../utils/constants";

const DevicePage = () => {
  const { t, i18n } = useTranslation();

  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [menuOldPassword, setMenuOldPassword] = useState();
  const [menuNewPassword, setMenuNewPassword] = useState();
  const [smsOldPassword, setSmsOldPassword] = useState();
  const [smsNewPassword, setSmsNewPassword] = useState();
  const [systemModes, setSystemModes] = useState([
    { value: 1, text: "1" },
    { value: 2, text: "2" },
  ]);
  const [alarmPeriod, setAlarmPeriod] = useState(1);
  const [alarmPeriodOptions, setAlarmPeriodOptions] = useState([
    { value: 1, text: t("devicePage:minute_number", { number: 1 }) },
    { value: 2, text: t("devicePage:minute_number", { number: 2 }) },
    { value: 3, text: t("devicePage:minute_number", { number: 3 }) },
    { value: 4, text: t("devicePage:minute_number", { number: 4 }) },
    { value: 5, text: t("devicePage:minute_number", { number: 5 }) },
  ]);
  const [alarmStatus, setAlarmStatus] = useState(false);
  const [systemMode, setSystemMode] = useState(1);
  const [doubleSecureStatus, setDoubleSecureStatus] = useState(false);
  const [doubleSecure, setDoubleSecure] = useState(15);
  const [doubleSecureOptions, setDoubleSecureOptions] = useState([
    { value: 15, text: t("devicePage:second_number", { number: 15 }) },
    { value: 30, text: t("devicePage:second_number", { number: 30 }) },
    { value: 45, text: t("devicePage:second_number", { number: 45 }) },
  ]);

  const saveTimeSettings = () => {
    const vars = [formatTimeToHHmmss(time), toMiladiYYMMDD(date?.format?.("YYYY/MM/DD"))]
    const command = createCommand(OPCODE.TIME_SETTINGS, vars);
    window.location.href = `sms:${getAlarmNumber()}?body=${encodeURIComponent(command)}`;
  }

  const saveAlarmPeriod = () => {
    const vars = [alarmPeriod]
    const command = createCommand(OPCODE.ALARM_PERIOD, vars);
    window.location.href = `sms:${getAlarmNumber()}?body=${encodeURIComponent(command)}`;
  }

  const saveAlarmStatus = () => {
    const vars = [alarmStatus ? 1 : 0]
    const command = createCommand(OPCODE.ALARM_STATUS, vars);
    window.location.href = `sms:${getAlarmNumber()}?body=${encodeURIComponent(command)}`;
  }

  const saveSystemMode = () => {
    const vars = [systemMode - 1]
    const command = createCommand(OPCODE.SYSTEM_MODE, vars);
    window.location.href = `sms:${getAlarmNumber()}?body=${encodeURIComponent(command)}`;
  }

  const saveTest = (type) => {
    const vars = [type]
    const command = createCommand(OPCODE.TEST, vars);
    window.location.href = `sms:${getAlarmNumber()}?body=${encodeURIComponent(command)}`;
  }

  const saveDoubleSecure = () => {
    const vars = [doubleSecureStatus ? 1 : 0, doubleSecure]
    const command = createCommand(OPCODE.DOUBLE_SECURE, vars);
    window.location.href = `sms:${getAlarmNumber()}?body=${encodeURIComponent(command)}`;
  }

  const saveMenuPassword = () => {
    const vars = [menuOldPassword, menuNewPassword]
    const command = createCommand(OPCODE.PASSWORD_MENU, vars);
    window.location.href = `sms:${getAlarmNumber()}?body=${encodeURIComponent(command)}`;
  }

  const saveSmsPassword = () => {
    const vars = [smsOldPassword, smsNewPassword]
    const command = createCommand(OPCODE.PASSWORD_SMS, vars);
    window.location.href = `sms:${getAlarmNumber()}?body=${encodeURIComponent(command)}`;
  }

  return (
    <div className="device-page">
      <details className="accordion">
        <summary className="title">
          <TimerIcon />
          <span className="accordion-text">
            {t("devicePage:time_settings")}
          </span>
          <ArrowDownIcon className="accordion-arrow" />
        </summary>
        <div className="content">
          <CustomCalendarInput
            value={date}
            onChange={setDate}
            containerStyle={{ marginBottom: 16, paddingInlineEnd: 16 }}
          />
          <CustomTimeInput
            icon={<TimeIcon />}
            step={1}
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <CustomButton
            text={t("common:save")}
            className="custom-save-accordion"
            onClick={saveTimeSettings}
          />
        </div>
      </details>
      <details className="accordion">
        <summary className="title">
          <AlarmIcon />
          <span className="accordion-text">{t("devicePage:alarm_period")}</span>
          <ArrowDownIcon className="accordion-arrow" />
        </summary>
        <div className="content">
          <CustomDropdown
            value={alarmPeriod}
            setValue={setAlarmPeriod}
            options={alarmPeriodOptions}
            containerStyle={{ width: "100%" }}
          />
          <CustomButton
            text={t("common:save")}
            className="custom-save-accordion"
            onClick={saveAlarmPeriod}
          />
        </div>
      </details>
      <details className="accordion">
        <summary className="title">
          <AlarmIcon />
          <span className="accordion-text">{t("devicePage:alarm_status")}</span>
          <ArrowDownIcon className="accordion-arrow" />
        </summary>
        <div className="content">
          <div className="dual-button">
            <CustomButton
            text={t("devicePage:off")}
            outline={alarmStatus}
            onClick={() => setAlarmStatus(false)}
          />
          <CustomButton
            text={t("devicePage:on")}
            outline={!alarmStatus}
            onClick={() => setAlarmStatus(true)}
          />
          </div>
          <CustomButton
            text={t("common:save")}
            className="custom-save-accordion"
            onClick={saveAlarmStatus}
          />
        </div>
      </details>
      <details className="accordion">
        <summary className="title">
          <PowerIcon />
          <span className="accordion-text">{t("devicePage:system_mode")}</span>
          <ArrowDownIcon className="accordion-arrow" />
        </summary>
        <div className="content">
          <CustomDropdown
            value={systemMode}
            setValue={setSystemMode}
            options={systemModes}
            containerStyle={{ width: "100%" }}
          />
          <CustomButton
            text={t("common:save")}
            className="custom-save-accordion"
            onClick={saveSystemMode}
          />
        </div>
      </details>
      <details className="accordion">
        <summary className="title">
          <TestIcon />
          <span className="accordion-text">{t("devicePage:test")}</span>
          <ArrowDownIcon className="accordion-arrow" />
        </summary>
        <div className="content">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              rowGap: "16px",
            }}
          >
            <CustomButton
              text={t("devicePage:alarm")}
              style={{ flexBasis: "32%" }}
              onClick={() => saveTest(0)}
            />
            <CustomButton
              text={t("devicePage:siren")}
              style={{ flexBasis: "32%" }}
              onClick={() => saveTest(1)}
            />
            <CustomButton
              text={t("devicePage:ding_dong")}
              style={{ flexBasis: "32%" }}
              onClick={() => saveTest(2)}
            />
            <CustomButton
              text={t("devicePage:tcall")}
              style={{ flexBasis: "32%" }}
              onClick={() => saveTest(3)}
            />
            <CustomButton
              text={t("devicePage:gcall")}
              style={{ flexBasis: "32%" }}
              onClick={() => saveTest(4)}
            />
            <CustomButton
              text={t("devicePage:sms")}
              style={{ flexBasis: "32%" }}
              onClick={() => saveTest(5)}
            />
          </div>
        </div>
      </details>
      <details className="accordion">
        <summary className="title">
          <DoubleSecureIcon />
          <span className="accordion-text">
            {t("devicePage:double_secure")}
          </span>
          <ArrowDownIcon className="accordion-arrow" />
        </summary>
        <div className="content">
          <div className="dual-button" style={{ marginBottom: 16 }}>
            <CustomButton
              text={t("devicePage:off")}
              outline={doubleSecureStatus}
              onClick={() => setDoubleSecureStatus(false)}
            />
            <CustomButton
              text={t("devicePage:on")}
              outline={!doubleSecureStatus}
              onClick={() => setDoubleSecureStatus(true)}
            />
          </div>
          <CustomDropdown
            value={doubleSecure}
            setValue={setDoubleSecure}
            options={doubleSecureOptions}
            containerStyle={{ width: "100%" }}
          />
          <CustomButton
            text={t("common:save")}
            className="custom-save-accordion"
            onClick={saveDoubleSecure}
          />
        </div>
      </details>
      <details className="accordion">
        <summary className="title">
          <PasswordIcon />
          <span className="accordion-text">
            {t("devicePage:change_menu_password")}
          </span>
          <ArrowDownIcon className="accordion-arrow" />
        </summary>
        <div className="content">
          <CustomInput
            placeholder={t("devicePage:old_password")}
            onChange={(e) => setMenuOldPassword(e.target.value)}
            containerStyle={{ marginBottom: 16 }}
            type="password"
          />
          <CustomInput
            placeholder={t("devicePage:new_password")}
            onChange={(e) => setMenuNewPassword(e.target.value)}
            type="password"
          />
          <CustomButton
            text={t("common:save")}
            className="custom-save-accordion"
            onClick={saveMenuPassword}
          />
        </div>
      </details>
      <details className="accordion">
        <summary className="title">
          <PasswordIcon />
          <span className="accordion-text">
            {t("devicePage:change_sms_password")}
          </span>
          <ArrowDownIcon className="accordion-arrow" />
        </summary>
        <div className="content">
          <CustomInput
            placeholder={t("devicePage:old_password")}
            onChange={(e) => setSmsOldPassword(e.target.value)}
            containerStyle={{ marginBottom: 16 }}
            type="password"
          />
          <CustomInput
            placeholder={t("devicePage:new_password")}
            onChange={(e) => setSmsNewPassword(e.target.value)}
            type="password"
          />
          <CustomButton
            text={t("common:save")}
            className="custom-save-accordion"
            onClick={saveSmsPassword}
          />
        </div>
      </details>
    </div>
  );
};

export default DevicePage;
