import React from "react";
import { SelectComponent, SelectProps } from "../Select/Select";
import "./formField.css";

type FieldType = "text" | "color" | "file" | "number" | "select";

export type FormFieldProps = {
  labelText?: string;
  fieldType?: FieldType;
  fieldId: string;
  onChangeHandler?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  placeholder?: string;
  selectProps?: SelectProps;
};

export const FormField: React.FC<FormFieldProps> = ({
  labelText,
  fieldId,
  fieldType = "text",
  onChangeHandler,
  placeholder,
  selectProps,
}) => {
  return (
    <>
      {labelText ? (
        <label className="form-label" htmlFor={fieldId}>
          {labelText}
        </label>
      ) : null}

      {fieldType === "select" && selectProps ? (
        <SelectComponent {...selectProps} />
      ) : (
        <input
          className="form-field-text"
          id={fieldId}
          type={fieldType}
          onChange={onChangeHandler}
          placeholder={placeholder}
        />
      )}
    </>
  );
};
