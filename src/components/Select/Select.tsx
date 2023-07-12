import React from "react";

export type SelectOption = {
  label: string;
  value: string;
};

export type SelectProps = {
  value?: string;
  disabled?: boolean;
  className?: string;
  options: SelectOption[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const Select: React.FC<SelectProps> = ({ onChange, options }) => {
  return (
    <select id="position" onChange={onChange}>
      {options.map(({ label, value }) => {
        return <option value={value}>{label}</option>;
      })}
      {/* <option value="leftTop">left top</option>
          <option value="leftCenter">left center</option>
          <option value="leftBottom">left bottom</option>
          <option value="rightTop">right top</option>
          <option value="rightCenter">right center</option>
          <option value="rightBottom">right bottom</option>
          <option value="center">center</option>
          <option value="topCenter">top center</option>
          <option value="bottomCenter">bottom center</option> */}
    </select>
  );
};
