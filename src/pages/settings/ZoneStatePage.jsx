import { useState } from "react";
import { useNavigate } from "react-router";
import ArrowBackIcon from "../../components/icons/ArrowBackIcon";
import CustomSwitch from "./../../components/shared/CustomSwitch";
import CustomButton from "./../../components/shared/CustomButton";
import { useTranslation } from "react-i18next";
import { notif_error, notif_success } from "../../utils/toast";
import { changeZoneStates } from "../../services/deviceService";

const ZoneStatePage = () => {
  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(false);
  const [state4, setState4] = useState(false);
  const [state5, setState5] = useState(false);
  const [state6, setState6] = useState(false);
  const [state7, setState7] = useState(false);
  const [state8, setState8] = useState(false);

  const navigate = useNavigate();

  const { t } = useTranslation();

  const onSubmit = async () => {
    try {
      await changeZoneStates({
        deviceId: "12345",
        zone_states: [
          state1,
          state2,
          state3,
          state4,
          state5,
          state6,
          state7,
          state8,
        ],
      });
      notif_success(t("common:success"));
      navigate("/");
    } catch (err) {
      console.log(err);
      notif_error(t("common:server_error"));
    }
  };

  return (
    <div className="zone-state">
      <div className="header">
        <div className="icon" onClick={() => navigate(-1)}>
          <ArrowBackIcon />
        </div>
        <p className="header-title">{t("zoneStatePage:title")}</p>
        <div></div>
      </div>
      <table className="zone-state-table">
        <thead>
          <tr>
            <th>{t("zoneStatePage:zone")}</th>
            <td></td>
            <th>{t("zoneStatePage:state")}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{t("zoneStatePage:zone_number", { number: 1 })}</td>
            <td></td>
            <td>
              <CustomSwitch
                checked={state1}
                onChange={() => setState1((x) => !x)}
              />
            </td>
          </tr>
          <tr>
            <td>{t("zoneStatePage:zone_number", { number: 2 })}</td>
            <td></td>
            <td>
              <CustomSwitch
                checked={state2}
                onChange={() => setState2((x) => !x)}
              />
            </td>
          </tr>
          <tr>
            <td>{t("zoneStatePage:zone_number", { number: 3 })}</td>
            <td></td>
            <td>
              <CustomSwitch
                checked={state3}
                onChange={() => setState3((x) => !x)}
              />
            </td>
          </tr>
          <tr>
            <td>{t("zoneStatePage:zone_number", { number: 4 })}</td>
            <td></td>
            <td>
              <CustomSwitch
                checked={state4}
                onChange={() => setState4((x) => !x)}
              />
            </td>
          </tr>
          <tr>
            <td>{t("zoneStatePage:zone_number", { number: 5 })}</td>
            <td></td>
            <td>
              <CustomSwitch
                checked={state5}
                onChange={() => setState5((x) => !x)}
              />
            </td>
          </tr>
          <tr>
            <td>{t("zoneStatePage:zone_number", { number: 6 })}</td>
            <td></td>
            <td>
              <CustomSwitch
                checked={state6}
                onChange={() => setState6((x) => !x)}
              />
            </td>
          </tr>
          <tr>
            <td>{t("zoneStatePage:zone_number", { number: 7 })}</td>
            <td></td>
            <td>
              <CustomSwitch
                checked={state7}
                onChange={() => setState7((x) => !x)}
              />
            </td>
          </tr>
          <tr>
            <td>{t("zoneStatePage:zone_number", { number: 8 })}</td>
            <td></td>
            <td>
              <CustomSwitch
                checked={state8}
                onChange={() => setState8((x) => !x)}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="button">
        <CustomButton text={t("common:confirm")} onClick={onSubmit} />
      </div>
    </div>
  );
};

export default ZoneStatePage;
