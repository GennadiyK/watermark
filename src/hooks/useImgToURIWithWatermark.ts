import { useEffect, useMemo, useState } from "react";
export const useImgToURIWithWatermark = ({
  fillText,
  src,
}: {
  fillText: string;
  src: string;
}) => {
  const [uri, setUri] = useState("");
  const imageObj = useMemo(() => new Image(), []);

  useEffect(() => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
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
        context.fillStyle = "white";
        context.textBaseline = "middle";
        context.font = "50px 'Montserrat'";
        context.fillText(fillText, 10, 20);
      }
      const imgUrl = canvas.toDataURL();
      setUri(imgUrl);
    };
  }, [imageObj, fillText]);

  useEffect(() => {
    imageObj.crossOrigin = "anonymous"; //not necessary, if image hosted on same server
    imageObj.src = src;
  }, [imageObj, src]);

  return uri;
};
