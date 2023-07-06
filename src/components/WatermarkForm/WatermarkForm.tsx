import React from "react";
import './watermarkForm.css'

type WatermarkFormSettingsProps = {
  setWatermarkText: React.Dispatch<React.SetStateAction<string>>,
  setInitUri: React.Dispatch<React.SetStateAction<string | ArrayBuffer | undefined>>
};

export const WatermarkFormSettings: React.FC<WatermarkFormSettingsProps> = (
  {setWatermarkText, setInitUri}
) => {
  
  const onTextFieldChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
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
  return (
    <>
      <div className="form-item">
        <label className="form-label" htmlFor="textField">Add watermark text:</label>
        <input className="form-field-text" id="textField" type="text" onChange={onTextFieldChange} />
      </div>
      <div className="form-item">
        <label className="form-label" htmlFor="fileField">Choose image:</label>
        <input className="form-field-file" id="fileField" type="file" onChange={onFileFieldChange} />
      </div>
    </>
  );
};
