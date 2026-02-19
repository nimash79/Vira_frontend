import { useState } from "react";
import { useTranslation } from "react-i18next";

import ArrowDownIcon from "../components/icons/ArrowDownIcon";
import CustomButton from "../components/shared/CustomButton";
import CustomDropdown from "./../components/shared/CustomDropdown";
import ZoneIcon from "./../components/icons/ZoneIcon";
import SettingsIcon from "./../components/icons/SettingsIcon";
import { OPCODE } from "../utils/constants";
import { binToNumber, createCommand, getAlarmNumber } from "../utils/helper";

const ZonePage = () => {
  const { t } = useTranslation();
  const [zoneNumber1, setZoneNumber1] = useState(1);
  const [zoneNumber2, setZoneNumber2] = useState(1);
  const [zoneType, setZoneType] = useState("fire");
  const [operatinStatus, setOperatingStatus] = useState(false);
  const [outputType, setOutputType] = useState(["ding_dong"]);

  const addOrRemoveOutputType = (value) => {
    setOutputType((types) => {
      if (types.includes(value)) return types.filter((t) => t !== value);
      else {
        const list = [...types];
        list.push(value);
        return list;
      }
    });
  };

  const saveZoneSettings = () => {
    const isOpen = zoneNumber1 > 5 ? "0" : operatinStatus ? "1" : "0";
    const isFire = zoneType === "fire" ? "1" : "0";
    const is24h = zoneType === "24h" ? "1" : "0";
    const isOrdinary = zoneType === "ordinary" ? "1" : "0";
    const hex = binToNumber(isOrdinary + is24h + isFire + isOpen);
    const vars = [zoneNumber1 - 1, hex];
    const command = createCommand(OPCODE.ZONES_SETTINGS, vars);
    window.location.href = `sms:${getAlarmNumber()}?body=${encodeURIComponent(command)}`;
  };

  const saveOutputSettings = () => {
    const isDingDong = outputType.includes("ding_dong") ? "1" : "0";
    const isSpeaker = outputType.includes("speaker") ? "1" : "0";
    const isSiren = outputType.includes("siren") ? "1" : "0";
    const isCall = outputType.includes("call") ? "1" : "0";
    const isSms = outputType.includes("sms") ? "1" : "0";
    const hex = binToNumber(isSms + isCall + isSiren + isSpeaker + isDingDong);
    const vars = [zoneNumber2 - 1, hex];
    const command = createCommand(OPCODE.OUTPUT_SETTINGS, vars);
    window.location.href = `sms:${getAlarmNumber()}?body=${encodeURIComponent(command)}`;
  };

  return (
    <div className="zone-page">
      <details className="accordion">
        <summary className="title">
          <SettingsIcon />
          <span className="accordion-text">{t("zonePage:zones_settings")}</span>
          <ArrowDownIcon className="accordion-arrow" />
        </summary>
        <div className="content">
          <CustomDropdown
            value={zoneNumber1}
            setValue={setZoneNumber1}
            options={[
              {
                text: `${t("zonePage:zone_number", { number: 1 })} (${t("zonePage:wired")})`,
                value: 1,
              },
              {
                text: `${t("zonePage:zone_number", { number: 2 })} (${t("zonePage:wired")})`,
                value: 2,
              },
              {
                text: `${t("zonePage:zone_number", { number: 3 })} (${t("zonePage:wired")})`,
                value: 3,
              },
              {
                text: `${t("zonePage:zone_number", { number: 4 })} (${t("zonePage:wired")})`,
                value: 4,
              },
              {
                text: `${t("zonePage:zone_number", { number: 5 })} (${t("zonePage:wired")})`,
                value: 5,
              },
              {
                text: `${t("zonePage:zone_number", { number: 6 })} (${t("zonePage:wireless")})`,
                value: 6,
              },
              {
                text: `${t("zonePage:zone_number", { number: 7 })} (${t("zonePage:wireless")})`,
                value: 7,
              },
              {
                text: `${t("zonePage:zone_number", { number: 8 })} (${t("zonePage:wireless")})`,
                value: 8,
              },
              {
                text: `${t("zonePage:zone_number", { number: 9 })} (${t("zonePage:wireless")})`,
                value: 9,
              },
              {
                text: `${t("zonePage:zone_number", { number: 10 })} (${t("zonePage:wireless")})`,
                value: 10,
              },
            ]}
            containerStyle={{ width: "100%", marginBottom: 16 }}
          />
          <div className="section-title">{t("zonePage:zone_type")}</div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 16,
            }}
          >
            <CustomButton
              text={t("zonePage:fire")}
              style={{ flexBasis: "32%" }}
              outline={zoneType != "fire"}
              onClick={() => setZoneType("fire")}
            />
            <CustomButton
              text={t("zonePage:h24")}
              style={{ flexBasis: "32%" }}
              outline={zoneType != "24h"}
              onClick={() => setZoneType("24h")}
            />
            <CustomButton
              text={t("zonePage:ordinary")}
              style={{ flexBasis: "32%" }}
              outline={zoneType != "ordinary"}
              onClick={() => setZoneType("ordinary")}
            />
          </div>
          {zoneNumber1 <= 5 && (
            <>
              <div className="section-title">
                {t("zonePage:operating_status")}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 16,
                }}
              >
                <CustomButton
                  text={t("zonePage:close")}
                  style={{ flexBasis: "45%" }}
                  outline={operatinStatus}
                  onClick={() => setOperatingStatus(false)}
                />
                <CustomButton
                  text={t("zonePage:open")}
                  style={{ flexBasis: "45%" }}
                  outline={!operatinStatus}
                  onClick={() => setOperatingStatus(true)}
                />
              </div>
            </>
          )}
          <CustomButton
            text={t("common:save")}
            className="custom-save-accordion"
            onClick={saveZoneSettings}
          />
        </div>
      </details>
      <details className="accordion">
        <summary className="title">
          <ZoneIcon />
          <span className="accordion-text">{t("zonePage:zones_status")}</span>
          <ArrowDownIcon className="accordion-arrow" />
        </summary>
        <div className="content">
          <CustomDropdown
            value={zoneNumber2}
            setValue={setZoneNumber2}
            options={[
              {
                text: `${t("zonePage:zone_number", { number: 1 })} (${t("zonePage:wired")})`,
                value: 1,
              },
              {
                text: `${t("zonePage:zone_number", { number: 2 })} (${t("zonePage:wired")})`,
                value: 2,
              },
              {
                text: `${t("zonePage:zone_number", { number: 3 })} (${t("zonePage:wired")})`,
                value: 3,
              },
              {
                text: `${t("zonePage:zone_number", { number: 4 })} (${t("zonePage:wired")})`,
                value: 4,
              },
              {
                text: `${t("zonePage:zone_number", { number: 5 })} (${t("zonePage:wired")})`,
                value: 5,
              },
              {
                text: `${t("zonePage:zone_number", { number: 6 })} (${t("zonePage:wireless")})`,
                value: 6,
              },
              {
                text: `${t("zonePage:zone_number", { number: 7 })} (${t("zonePage:wireless")})`,
                value: 7,
              },
              {
                text: `${t("zonePage:zone_number", { number: 8 })} (${t("zonePage:wireless")})`,
                value: 8,
              },
              {
                text: `${t("zonePage:zone_number", { number: 9 })} (${t("zonePage:wireless")})`,
                value: 9,
              },
              {
                text: `${t("zonePage:zone_number", { number: 10 })} (${t("zonePage:wireless")})`,
                value: 10,
              },
            ]}
            containerStyle={{ width: "100%", marginBottom: 16 }}
          />
          <div className="section-title">{t("zonePage:output_type")}</div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              rowGap: 16,
              justifyContent: "space-between",
              marginBottom: 16,
            }}
          >
            <CustomButton
              text={t("zonePage:ding_dong")}
              style={{ flexBasis: "32%" }}
              outline={!outputType.includes("ding_dong")}
              onClick={() => addOrRemoveOutputType("ding_dong")}
            />
            <CustomButton
              text={t("zonePage:speaker")}
              style={{ flexBasis: "32%" }}
              outline={!outputType.includes("speaker")}
              onClick={() => addOrRemoveOutputType("speaker")}
            />
            <CustomButton
              text={t("zonePage:siren")}
              style={{ flexBasis: "32%" }}
              outline={!outputType.includes("siren")}
              onClick={() => addOrRemoveOutputType("siren")}
            />
            <CustomButton
              text={t("zonePage:call")}
              style={{ flexBasis: "32%" }}
              outline={!outputType.includes("call")}
              onClick={() => addOrRemoveOutputType("call")}
            />
            <CustomButton
              text={t("zonePage:sms")}
              style={{ flexBasis: "32%" }}
              outline={!outputType.includes("sms")}
              onClick={() => addOrRemoveOutputType("sms")}
            />
          </div>
          <CustomButton
            text={t("common:save")}
            className="custom-save-accordion"
            onClick={saveOutputSettings}
          />
        </div>
      </details>
    </div>
  );
};

export default ZonePage;
