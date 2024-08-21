import React from "react";

interface DateTimePickerProps {
  dateValue: string;
  timeValue: string;
  onDateChange: (value: string) => void;
  onTimeChange: (value: string) => void;
  dateId: string;
  timeId: string;
  formItemClass?: string;
  iconClass?: string;
  inputClass?: string;
}

const DateTimePicker: React.FC<DateTimePickerProps> = ({
  dateValue,
  timeValue,
  onDateChange,
  onTimeChange,
  dateId,
  timeId,
  formItemClass = "form-item",
  iconClass = "icon-calendar",
  inputClass = "datetime-input",
}) => {
  return (
    <div className={formItemClass}>
      <label htmlFor={dateId} className={iconClass}>
        <img src="/calender-icon.svg" alt="calendar-icon" />
      </label>
      <input
        type="date"
        id={dateId}
        name={dateId}
        value={dateValue}
        onChange={(e) => onDateChange(e.target.value)}
        className={inputClass}
      />
      <input
        type="time"
        id={timeId}
        name={timeId}
        value={timeValue}
        onChange={(e) => onTimeChange(e.target.value)}
        className={inputClass}
      />
    </div>
  );
};

export default DateTimePicker;
