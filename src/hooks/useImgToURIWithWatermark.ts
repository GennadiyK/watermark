import { useEffect, useMemo, useState } from "react";
import {getPosition} from './helpers'
import {WatermarkPositionType} from './types'


export type UseImgToURIWithWatermarkType = {
  fillText: string;
  textColor: string;
  textSize: string;
  textPosition: WatermarkPositionType
  src: string;
};

export const useImgToURIWithWatermark = ({
  fillText,
  textColor,
  textSize,
  src,
  textPosition,
}: UseImgToURIWithWatermarkType) => {
  const [uri, setUri] = useState("");
  const imageObj = useMemo(() => new Image(), []);
console.log('textPosition', textPosition)
  useEffect(() => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    console.log('Position', textPosition)
    const [posX, posY] = getPosition(textPosition)

    imageObj.onload = function () {
      const imgHeight = imageObj.naturalHeight;
      const imgWidth = imageObj.naturalWidth;
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
        context.fillStyle = textColor;
        context.textBaseline = "middle";
        context.font = `${textSize}px 'Montserrat'`;
        context.fillText(fillText, posX, posY);
      }
      const imgUrl = canvas.toDataURL();
      setUri(imgUrl);
    };
  }, [imageObj, fillText, textColor, textSize, textPosition]);

  useEffect(() => {
    imageObj.crossOrigin = "anonymous"; //not necessary, if image hosted on same server
    imageObj.src = src;
  }, [imageObj, src, fillText, textColor, textSize, textPosition]);

  return uri;
};
