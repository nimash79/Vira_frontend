import moment from "jalali-moment";
import { FIX_TEXT } from "./constants";

export const twoDigit = (num) => {
  return ("0" + num).slice(-2);
};

export const toShamsi = (date) => {
  moment.locale("fa", { useGregorianParser: true });
  return moment(date).format("YYYY/MM/DD");
};

export const getTime = (date) => {
  moment.locale("fa", { useGregorianParser: true });
  return moment(date).format("hh:mm");
};

export const formatTimeToHHmmss = (timeValue) => {
  if (!timeValue) return "";
  const parts = timeValue.split(":"); // ["HH","mm"] or ["HH","mm","ss"]
  const hh = parts[0].padStart(2, "0");
  const mm = (parts[1] ?? "00").padStart(2, "0");
  const ss = (parts[2] ?? "00").padStart(2, "0");
  return `${hh}${mm}${ss}`;
}

export const toMiladiYYMMDD = (shamsiDate) => {
  return moment(shamsiDate, "jYYYY/jMM/jDD").format("YYMMDD");
}


export const bin4ToHex = (bin4) => {
  if (!/^[01]{4}$/.test(bin4)) throw new Error("Expected exactly 4 bits (e.g. '1010').");
  return parseInt(bin4, 2).toString(16).toUpperCase();
}

export const bin5ToHex = (bin5) => {
  if (!/^[01]{5}$/.test(bin5)) throw new Error("Expected exactly 5 bits (e.g. '10101').");
  return parseInt(bin5, 2).toString(16).toUpperCase().padStart(2, "0");
}

export const binToNumber = (bin) => {
  if (!/^[01]+$/.test(bin)) throw new Error("Expected only 0/1 characters.");
  return parseInt(bin, 2);
}


export const getAlarmNumber = () => {
  return "+" + localStorage.getItem("alarm_number");
}

export const getAlarmPassword = () => {
  return localStorage.getItem("alarm_password");
}

export const createCommand = (op_code, vars) => {
  let command = `${FIX_TEXT}*${getAlarmPassword()}*${op_code}`;
  for (let i = 0; i < vars.length; i++) {
    command += `*${vars[i]}`;
  }
  command += "#";
  return command;
};
