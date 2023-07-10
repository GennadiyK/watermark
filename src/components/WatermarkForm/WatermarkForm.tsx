import React, { useState } from "react";
import { WatermarkTextSettings } from "../WatermarkTextSetting/WatermarkTextSettings";
import { FormItem } from "../FormItem/FormItem";
import { FormField } from "../FormField/FormField";
import {WatermarkPositionType} from '../../hooks/types'
import "./watermarkForm.css";

type WatermarkFormProps = {
  setWatermarkText: React.Dispatch<React.SetStateAction<string>>;
  setInitUri: React.Dispatch<
    React.SetStateAction<string | ArrayBuffer | undefined>
  >;
  setTextColor: React.Dispatch<React.SetStateAction<string>>;
  setTextSize: React.Dispatch<React.SetStateAction<string>>;
  setTextPosition: React.Dispatch<React.SetStateAction<WatermarkPositionType>>;
};

export const WatermarkForm: React.FC<WatermarkFormProps> = ({
  setWatermarkText,
  setInitUri,
  setTextColor,
  setTextSize,
  setTextPosition
}) => {
  const [text, setText] = useState("");
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

  const onTextPositionChangeHandler: React.ChangeEventHandler<HTMLSelectElement> = (
    e
  ) => {
    console.log('e.target.value',e.target.value)
    setTextPosition(e.target.value as any); // ToDo: fix any
  };

  return (
    <>
      <FormItem>
        <FormField
          fieldId="textField"
          labelText="Add watermark text:"
          onChangeHandler={onTextFieldChange}
        />
      </FormItem>
      {text && (
        <WatermarkTextSettings
          onChangeColorHandler={onTextColoreChangeHandler}
          onChangeSizeHandler={onTextSizeChangeHandler}
          onChangePositionHandler={onTextPositionChangeHandler}
        />
      )}
      <FormItem>
        <FormField
          fieldType="file"
          fieldId="fileField"
          labelText="Choose image:"
          onChangeHandler={onFileFieldChange}
        />
      </FormItem>
    </>
  );
};
