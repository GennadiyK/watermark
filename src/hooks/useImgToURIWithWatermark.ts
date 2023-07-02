import { useEffect, useState } from "react";
export const useImgToURIWithWatermark = ({
  fillText,
  src,
}: {
  fillText: string;
  src: string;
}) => {
  const [uri, setUri] = useState();
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  const imageObj = new Image();

  useEffect(() => {
    imageObj.onload = function () {
      context.drawImage(imageObj, 0, 0, 200, 200);
      context.fillStyle = "white";
      context.textBaseline = "middle";
      context.font = "50px 'Montserrat'";
      context.fillText(fillText, 10, 20);
      var pngUrl = canvas.toDataURL();
      setUri(pngUrl);
    };
  }, [fillText, src]);

  useEffect(() => {
    imageObj.crossOrigin = "anonymous"; //not necessary, if image hosted on same server
    imageObj.src = src;
  }, [src]);

  return uri;
};
