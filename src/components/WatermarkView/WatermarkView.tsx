import React from "react";
import "./watermarkView.css";

type WatermarkViewProps = {
  uri: string;
  imgAlt?: string;
};

export const WatermarkView: React.FC<WatermarkViewProps> = ({ uri }) => {
  return (
    <div className="watermark-view">
      {uri && (
        <>
          <div className="watermark-view-img-wrapper">
            <img src={uri} alt="" className="watermark-view-img" />
          </div>
          <a className="watermark-view-btn" href={uri} download>
            &#x2714; Download file
          </a>
        </>
      )}
    </div>
  );
};
