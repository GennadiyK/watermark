import React, { useState } from "react";
import {WatermarkTextSettings} from '../WatermarkTextSetting/WatermarkTextSettings'
import "./watermarkForm.css";

type WatermarkFormProps = {
  setWatermarkText: React.Dispatch<React.SetStateAction<string>>;
  setInitUri: React.Dispatch<
    React.SetStateAction<string | ArrayBuffer | undefined>
  >;
  setTextColor: React.Dispatch<React.SetStateAction<string>>
};

export const WatermarkForm: React.FC<WatermarkFormProps> = ({
  setWatermarkText,
  setInitUri,
  setTextColor
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

  const onTextColoreChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setTextColor(e.target.value)
  }

  return (
    <>
      <div className="form-item">
        <label className="form-label" htmlFor="textField">
          Add watermark text:
        </label>
        <input
          className="form-field-text"
          id="textField"
          type="text"
          onChange={onTextFieldChange}
        />
      </div>
      {text && <div className="form-item"><WatermarkTextSettings onChangeHandler={onTextColoreChangeHandler} /></div>}
      <div className="form-item">
        <label className="form-label" htmlFor="fileField">
          Choose image:
        </label>
        <input
          className="form-field-file"
          id="fileField"
          type="file"
          onChange={onFileFieldChange}
        />
      </div>
    </>
  );
};
