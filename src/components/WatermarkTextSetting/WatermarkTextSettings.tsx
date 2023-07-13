import React from "react";
import { FormField } from "../FormField/FormField";
import { FormItem } from "../FormItem/FormItem";
import { selectPositionOptions, selectFontOptions } from "../../data";
import { DEFAULT_TEXT_SIZE, DEFAULT_TEXT_INDENT } from "../../constants";

type WatermarkTextSettingsType = {
  onChangeColorHandler: React.ChangeEventHandler<HTMLInputElement>;
  onChangeSizeHandler: React.ChangeEventHandler<HTMLInputElement>;
  onChangePositionHandler: React.ChangeEventHandler<HTMLSelectElement>;
  onChangeFontHandler: React.ChangeEventHandler<HTMLSelectElement>;
  onChangeIndentHandler: React.ChangeEventHandler<HTMLInputElement>;
};

export const WatermarkTextSettings: React.FC<WatermarkTextSettingsType> = ({
  onChangeColorHandler,
  onChangeSizeHandler,
  onChangePositionHandler,
  onChangeFontHandler,
  onChangeIndentHandler,
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
      </FormItem>
      <FormItem>
        <FormField
          fieldType="number"
          fieldId="textSize"
          labelText="Choose size:"
          placeholder={DEFAULT_TEXT_SIZE}
          onChangeHandler={onChangeSizeHandler}
        />
      </FormItem>
      <FormItem>
        <FormField
          fieldType="select"
          fieldId="font"
          labelText="Choose font:"
          selectProps={{
            options: selectFontOptions,
            onChange: onChangeFontHandler,
          }}
        />
      </FormItem>
      <FormItem>
        <FormField
          fieldType="select"
          fieldId="position"
          labelText="Choose position:"
          selectProps={{
            options: selectPositionOptions,
            onChange: onChangePositionHandler,
          }}
        />
      </FormItem>
      <FormItem>
        <FormField
          fieldType="number"
          fieldId="textIndent"
          labelText="Choose text indent:"
          placeholder={`${DEFAULT_TEXT_INDENT}`}
          onChangeHandler={onChangeIndentHandler}
        />
      </FormItem>
    </>
  );
};
