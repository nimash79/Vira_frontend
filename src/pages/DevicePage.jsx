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

const DevicePage = () => {
  const { t, i18n } = useTranslation();

  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [menuOldPassword, setMenuOldPassword] = useState();
  const [menuNewPassword, setMenuNewPassword] = useState();
  const [smsOldPassword, setSmsOldPassword] = useState();
  const [smsNewPassword, setSmsNewPassword] = useState();
  const [systemMode, setSystemMode] = useState(1);
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
  const [doubleSecureStatus, setDoubleSecureStatus] = useState(false);
  const [doubleSecure, setDoubleSecure] = useState(15);
  const [doubleSecureOptions, setDoubleSecureOptions] = useState([
    { value: 15, text: t("devicePage:second_number", { number: 15 }) },
    { value: 30, text: t("devicePage:second_number", { number: 30 }) },
    { value: 45, text: t("devicePage:second_number", { number: 45 }) },
  ]);

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
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <CustomButton
            text={t("common:save")}
            className="custom-save-accordion"
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
            />
            <CustomButton
              text={t("devicePage:siren")}
              style={{ flexBasis: "32%" }}
            />
            <CustomButton
              text={t("devicePage:ding_dong")}
              style={{ flexBasis: "32%" }}
            />
            <CustomButton
              text={t("devicePage:tcall")}
              style={{ flexBasis: "32%" }}
            />
            <CustomButton
              text={t("devicePage:gcall")}
              style={{ flexBasis: "32%" }}
            />
            <CustomButton
              text={t("devicePage:sms")}
              style={{ flexBasis: "32%" }}
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
          />
        </div>
      </details>
    </div>
  );
};

export default DevicePage;
