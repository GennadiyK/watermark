import React, { useState } from "react";
import {SingleValue, ActionMeta} from 'react-select'
import {SelectOption} from '../Select/Select'
import { WatermarkTextSettings } from "../WatermarkTextSetting/WatermarkTextSettings";
import { FormItem } from "../FormItem/FormItem";
import { FormField } from "../FormField/FormField";
import { WatermarkPositionType, WatermarkTextFont } from "../../types";
import "./watermarkForm.css";

type WatermarkFormProps = {
  setWatermarkText: React.Dispatch<React.SetStateAction<string>>;
  setInitUri: React.Dispatch<
    React.SetStateAction<string | ArrayBuffer | undefined>
  >;
  setTextColor: React.Dispatch<React.SetStateAction<string>>;
  setTextSize: React.Dispatch<React.SetStateAction<string>>;
  setTextPosition: React.Dispatch<React.SetStateAction<WatermarkPositionType>>;
  setTextFont: React.Dispatch<React.SetStateAction<WatermarkTextFont>>;
  setTextIndent: React.Dispatch<React.SetStateAction<number>>;
};

export const WatermarkForm: React.FC<WatermarkFormProps> = ({
  setWatermarkText,
  setInitUri,
  setTextColor,
  setTextSize,
  setTextPosition,
  setTextFont,
  setTextIndent,
}) => {
  const [text, setText] = useState("");
  const [fileIsChosen, setFileIsChosen] = useState(false);
  const onTextFieldChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
    setWatermarkText(e.target.value);
  };

  const onFileFieldChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e?.target?.files?.[0];
    const fileReader = new FileReader();
    fileReader.onload = () => {
      const srcData = fileReader.result;
      if (srcData) {
        setInitUri(srcData);
      }
    };
    if (file) {
      fileReader.readAsDataURL(new Blob([file]));
      setFileIsChosen(true);
    } else {
      setFileIsChosen(false);
    }
   
  };

  const onTextColoreChangeHandler: React.ChangeEventHandler<
    HTMLInputElement
  > = (e) => {
    setTextColor(e.target.value);
  };

  const onTextSizeChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setTextSize(e.target.value);
  };

  const onTextPositionChangeHandler:  ((newValue: SingleValue<SelectOption>, actionMeta: ActionMeta<SelectOption>) => void)  = (option) => {
    setTextPosition(option?.value as any); // ToDo: fix any
  };

  const onTextFontChangeHandler: ((newValue: SingleValue<SelectOption>, actionMeta: ActionMeta<SelectOption>) => void)  = (option) => {
  setTextFont(option?.value as any); // ToDo: fix any
};

  const onIndentChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setTextIndent(parseInt(e.target.value, 10));
  };


  return (
    <>
      <FormItem>
        <FormField
          fieldType="file"
          fieldId="fileField"
          labelText="Choose image:"
          onChangeHandler={onFileFieldChange}
        />
      </FormItem>
      {fileIsChosen && (
        <FormItem>
          <FormField
            fieldId="textField"
            labelText="Add watermark text:"
            onChangeHandler={onTextFieldChange}
          />
        </FormItem>
      )}
      {text && (
        <WatermarkTextSettings
          onChangeColorHandler={onTextColoreChangeHandler}
          onChangeSizeHandler={onTextSizeChangeHandler}
          onChangePositionHandler={onTextPositionChangeHandler}
          onChangeFontHandler={onTextFontChangeHandler}
          onChangeIndentHandler={onIndentChangeHandler}
        />
      )}
    </>
  );
};
