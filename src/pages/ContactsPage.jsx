import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import CustomButton from "./../components/shared/CustomButton";
import SmsIcon from "./../components/icons/SmsIcon";
import ArrowDownIcon from "./../components/icons/ArrowDownIcon";
import CustomDropdown from "../components/shared/CustomDropdown";
import CustomInput from "./../components/shared/CustomInput";
import PhoneIcon from "./../components/icons/PhoneIcon";
import ListIcon from "./../components/icons/ListIcon";
import SettingsIcon from "../components/icons/SettingsIcon";
import LanguageIcon from "./../components/icons/LanguageIcon";
import { binToNumber, createCommand, getAlarmNumber } from "../utils/helper";
import { OPCODE } from "../utils/constants";
import { useSelector } from "react-redux";

const ContactsPage = () => {
  const [smsLanguage, setSmsLanguage] = useState("fa");
  const [phoneNumber1, setPhoneNumber1] = useState(1);
  const [mobileNumber, setMobileNumber] = useState("");
  const [phoneNumber2, setPhoneNumber2] = useState(1);
  const [phoneNumbers, setPhoneNumbers] = useState([
    "9309167845",
    "9309167844",
    "9309168745",
    "9309168080",
    "9309169090",
    "9309167845",
    "9309167844",
    "9309168745",
    "9309168080",
    "9309169090",
  ]);
  const [phoneTypes, setPhoneTypes] = useState(["manager"]);

  const sendMethod = useSelector((state) => state.sendMethod);

  const { t, i18n } = useTranslation();

  const addOrRemovePhoneTypes = (value) => {
    setPhoneTypes((types) => {
      if (types.includes(value)) return types.filter((t) => t !== value);
      else {
        const list = [...types];
        list.push(value);
        return list;
      }
    });
  };

  const saveSmsLanguage = () => {
    const vars = [smsLanguage == "en" ? 1 : 0];
    const command = createCommand(OPCODE.SMS_LANGUAGE, vars);
    window.location.href = `sms:${getAlarmNumber()}?body=${encodeURIComponent(command)}`;
  };

  const savePhoneNumbers = () => {
    const vars = [phoneNumber1 - 1, mobileNumber];
    const command = createCommand(OPCODE.PHONES, vars);
    window.location.href = `sms:${getAlarmNumber()}?body=${encodeURIComponent(command)}`;
  };

  const savePhoneNumberSettings = () => {
    const isManager = phoneTypes.includes("manager") ? "1" : "0";
    const isReport = phoneTypes.includes("report") ? "1" : "0";
    const isGuard = phoneTypes.includes("guard") ? "1" : "0";
    const isLobyman = phoneTypes.includes("lobyman") ? "1" : "0";
    const hex = binToNumber(isLobyman + isGuard + isReport + isManager);
    const vars = [phoneNumber2 - 1, hex];
    const command = createCommand(OPCODE.PHONES_SETTINGS, vars);
    window.location.href = `sms:${getAlarmNumber()}?body=${encodeURIComponent(command)}`;
  };

  return (
    <div className="contacts">
      <details className="accordion">
        <summary className="title">
          <LanguageIcon />
          <span className="accordion-text">
            {t("contactsPage:sms_language")}
          </span>
          <ArrowDownIcon className="accordion-arrow" />
        </summary>

        <div className="content">
          <div className="dual-button">
            <CustomButton
              text={t("contactsPage:fa")}
              outline={smsLanguage != "fa"}
              onClick={() => setSmsLanguage("fa")}
            />
            <CustomButton
              text={t("contactsPage:en")}
              outline={smsLanguage != "en"}
              onClick={() => setSmsLanguage("en")}
            />
          </div>
          <CustomButton
            text={t("common:save")}
            className="custom-save-accordion"
            onClick={saveSmsLanguage}
          />
        </div>
      </details>

      <details className="accordion">
        <summary className="title">
          <PhoneIcon />
          <span className="accordion-text">{t("contactsPage:phones")}</span>
          <ArrowDownIcon className="accordion-arrow" />
        </summary>

        <div className="content">
          <div className="enter-phones">
            <CustomDropdown
              value={phoneNumber1}
              setValue={setPhoneNumber1}
              options={[
                {
                  text: "1",
                  value: 1,
                },
                {
                  text: "2",
                  value: 2,
                },
                {
                  text: "3",
                  value: 3,
                },
                {
                  text: "4",
                  value: 4,
                },
                {
                  text: "5",
                  value: 5,
                },
              ]}
            />
            <CustomInput
              placeholder={t("contactsPage:phone_placeholder")}
              containerStyle={{ flex: 1, marginInlineStart: 16 }}
              type="number"
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </div>
          <CustomButton
            text={t("common:save")}
            className="custom-save-accordion"
            onClick={savePhoneNumbers}
          />
        </div>
      </details>

      <details className="accordion">
        <summary className="title">
          <SettingsIcon />
          <span className="accordion-text">
            {t("contactsPage:phones_settings")}
          </span>
          <ArrowDownIcon className="accordion-arrow" />
        </summary>

        <div className="content">
          <div className="enter-phones">
            <CustomDropdown
              value={phoneNumber2}
              setValue={setPhoneNumber2}
              options={[
                {
                  text: t("contactsPage:phone_number", { number: 1 }),
                  value: 1,
                },
                {
                  text: t("contactsPage:phone_number", { number: 2 }),
                  value: 2,
                },
                {
                  text: t("contactsPage:phone_number", { number: 3 }),
                  value: 3,
                },
                {
                  text: t("contactsPage:phone_number", { number: 4 }),
                  value: 4,
                },
                {
                  text: t("contactsPage:phone_number", { number: 5 }),
                  value: 5,
                },
              ]}
              containerStyle={{ width: "100%" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              rowGap: 16,
              justifyContent: "space-between",
              marginBottom: 16,
              marginTop: 16,
            }}
          >
            <CustomButton
              text={t("contactsPage:manager")}
              style={{ flexBasis: "45%" }}
              outline={!phoneTypes.includes("manager")}
              onClick={() => addOrRemovePhoneTypes("manager")}
            />
            <CustomButton
              text={t("contactsPage:report")}
              style={{ flexBasis: "45%" }}
              outline={!phoneTypes.includes("report")}
              onClick={() => addOrRemovePhoneTypes("report")}
            />
            <CustomButton
              text={t("contactsPage:guard")}
              style={{ flexBasis: "45%" }}
              outline={!phoneTypes.includes("guard")}
              onClick={() => addOrRemovePhoneTypes("guard")}
            />
            <CustomButton
              text={t("contactsPage:lobyman")}
              style={{ flexBasis: "45%" }}
              outline={!phoneTypes.includes("lobyman")}
              onClick={() => addOrRemovePhoneTypes("lobyman")}
            />
          </div>
          <CustomButton
            text={t("common:save")}
            className="custom-save-accordion"
            onClick={savePhoneNumberSettings}
          />
        </div>
      </details>

      <details
        className="accordion"
        style={
          sendMethod == "sms"
            ? {
                opacity: 0.5,
                cursor: "not-allowed",
                pointerEvents: "none",
                userSelect: "none",
              }
            : {}
        }
      >
        <summary className="title">
          <ListIcon />
          <span className="accordion-text">
            {t("contactsPage:phones_list")}
          </span>
          <ArrowDownIcon className="accordion-arrow" />
        </summary>

        <div className="content">
          {phoneNumbers.map((item, index) => (
            <div className="list-item">
              {/* <PhoneIcon /> */}
              <span>{index + 1}.</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </details>
    </div>
  );
};

export default ContactsPage;
