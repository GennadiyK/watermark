import { useEffect, useMemo, useState } from "react";
import { getPosition } from "./helpers";
import { WatermarkPositionType, WatermarkTextFont } from "../types";


type CustomFontsType<N> = {
  fontName: N
  url: string | BinaryData
}

export type UseImgToURIWithWatermarkType<T> = {
  fillText: string;
  textColor: string;
  textSize: string;
  textPosition: WatermarkPositionType;
  textFont: WatermarkTextFont;
  customFontsUrl?: CustomFontsType<T>[], 
  textIndent: number;
  src: string;
};

export const useImgToURIWithWatermark = <T extends string>({
  fillText,
  textColor,
  textSize,
  src,
  textPosition,
  textFont,
  textIndent,
  customFontsUrl
}: UseImgToURIWithWatermarkType<T>) => {
  const [uri, setUri] = useState("");
  const imageObj = useMemo(() => new Image(), []);

  useEffect(() => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    const customFonts = customFontsUrl ? customFontsUrl.map(({fontName, url}) =>(new FontFace(fontName, `url(${url})`))) : undefined

    imageObj.onload = function () {
      const imgHeight = imageObj.naturalHeight;
      const imgWidth = imageObj.naturalWidth;
      const {
        position: [posX, posY],
        textAlign,
      } = getPosition(textPosition, textIndent, imageObj);
      canvas.height = imgHeight;
      canvas.width = imgWidth;
      if (context) {
        context.drawImage(
          imageObj,
          0,
          0,
          imgWidth,
          imgHeight,
          0,
          0,
          imgWidth,
          imgHeight
        );
        context.textAlign = textAlign;
        context.textBaseline = "middle";
        context.fillStyle = textColor;

        customFonts?.forEach((font) =>{
          font.load().then(function (font) {
            document.fonts.add(font);
          });
        })

        context.font = `${textSize}px '${textFont}'`;
        context.fillText(fillText, posX, posY);
      }
      const imgUrl = canvas.toDataURL();
      setUri(imgUrl);
    };

    return () => {
      customFonts?.forEach((font) => {
        document.fonts.delete(font);
      })
      
    }
  }, [
    imageObj,
    fillText,
    textColor,
    textSize,
    textPosition,
    textIndent,
    textFont,
    customFontsUrl
  ]);

  useEffect(() => {
    imageObj.crossOrigin = "anonymous"; //not necessary, if image hosted on same server
    imageObj.src = src;
  }, [
    imageObj,
    src,
    fillText,
    textColor,
    textSize,
    textPosition,
    textIndent,
    textFont,
    customFontsUrl
  ]);

  return uri;
};
