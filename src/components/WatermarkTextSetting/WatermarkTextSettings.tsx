import React from "react";

type WatermarkTextSettingsType = {
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>
};

export const WatermarkTextSettings: React.FC<
  WatermarkTextSettingsType
> = ({onChangeHandler}) => {
  return (
    <>
      <label className="form-label" htmlFor="textColor">
        Choose color:
      </label>
      <input type="color" id="textColor" onChange={onChangeHandler} />
    </>
  );
};
