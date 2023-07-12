import { WatermarkPositionType } from "../types";

export const getPosition = (
  position: WatermarkPositionType,
  indent: number,
  img: HTMLImageElement
) => {
  const imgHeight = img.naturalHeight;
  const imgWidth = img.naturalWidth;
  const rightPosition = imgWidth - indent;
  const centerHPosition = imgHeight / 2;
  const centerWPosition = imgWidth / 2 - indent;
  const bottomPosition = imgHeight - indent;
  let textAlign: CanvasTextAlign = "left";

  if (position.includes("right")) {
    textAlign = "right";
  }

  if (
    position === "center" ||
    position === "bottomCenter" ||
    position === "topCenter"
  ) {
    textAlign = "center";
  }

  const positions: Record<WatermarkPositionType, number[]> = {
    leftTop: [indent, indent],
    leftCenter: [indent, centerHPosition],
    leftBottom: [indent, bottomPosition],
    rightTop: [rightPosition, indent],
    rightCenter: [rightPosition, centerHPosition],
    rightBottom: [rightPosition, bottomPosition],
    center: [centerWPosition, centerHPosition],
    bottomCenter: [centerWPosition, bottomPosition],
    topCenter: [centerWPosition, indent],
  };

  return { position: positions[position], textAlign };
};
