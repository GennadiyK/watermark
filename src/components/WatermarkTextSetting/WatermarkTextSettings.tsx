import React from "react";
import { FormField } from "../FormField/FormField";
import { FormItem } from "../FormItem/FormItem";
import { DEFAULT_TEXT_SIZE } from '../../constants'

type WatermarkTextSettingsType = {
  onChangeColorHandler: React.ChangeEventHandler<HTMLInputElement>;
  onChangeSizeHandler: React.ChangeEventHandler<HTMLInputElement>
  onChangePositionHandler: React.ChangeEventHandler<HTMLSelectElement>
};

export const WatermarkTextSettings: React.FC<WatermarkTextSettingsType> = ({
  onChangeColorHandler,
  onChangeSizeHandler,
  onChangePositionHandler
}) => {
  return (
    <>
      <FormItem>
        <FormField
          fieldType="color"
          fieldId="textColor"
          labelText="Choose color:"
          onChangeHandler={onChangeColorHandler}
        />
        <FormField
          fieldType="number"
          fieldId="textSize"
          labelText="Choose size:"
          placeholder={DEFAULT_TEXT_SIZE}
          onChangeHandler={onChangeSizeHandler}
        />
        <select onChange={onChangePositionHandler}>
          <option value="leftTop">left top</option>
          <option value="leftCenter">left center</option>
          <option value="leftBottom">left bottom</option>
        </select>
      </FormItem>
    </>
  );
};
