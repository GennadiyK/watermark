import { useEffect, useMemo, useState } from "react";
import {getPosition} from './helpers'
import {WatermarkPositionType} from './types'


export type UseImgToURIWithWatermarkType = {
  fillText: string;
  textColor: string;
  textSize: string;
  textPosition: WatermarkPositionType
  textIndent: number
  src: string;
};

export const useImgToURIWithWatermark = ({
  fillText,
  textColor,
  textSize,
  src,
  textPosition,
  textIndent,
}: UseImgToURIWithWatermarkType) => {
  const [uri, setUri] = useState("");
  const imageObj = useMemo(() => new Image(), []);

  useEffect(() => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    
    imageObj.onload = function () {
      const imgHeight = imageObj.naturalHeight;
      const imgWidth = imageObj.naturalWidth;
      const {position:[posX, posY], textAlign} = getPosition(textPosition, textIndent, imageObj)
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
        context.textBaseline = "middle"
        context.fillStyle = textColor;
        context.font = `${textSize}px 'Montserrat'`;
        context.fillText(fillText, posX, posY);
      }
      const imgUrl = canvas.toDataURL();
      setUri(imgUrl);
    };
  }, [imageObj, fillText, textColor, textSize, textPosition, textIndent]);

  useEffect(() => {
    imageObj.crossOrigin = "anonymous"; //not necessary, if image hosted on same server
    imageObj.src = src;
  }, [imageObj, src, fillText, textColor, textSize, textPosition, textIndent]);

  return uri;
};
