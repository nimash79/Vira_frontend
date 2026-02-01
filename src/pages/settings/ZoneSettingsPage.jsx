import { useState } from "react";
import { useNavigate } from "react-router";
import ArrowBackIcon from "../../components/icons/ArrowBackIcon";
import CustomCheckbox from "../../components/shared/CustomCheckbox";
import CustomButton from "../../components/shared/CustomButton";
import { useTranslation } from "react-i18next";

const ZoneSettingsPage = () => {
  const [check1, setCheck1] = useState(false);

  const {t} = useTranslation();

  const navigate = useNavigate();
  return (
    <div className="zone-settings">
      <div className="header">
        <div className="icon" onClick={() => navigate(-1)}>
          <ArrowBackIcon />
        </div>
        <p className="header-title">{t("zoneSettingsPage:title")}</p>
        <div></div>
      </div>
      <div className="custom-table-header">
        {t("zoneSettingsPage:wired_zone")}
      </div>
      <table className="custom-table with-header">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">{t("zoneSettingsPage:siren")}</th>
            <th scope="col">{t("zoneSettingsPage:alarm")}</th>
            <th scope="col">{t("zoneSettingsPage:ding_dong")}</th>
            <th scope="col">{t("zoneSettingsPage:sms")}</th>
            <th scope="col">{t("zoneSettingsPage:tcall")}</th>
            <th scope="col">{t("zoneSettingsPage:gcall")}</th>
            <th scope="col">{t("zoneSettingsPage:not_use")}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>
              <CustomCheckbox
                checked={check1}
                onChange={() => setCheck1((c) => !c)}
              />
            </td>
            <td>
              <CustomCheckbox />
            </td>
            <td>
              <CustomCheckbox />
            </td>
            <td>
              <CustomCheckbox />
            </td>
            <td>
              <CustomCheckbox />
            </td>
            <td>
              <CustomCheckbox />
            </td>
            <td>
              <CustomCheckbox />
            </td>
          </tr>
          <tr>
            <th>2</th>
            <td>
              <CustomCheckbox
                checked={check1}
                onChange={() => setCheck1((c) => !c)}
              />
            </td>
            <td>
              <CustomCheckbox />
            </td>
            <td>
              <CustomCheckbox />
            </td>
            <td>
              <CustomCheckbox />
            </td>
            <td>
              <CustomCheckbox />
            </td>
            <td>
              <CustomCheckbox />
            </td>
            <td>
              <CustomCheckbox />
            </td>
          </tr>
          <tr>
            <th>3</th>
            <td>
              <CustomCheckbox
                checked={check1}
                onChange={() => setCheck1((c) => !c)}
              />
            </td>
            <td>
              <CustomCheckbox />
            </td>
            <td>
              <CustomCheckbox />
            </td>
            <td>
              <CustomCheckbox />
            </td>
            <td>
              <CustomCheckbox />
            </td>
            <td>
              <CustomCheckbox />
            </td>
            <td>
              <CustomCheckbox />
            </td>
          </tr>
          <tr>
            <th>4</th>
            <td>
              <CustomCheckbox
                checked={check1}
                onChange={() => setCheck1((c) => !c)}
              />
            </td>
            <td>
              <CustomCheckbox />
            </td>
            <td>
              <CustomCheckbox />
            </td>
            <td>
              <CustomCheckbox />
            </td>
            <td>
              <CustomCheckbox />
            </td>
            <td>
              <CustomCheckbox />
            </td>
            <td>
              <CustomCheckbox />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="custom-table-header">{t("zoneSettingsPage:wireless_zone")}</div>
      <table className="custom-table with-header">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">{t("zoneSettingsPage:siren")}</th>
            <th scope="col">{t("zoneSettingsPage:alarm")}</th>
            <th scope="col">{t("zoneSettingsPage:ding_dong")}</th>
            <th scope="col">{t("zoneSettingsPage:sms")}</th>
            <th scope="col">{t("zoneSettingsPage:tcall")}</th>
            <th scope="col">{t("zoneSettingsPage:gcall")}</th>
            <th scope="col">{t("zoneSettingsPage:not_use")}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>
              <CustomCheckbox
                checked={check1}
                onChange={() => setCheck1((c) => !c)}
              />
            </td>
            <td>
              <CustomCheckbox />
            </td>
            <td>
              <CustomCheckbox />
            </td>
            <td>
              <CustomCheckbox />
            </td>
            <td>
              <CustomCheckbox />
            </td>
            <td>
              <CustomCheckbox />
            </td>
            <td>
              <CustomCheckbox />
            </td>
          </tr>
          <tr>
            <th>2</th>
            <td>
              <CustomCheckbox
                checked={check1}
                onChange={() => setCheck1((c) => !c)}
              />
            </td>
            <td>
              <CustomCheckbox />
            </td>
            <td>
              <CustomCheckbox />
            </td>
            <td>
              <CustomCheckbox />
            </td>
            <td>
              <CustomCheckbox />
            </td>
            <td>
              <CustomCheckbox />
            </td>
            <td>
              <CustomCheckbox />
            </td>
          </tr>
          <tr>
            <th>3</th>
            <td>
              <CustomCheckbox
                checked={check1}
                onChange={() => setCheck1((c) => !c)}
              />
            </td>
            <td>
              <CustomCheckbox />
            </td>
            <td>
              <CustomCheckbox />
            </td>
            <td>
              <CustomCheckbox />
            </td>
            <td>
              <CustomCheckbox />
            </td>
            <td>
              <CustomCheckbox />
            </td>
            <td>
              <CustomCheckbox />
            </td>
          </tr>
          <tr>
            <th>4</th>
            <td>
              <CustomCheckbox
                checked={check1}
                onChange={() => setCheck1((c) => !c)}
              />
            </td>
            <td>
              <CustomCheckbox />
            </td>
            <td>
              <CustomCheckbox />
            </td>
            <td>
              <CustomCheckbox />
            </td>
            <td>
              <CustomCheckbox />
            </td>
            <td>
              <CustomCheckbox />
            </td>
            <td>
              <CustomCheckbox />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="button">
        <CustomButton text={t("common:confirm")} />
      </div>
    </div>
  );
};

export default ZoneSettingsPage;
