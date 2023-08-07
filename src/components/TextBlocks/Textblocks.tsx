import React from "react";
import {TextBlock, TextBlockType} from './TextBlock'
import './TextBlocks.css'



export type TextBlocksProps = {
  blocks: TextBlockType[];
  onDelete: (id: string) => void
};

export const TextBlocks: React.FC<TextBlocksProps> = ({ blocks, onDelete }) => {
  return (
    <ul className="watermark-text-blocks">
      {blocks.map(({id, text}) => {
        return (
          <TextBlock key={id} id={id} text={text} onDelete={onDelete}/>
        );
      })}
    </ul>
  );
};

