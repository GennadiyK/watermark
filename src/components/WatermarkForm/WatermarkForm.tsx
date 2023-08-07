import React from "react";
import { SingleValue, ActionMeta } from "react-select";
import { SelectOption } from "../Select/Select";
import { WatermarkTextSettings } from "../WatermarkTextSetting/WatermarkTextSettings";
import { FormItem } from "../FormItem/FormItem";
import { FormField } from "../FormField/FormField";
import { WatermarkPositionType, WatermarkTextFont } from "../../types";
import {debaunce} from '../../helpers'
import "./watermarkForm.css";

type WatermarkFormProps = {
  setInitUri: React.Dispatch<
    React.SetStateAction<string | undefined>
  >;
  setTextColor: React.Dispatch<React.SetStateAction<string>>;
  setTextSize: React.Dispatch<React.SetStateAction<string>>;
  setTextPosition: React.Dispatch<React.SetStateAction<WatermarkPositionType>>;
  setTextFont: React.Dispatch<React.SetStateAction<WatermarkTextFont>>;
  setTextIndent: React.Dispatch<React.SetStateAction<number>>;
  setImgIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const WatermarkForm: React.FC<WatermarkFormProps> = ({
  setInitUri,
  setTextColor,
  setTextSize,
  setTextPosition,
  setTextFont,
  setTextIndent,
  setImgIsLoading,
}) => {
  const onFileFieldChange = (setImgIsLoadingCallback: React.Dispatch<React.SetStateAction<boolean>>):React.ChangeEventHandler<HTMLInputElement> => (e) => {
    setImgIsLoadingCallback(true)
    const file = e?.target?.files?.[0];
    const fileReader = new FileReader();
    fileReader.onload = () => {
      const srcData = fileReader.result;
      if (typeof srcData === 'string') {
        setInitUri(srcData);
      }
    };
    if (file) {
      fileReader.readAsDataURL(new Blob([file]));
    } else {
      setInitUri(undefined);
    }
  };

  const onTextColoreChangeHandler: React.ChangeEventHandler<
    HTMLInputElement
  > = debaunce((e) => {
    setTextColor(e.target.value);
  }, 300);

  const onTextSizeChangeHandler: React.ChangeEventHandler<HTMLInputElement> = debaunce((
    e
  ) => {
    setTextSize(e.target.value);
  });

  const onTextPositionChangeHandler: (
    newValue: SingleValue<SelectOption>,
    actionMeta: ActionMeta<SelectOption>
  ) => void = debaunce((option) => {
    setTextPosition(option?.value as any); // ToDo: fix any
  });

  const onTextFontChangeHandler: (
    newValue: SingleValue<SelectOption>,
    actionMeta: ActionMeta<SelectOption>
  ) => void = (option) => {
    setTextFont(option?.value as any); // ToDo: fix any
  };

  const onIndentChangeHandler: React.ChangeEventHandler<HTMLInputElement> = debaunce((
    e
  ) => {
    setTextIndent(parseInt(e.target.value, 10));
  });

  return (
    <>
      <FormItem>
        <FormField
          fieldType="file"
          fieldId="fileField"
          labelText="Choose image:"
          onChangeHandler={onFileFieldChange(setImgIsLoading)}
        />
      </FormItem>
      <WatermarkTextSettings
        onChangeColorHandler={onTextColoreChangeHandler}
        onChangeSizeHandler={onTextSizeChangeHandler}
        onChangePositionHandler={onTextPositionChangeHandler}
        onChangeFontHandler={onTextFontChangeHandler}
        onChangeIndentHandler={onIndentChangeHandler}
      />
    </>
  );
};
