import React, {useContext} from "react";
import {SingleValue, ActionMeta} from 'react-select'
import {WatermarkContext} from '../../context'
import {SelectOption} from '../Select/Select'
import { FormField } from "../FormField/FormField";
import { FormItem } from "../FormItem/FormItem";
import { selectPositionOptions } from "../../data";
import { DEFAULT_TEXT_SIZE, DEFAULT_TEXT_INDENT } from "../../constants";

type WatermarkTextSettingsType = {
  onChangeColorHandler: React.ChangeEventHandler<HTMLInputElement>;
  onChangeSizeHandler: React.ChangeEventHandler<HTMLInputElement>;
  onChangePositionHandler: ((newValue: SingleValue<SelectOption>, actionMeta: ActionMeta<SelectOption>) => void)
  onChangeFontHandler: ((newValue: SingleValue<SelectOption>, actionMeta: ActionMeta<SelectOption>) => void)
  onChangeIndentHandler: React.ChangeEventHandler<HTMLInputElement>;
};

export const WatermarkTextSettings: React.FC<WatermarkTextSettingsType> = ({
  onChangeColorHandler,
  onChangeSizeHandler,
  onChangePositionHandler,
  onChangeFontHandler,
  onChangeIndentHandler,
}) => {
  const {fonts} = useContext(WatermarkContext)

  const fontOptions:SelectOption[] = fonts.map((font) => ({
    label: font,
    value: font
  }))

  return (
    <fieldset>
      <legend>Watermark Settings</legend>
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
            defaultValue: fontOptions[0],
            options: fontOptions,
            onChange: onChangeFontHandler as any, // TO DO fix
          }}
        />
      </FormItem>
      <FormItem>
        <FormField
          fieldType="select"
          fieldId="position"
          labelText="Choose position:"
          selectProps={{
            defaultValue: selectPositionOptions[0],
            options: selectPositionOptions,
            onChange: onChangePositionHandler as any, // TO DO fix
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
    </fieldset>
  );
};
