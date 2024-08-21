import React from "react";

interface Option {
  value: string;
  label: string;
}

interface DropdownSelectProps {
  id: string;
  options: Option[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  placeholder?: string;
}

const DropdownSelect: React.FC<DropdownSelectProps> = ({
  id,
  options,
  value,
  onChange,
  className = "",
  placeholder = "Select an option",
}) => {
  return (
    <select
      id={id}
      className={`dropdown-select ${className}`}
      value={value}
      onChange={onChange}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default DropdownSelect;
