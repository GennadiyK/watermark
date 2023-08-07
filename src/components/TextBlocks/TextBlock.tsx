import React, { useState } from "react";
import cl from 'classnames'
import trashIcon from '../../assets/trash.svg'



export type TextBlockType = {
  id: string;
  text: string;
}

export type TextBlockProps = {
  onDelete: (id: string) => void
} & TextBlockType;

export const TextBlock: React.FC<TextBlockProps> = ({ id, text, onDelete }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [content, setContent] = useState(text);
  const classNames = cl('watermark-text', {'watermark-text-editable': isEditable})

  const handleOnblur: React.FocusEventHandler<HTMLParagraphElement> = (e) => {
    setContent(e.currentTarget.innerHTML);
    setIsEditable(false);
  };

  return (
    <li className="watermark-text-block" key={id}>
      <p
        className={classNames}
        onDoubleClick={() => setIsEditable(true)}
        onBlur={handleOnblur}
        
        tabIndex={isEditable ? 0 : -1}
        contentEditable={isEditable}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <button className="watermark-text-delete-btn" title="Delete Text" onClick={() => onDelete(id)} aria-label="Delete Text"><img src={trashIcon} width={16} height={16}/></button>
    </li>
  );
};
