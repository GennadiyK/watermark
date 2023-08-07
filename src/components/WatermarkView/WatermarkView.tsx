import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import {TextBlocks} from '../TextBlocks/Textblocks'
import {TextBlockType} from '../TextBlocks/TextBlock'

import "./watermarkView.css";

type WatermarkViewProps = {
  uri?: string;
  imgAlt?: string;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const WatermarkView: React.FC<WatermarkViewProps> = React.memo(
  ({ uri, setLoading}) => {
    const [textBlocks, setTextBlocks] = useState<TextBlockType[]>([]);

    const onLoad = () => setLoading(false);

    const addTextBlock = () => {
      setTextBlocks([...textBlocks, { text: "Add Watermark", id: uuidv4()}]);
    };

    const deleteBlock = (id: string) => {
      const filteredBlocks = textBlocks.filter((block) => block.id !== id )
      setTextBlocks(filteredBlocks)
    }


    return (
      uri && (
        <div className="watermark-view">
          <div className="watermark-view-img-wrapper">
            <img
              src={uri}
              alt=""
              className="watermark-view-img"
              onLoad={onLoad}
            />
          <TextBlocks onDelete={deleteBlock} blocks={[...textBlocks]}/>
          </div>
          <div className="watermark-view-btn-wrapper ">
            <button
              className="watermark-view-btn"
              aria-label="Add watermark"
              onClick={addTextBlock}
              type="button"
            >
              &#43; Add Watermark
            </button>
            <a className="watermark-view-btn" href={uri} download>
              &#x2714; Download file
            </a>
          </div>
        </div>
      )
    );
  }
);
