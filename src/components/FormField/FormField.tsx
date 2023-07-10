import React from "react";
import './formField.css'

export type FormFieldType = {
  labelText?: string;
  fieldType?: "text" | "color" | "file" | "number" | "select";
  fieldId: string;
  onChangeHandler?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  placeholder?: string
};

export const FormField: React.FC<FormFieldType> = ({
  labelText,
  fieldId,
  fieldType = "text",
  onChangeHandler,
  placeholder
}) => {
  return (
    <>
      {labelText ? (
        <label className="form-label" htmlFor={fieldId}>
          {labelText}
        </label>
      ) : null}
      <input
        className="form-field-text"
        id={fieldId}
        type={fieldType}
        onChange={onChangeHandler}
        placeholder={placeholder}
      />
    </>
  );
};
