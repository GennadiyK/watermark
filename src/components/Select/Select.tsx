import React from "react";
import Select, {Props, StylesConfig} from 'react-select'
import './select.css'

export type SelectOption = {
  label: string;
  value: string;
};

export type SelectProps = {
  className?: string;
  options: SelectOption[];
} & Props<SelectOption, boolean>

export const SelectComponent: React.FC<SelectProps> = ({ onChange, options, defaultValue }) => {
  const fontStyles: StylesConfig<SelectOption> =  {
    option: (styles, {data}) => {
      return {
        ...styles,
        fontFamily: data.value
      }
    }
  }
  return (
    <Select defaultValue={defaultValue} id="position"  options={options} styles={fontStyles} onChange={onChange}/>
  );
};
