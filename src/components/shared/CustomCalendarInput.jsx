import React, { useRef } from "react";
import CalendarIcon from "./../icons/CalendarIcon";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const EN_DIGITS = ["0","1","2","3","4","5","6","7","8","9"];

const CustomCalendarInput = ({
  value,
  onChange,
  containerStyle,
  withReset = false,
  ...props
}) => {
  const datePickerRef = useRef();
  return (
    <div
      className="custom-input-container"
      style={containerStyle}
      onClick={() => datePickerRef.current.openCalendar()}
    >
      <div className="icon">
        <CalendarIcon />
      </div>
      <DatePicker
        ref={datePickerRef}
        calendar={persian}
        locale={persian_fa}
        value={value}
        onChange={onChange}
        containerClassName="custom-calendar-input"
        calendarPosition="bottom-right"
        editable={false}
        digits={EN_DIGITS}
        {...props}
      />
      {withReset && (
        <button type="button" onClick={() => onChange(null)}>
          ریست
        </button>
      )}
    </div>
  );
};

export default CustomCalendarInput;
