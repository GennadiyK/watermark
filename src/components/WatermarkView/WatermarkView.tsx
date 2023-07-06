import React from "react";
import "./watermarkView.css"

type WatermarkViewProps = {
  uri: string;
  imgAlt?: string;
};

export const WatermarkView: React.FC<WatermarkViewProps> = ({ uri }) => {
  return (
    <div className="watermark-view">{uri && <img src={uri} alt="" className="watermark-view-img"/>}</div>
  );
};
